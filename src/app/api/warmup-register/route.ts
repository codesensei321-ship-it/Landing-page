import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/warmup-db'

export async function POST(req: NextRequest) {
  const { instance_id, license_key, mailboxes } = await req.json()

  if (!instance_id || !license_key || !Array.isArray(mailboxes)) {
    return NextResponse.json({ error: 'instance_id, license_key, and mailboxes[] required' }, { status: 400 })
  }

  const DODO_KEY = process.env.DODO_PRIVATE_KEY
  if (!DODO_KEY) return NextResponse.json({ error: 'Server config error' }, { status: 500 })

  const isTest = DODO_KEY.startsWith('test_')
  const apiUrl = isTest
    ? 'https://test.dodopayments.com/licenses/activate'
    : 'https://live.dodopayments.com/licenses/activate'

  try {
    const licResp = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key, name: instance_id })
    })
    if (!licResp.ok && licResp.status !== 201) {
      return NextResponse.json({ error: 'Invalid license. Cannot join pool.' }, { status: 401 })
    }
  } catch { /* grace period if license server unreachable */ }

  const db = getDb()
  const now = new Date().toISOString()

  for (const mb of mailboxes) {
    if (!mb.email) continue
    const existing = db.data.mailboxes.find(m => m.email === mb.email)
    if (existing) {
      existing.instance_id = instance_id
      existing.timezone = mb.timezone || 'UTC'
      existing.provider = mb.provider || 'smtp'
      existing.last_heartbeat = now
      existing.is_active = true
    } else {
      db.data.mailboxes.push({
        email: mb.email, instance_id, timezone: mb.timezone || 'UTC',
        provider: mb.provider || 'smtp', is_active: true,
        last_heartbeat: now, created_at: now,
      })
    }
  }

  const activeEmails = new Set(mailboxes.map((m: any) => m.email))
  db.data.mailboxes = db.data.mailboxes.map(m => {
    if (m.instance_id === instance_id && !activeEmails.has(m.email)) {
      return { ...m, is_active: false }
    }
    return m
  })

  db.write()

  const poolSize = db.data.mailboxes.filter(m => m.is_active).length
  const instanceCount = new Set(db.data.mailboxes.filter(m => m.is_active).map(m => m.instance_id)).size

  return NextResponse.json({ registered: mailboxes.length, pool_size: poolSize, instance_count: instanceCount })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' },
  })
}

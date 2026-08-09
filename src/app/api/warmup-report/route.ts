import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/warmup-db'

export async function POST(req: NextRequest) {
  const { instance_id, reports } = await req.json()
  if (!instance_id || !Array.isArray(reports)) {
    return NextResponse.json({ error: 'instance_id and reports[] required' }, { status: 400 })
  }

  const db = getDb()
  let updated = 0

  for (const report of reports) {
    const { sender_email, receiver_email, status, date } = report
    if (!sender_email || !receiver_email || !status) continue
    const taskDate = date || new Date().toISOString().split('T')[0]

    const task = db.data.tasks.find(t =>
      t.sender_email === sender_email && t.receiver_email === receiver_email && t.date === taskDate
    )

    if (task) {
      const statusOrder: Record<string, number> = { pending: 0, sent: 1, received: 2, opened: 3, replied: 4 }
      if ((statusOrder[status] || 0) > (statusOrder[task.status] || 0)) {
        task.status = status
        task[`${status}_at`] = new Date().toISOString()
        updated++
      }
    }
  }

  if (updated > 0) db.write()
  return NextResponse.json({ updated })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' },
  })
}

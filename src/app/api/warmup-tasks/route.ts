import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/warmup-db'
import { generateEmail } from '@/lib/warmup-templates'

function daysDiff(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1)
  const d2 = new Date(dateStr2)
  return Math.abs(Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)))
}

export async function GET(req: NextRequest) {
  const instance_id = req.nextUrl.searchParams.get('instance_id')
  if (!instance_id) return NextResponse.json({ error: 'instance_id required' }, { status: 400 })

  const db = getDb()
  const today = new Date().toISOString().split('T')[0]

  const myMailboxes = db.data.mailboxes.filter(m =>
    m.instance_id === instance_id && m.is_active)
  if (myMailboxes.length === 0) return NextResponse.json({ tasks: [] })

  const otherMailboxes = db.data.mailboxes.filter(m =>
    m.instance_id !== instance_id && m.is_active)
  if (otherMailboxes.length === 0) {
    return NextResponse.json({ tasks: [], message: 'No other mailboxes in pool yet' })
  }

  let todayTasks = db.data.tasks.filter(t =>
    t.date === today && t.sender_instance === instance_id)

  if (todayTasks.length === 0) {
    todayTasks = []
    for (const sender of myMailboxes) {
      const quota = Math.min(20, Math.max(2, myMailboxes.length <= 3 ? 5 : 10))
      const recentTargets = new Set(
        db.data.tasks
          .filter(t => t.sender_email === sender.email && daysDiff(t.date, today) < 7)
          .map(t => t.receiver_email)
      )
      const shuffled = [...otherMailboxes].sort(() => Math.random() - 0.5)
      const targets = shuffled
        .filter(t => !recentTargets.has(t.email) && t.email !== sender.email)
        .slice(0, quota)

      for (const target of targets) {
        const email = generateEmail()
        const task = {
          id: `${today}-${sender.email}-${target.email}`.replace(/[^a-z0-9\-@.]/gi, ''),
          date: today, sender_email: sender.email, sender_instance: instance_id,
          receiver_email: target.email, receiver_instance: target.instance_id,
          subject: email.subject, body: email.body, reply_body: email.reply,
          status: 'pending', created_at: new Date().toISOString(),
        }
        todayTasks.push(task)
        db.data.tasks.push(task)
      }
    }
    db.data.tasks = db.data.tasks.filter(t => daysDiff(t.date, today) < 14)
    db.write()
  }

  const pending = todayTasks.filter(t => t.status === 'pending')
  return NextResponse.json({ tasks: pending })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' },
  })
}

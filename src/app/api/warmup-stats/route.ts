import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/warmup-db'

export async function GET(req: NextRequest) {
  const instance_id = req.nextUrl.searchParams.get('instance_id')
  if (!instance_id) return NextResponse.json({ error: 'instance_id required' }, { status: 400 })

  const db = getDb()
  const activeMailboxes = db.data.mailboxes.filter(m => m.is_active)
  const myMailboxes = activeMailboxes.filter(m => m.instance_id === instance_id)
  const today = new Date().toISOString().split('T')[0]

  const poolStats = {
    total_mailboxes: activeMailboxes.length,
    total_instances: new Set(activeMailboxes.map(m => m.instance_id)).size,
    total_domains: new Set(activeMailboxes.map(m => m.email.split('@')[1])).size,
  }

  const mailboxStats: Record<string, any> = {}

  for (const mb of myMailboxes) {
    const sentTasks = db.data.tasks.filter(t => t.sender_email === mb.email)
    const recvTasks = db.data.tasks.filter(t => t.receiver_email === mb.email)
    const totalSent = sentTasks.filter(t => t.status !== 'pending').length
    const totalReceived = recvTasks.filter(t =>
      ['received', 'opened', 'replied'].includes(t.status)).length
    const totalReplied = recvTasks.filter(t => t.status === 'replied').length
    const inboxRate = totalSent > 0 ? Math.round((totalReceived / totalSent) * 100) : 0
    const replyRate = totalReceived > 0 ? Math.round((totalReplied / totalReceived) * 100) : 0
    const healthScore = Math.min(100,
      Math.round(inboxRate * 0.6 + replyRate * 0.3 + Math.min(totalSent, 50) * 0.2))

    mailboxStats[mb.email] = {
      total_sent: totalSent, total_received: totalReceived,
      inbox_rate: inboxRate, reply_rate: replyRate, health_score: healthScore,
      sent_today: sentTasks.filter(t =>
        t.date === today && t.status !== 'pending').length,
      received_today: recvTasks.filter(t =>
        t.date === today && ['received', 'opened', 'replied'].includes(t.status)).length,
    }
  }

  return NextResponse.json({ pool_stats: poolStats, mailbox_stats: mailboxStats })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' },
  })
}

import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/warmup-db'

export async function GET(req: NextRequest) {
  const sender = req.nextUrl.searchParams.get('sender')
  const receiver = req.nextUrl.searchParams.get('receiver')
  const date = req.nextUrl.searchParams.get('date')

  if (!sender || !receiver) {
    return NextResponse.json({ error: 'sender and receiver required' }, { status: 400 })
  }

  const db = getDb()
  const taskDate = date || new Date().toISOString().split('T')[0]

  const task = db.data.tasks.find(t =>
    t.sender_email === sender && t.receiver_email === receiver && t.date === taskDate
  )

  if (!task) return NextResponse.json({ error: 'Task not found' }, { status: 404 })

  return NextResponse.json({ reply_body: task.reply_body, subject: task.subject, sender_email: task.sender_email })
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' },
  })
}

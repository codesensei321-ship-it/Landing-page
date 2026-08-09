// Simple in-memory "database" for the warmup coordinator.
// Data persists within the serverless instance lifecycle.

interface Mailbox {
  email: string
  instance_id: string
  timezone: string
  provider: string
  is_active: boolean
  last_heartbeat: string
  created_at: string
}

interface Task {
  id: string
  date: string
  sender_email: string
  sender_instance: string
  receiver_email: string
  receiver_instance: string
  subject: string
  body: string
  reply_body: string
  status: string
  created_at: string
  [key: string]: string
}

interface DbData {
  mailboxes: Mailbox[]
  tasks: Task[]
}

class SimpleDb {
  data: DbData
  constructor() {
    this.data = { mailboxes: [], tasks: [] }
  }
  write() {
    // In-memory only — for persistent storage swap with Firebase/Postgres
  }
}

let dbInstance: SimpleDb | null = null

export function getDb(): SimpleDb {
  if (!dbInstance) {
    dbInstance = new SimpleDb()
  }
  return dbInstance
}

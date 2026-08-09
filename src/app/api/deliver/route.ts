import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const event = await req.json()
    console.log('[Webhook] Payment event received:', {
      type: event.type || 'unknown',
      customer_email: event.data?.customer?.email || 'unknown',
      product: event.data?.product?.name || 'cleanmails',
      amount: event.data?.amount || 0,
      timestamp: new Date().toISOString()
    })
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('[Webhook] Error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200 })
}

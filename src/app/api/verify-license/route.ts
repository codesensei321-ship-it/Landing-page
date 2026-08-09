import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { license_key, instance_name } = await req.json()

  if (!license_key) {
    return NextResponse.json({ error: 'License key is required.' }, { status: 400 })
  }

  const DODO_PRIVATE_KEY = process.env.DODO_PRIVATE_KEY
  if (!DODO_PRIVATE_KEY) {
    return NextResponse.json({ error: 'Server misconfiguration: Dodo Key missing.' }, { status: 500 })
  }

  const isTest = DODO_PRIVATE_KEY.startsWith('test_')

  try {
    const validateUrl = isTest
      ? 'https://test.dodopayments.com/licenses/validate'
      : 'https://live.dodopayments.com/licenses/validate'

    const validateResp = await fetch(validateUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key }),
    })

    if (validateResp.ok) {
      const validateData = await validateResp.json()
      const isValid = validateData.valid === true ||
        validateData.status === 'active' ||
        (validateData.id && validateResp.status < 300)

      if (isValid) {
        return NextResponse.json({ valid: true, message: 'License is valid.', license_data: validateData })
      }
    }

    const activateUrl = isTest
      ? 'https://test.dodopayments.com/licenses/activate'
      : 'https://live.dodopayments.com/licenses/activate'

    const activateResp = await fetch(activateUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ license_key, name: instance_name || 'cleanmails instance' }),
    })

    const activateData = await activateResp.json()

    if (activateResp.status === 201 || (activateResp.ok && activateData.id)) {
      return NextResponse.json({ valid: true, message: 'License activated successfully.', license_data: activateData })
    }

    return NextResponse.json({ valid: false, message: activateData.detail || activateData.message || 'Invalid or revoked license key.' }, { status: 401 })
  } catch (error) {
    console.error('License verification failed:', error)
    return NextResponse.json({ error: 'Internal server error verifying license.' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

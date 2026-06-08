import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

import { Card, Button } from '@heroui/react'
import { Check } from '@gravity-ui/icons'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">

        <Card className="w-full max-w-lg p-10 text-center">

          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-green-500/10">
              <Check width={40} height={40} />
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold mb-3">
            Payment Successful 🎉
          </h1>

          {/* MESSAGE */}
          <p className="mb-6 text-gray-500">
            We appreciate your business! A confirmation email will be sent to{' '}
            <span className="font-semibold text-blue-500">
              {customerEmail}
            </span>
          </p>

          {/* SUPPORT */}
          <div className="border rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-500">Need help?</p>
            <p className="font-medium">orders@example.com</p>
          </div>

          {/* BUTTON */}
          <Button color="primary" size="lg" as="a" href="/">
            Back to Home
          </Button>

        </Card>

      </div>
    )
  }

  return null
}
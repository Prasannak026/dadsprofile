import { useState } from 'react'
import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { openRazorpayCheckout } from '../lib/razorpay'
import { sendBookingEmail } from '../lib/email'

const bookingSteps = [
  'Complete secure payment of INR 500 via Razorpay.',
  'Choose a preferred slot on the scheduling calendar.',
  'Receive confirmation and meeting details by email.',
]

type PaymentStatus = 'idle' | 'processing' | 'success' | 'error'

const Booking = () => {
  const [status, setStatus] = useState<PaymentStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const schedulingUrl =
    (import.meta.env.VITE_SCHEDULING_URL as string | undefined) ||
    'https://calendly.com/your-handle/consultation'

  const handlePayment = async () => {
    setError(null)

    if (!form.name || !form.email) {
      setError('Please provide your name and email to continue.')
      return
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined
    if (!key) {
      setError('Razorpay key is missing. Please configure your .env file.')
      return
    }

    setStatus('processing')

    try {
      await openRazorpayCheckout({
        key,
        amount: 500 * 100,
        currency: 'INR',
        name: 'Pratap Darigi Consulting',
        description: 'Phone / Zoom Consultation',
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: '#3b6246' },
        handler: async () => {
          setStatus('success')
          try {
            await sendBookingEmail({
              name: form.name,
              email: form.email,
              phone: form.phone,
              message: 'Payment received for INR 500 consultation. Scheduling link shared.',
              service: 'Paid Consultation',
            })
          } catch (emailError) {
            setError(
              emailError instanceof Error
                ? emailError.message
                : 'Payment succeeded, but the email could not be sent.'
            )
          }
        },
      })
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Payment could not be completed.')
    }
  }

  return (
    <section className="section-pad" id="booking">
      <Container>
        <SectionHeading
          eyebrow="Booking"
          title="Book a paid consultation"
          description="Secure your session in minutes. After payment, schedule a Zoom or Google Meet call."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="card space-y-6 p-6">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.18em] text-forest-600">Process</p>
                <ul className="space-y-3 text-forest-700">
                  {bookingSteps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-forest-500" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-forest-700">
                  Full Name
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-forest-700">
                  Email
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="you@example.com"
                  />
                </label>
                <label className="text-sm text-forest-700 sm:col-span-2">
                  Phone (optional)
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    placeholder="+91"
                  />
                </label>
              </div>
              {error ? <p className="text-sm text-clay-700">{error}</p> : null}
              <PrimaryButton
                onClick={handlePayment}
                className="w-full"
                disabled={status === 'processing'}
              >
                {status === 'processing' ? 'Processing Payment...' : 'Pay INR 500 & Schedule'}
              </PrimaryButton>
              <p className="text-xs text-forest-600">
                Payments are processed securely via Razorpay. You will receive a confirmation email once
                the payment succeeds.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card space-y-4 p-6">
              <h3 className="text-2xl font-semibold text-forest-900">Schedule your call</h3>
              <p className="text-sm text-forest-700">
                After payment, use the embedded calendar to pick a preferred slot.
              </p>
              {status === 'success' ? (
                <iframe
                  title="Scheduling"
                  src={schedulingUrl}
                  className="h-[420px] w-full rounded-xl border border-sand-200 bg-white"
                />
              ) : (
                <div className="flex h-[420px] w-full items-center justify-center rounded-xl border border-dashed border-sand-300 bg-white/60 text-center text-sm text-forest-600">
                  Calendar will appear here after payment.
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Booking

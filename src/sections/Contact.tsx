import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import PrimaryButton from '../components/PrimaryButton'
import Reveal from '../components/Reveal'
import { sendContactEmail } from '../lib/email'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (!form.name || !form.email || !form.message) {
      setError('Please complete all required fields before sending.')
      return
    }

    setStatus('sending')

    try {
      await sendContactEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        service: 'Contact Form',
      })
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Unable to send your message.')
    }
  }

  return (
    <section className="section-pad" id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact • సంప్రదించండి • संपर्क करें"
          title="Get in Touch"
          description="Share your goals and challenges. You and Dr. Darigi will both receive a copy of your message."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <form className="card space-y-4 p-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-forest-700">
                  Name
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
              </div>
              <label className="text-sm text-forest-700">
                Phone
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                  value={form.phone}
                  onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="+91"
                />
              </label>
              <label className="text-sm text-forest-700">
                Message
                <textarea
                  required
                  className="mt-2 min-h-[140px] w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  placeholder="Describe your project, scale, and goals."
                />
              </label>
              {error ? <p className="text-sm text-clay-700">{error}</p> : null}
              <PrimaryButton className="w-full" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </PrimaryButton>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card flex h-full flex-col justify-between gap-6 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-forest-600">Direct contact</p>
                <p className="mt-3 text-xl font-semibold text-forest-900">pratap1964@yahoo.co.in</p>
                <p className="mt-3 text-sm text-forest-700">
                  Please include your farm scale, location, and consultation needs for the fastest
                  response.
                </p>
              </div>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-forest-200 bg-forest-50 p-4 text-sm text-forest-700"
                >
                  Thank you. Your message has been sent successfully.
                </motion.div>
              ) : (
                <div className="rounded-xl border border-sand-200 bg-white/70 p-4 text-sm text-forest-700">
                  Both you and Dr. Darigi will receive a copy of your message for record keeping.
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Contact

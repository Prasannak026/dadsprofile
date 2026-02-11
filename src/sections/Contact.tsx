import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import PrimaryButton from '../components/PrimaryButton'
import Reveal from '../components/Reveal'

const Contact = () => {

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
            <form 
              className="card space-y-4 p-6" 
              action="https://formsubmit.co/pratap1964@yahoo.co.in"
              method="POST"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting Dr. Pratap Darigi. I have received your message and will respond within 24-48 hours." />
              <input type="hidden" name="_template" value="box" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-forest-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm text-forest-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="text-sm text-forest-700">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                  placeholder="+91"
                />
              </label>
              <label className="text-sm text-forest-700">
                Message
                <textarea
                  name="message"
                  required
                  className="mt-2 min-h-[140px] w-full rounded-xl border border-sand-200 bg-white/80 px-4 py-2 text-sm"
                  placeholder="Describe your project, scale, and goals."
                />
              </label>
              <PrimaryButton className="w-full" type="submit">
                Send Message
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
              <div className="rounded-xl border border-sand-200 bg-white/70 p-4 text-sm text-forest-700">
                Both you and Dr. Darigi will receive a copy of your message for record keeping.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Contact

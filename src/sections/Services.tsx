import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const services = [
  {
    title: 'Phone / Zoom Consultation',
    price: 'INR 500 per session',
    description:
      'One-on-one guidance to resolve immediate technical, health, or operational challenges in poultry farming.',
  },
  {
    title: 'On-site Business Setup & Support',
    price: 'INR 50,000 flat fee',
    description:
      'Hands-on assistance for farm design, housing systems, workflows, and operational readiness.',
  },
  {
    title: 'Training & Advisory',
    price: 'Custom engagement',
    description:
      'Structured programs for startups, NGOs, and government-led rural development initiatives.',
  },
]

const Services = () => {
  return (
    <section className="section-pad" id="services">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Consulting built for clarity, growth, and sustainability"
          description="Tailored engagements that respect your scale, context, and goals."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="card flex h-full flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-forest-900">{service.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-forest-600">
                    {service.price}
                  </p>
                </div>
                <p className="text-base text-forest-700">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services

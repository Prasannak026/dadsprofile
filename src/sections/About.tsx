import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const About = () => {
  return (
    <section className="section-pad" id="about">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="A lifetime of poultry science and farmer-first innovation"
          description="With over 35 years of dedicated service in poultry science, I retired as Chief Technical Officer (CTO) from the ICAR-DPR, Hyderabad. I have contributed to national-level research, farmer outreach, and poultry production technologies across India."
        />
        <Reveal delay={0.1}>
          <div className="card p-8 text-base sm:text-lg text-forest-700">
            <p>
              My consulting work blends scientific rigor with practical, field-tested solutions. From
              backyard poultry models to large-scale commercial operations, I help clients implement
              sustainable systems that improve animal health, operational efficiency, and business
              outcomes.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default About

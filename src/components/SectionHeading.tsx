import Reveal from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className="space-y-4">
      {eyebrow ? <span className="pill">{eyebrow}</span> : null}
      <Reveal>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">{title}</h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base sm:text-lg text-forest-700">{description}</p>
        </Reveal>
      ) : null}
    </div>
  )
}

export default SectionHeading

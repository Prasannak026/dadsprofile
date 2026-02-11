import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const LeafIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12c6 0 8-6 16-6-2 10-8 14-16 14 0-4 2-8 6-10"
    />
  </svg>
)

const ShieldIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3"
    />
  </svg>
)

const HatchIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 12c0-3 2.5-6 5-6s5 3 5 6-2.5 6-5 6-5-3-5-6z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 17h16" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7v10M17 7v10" />
  </svg>
)

const NutritionIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8h12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 13h10" />
  </svg>
)

const PlanIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10v16H7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h4" />
  </svg>
)

const expertiseItems = [
  {
    title: 'Scientific poultry management (broilers, layers, native birds)',
    icon: <LeafIcon />,
  },
  {
    title: 'Breed selection and housing systems',
    icon: <NetworkIcon />,
  },
  {
    title: 'Poultry health, vaccination, and biosecurity',
    icon: <ShieldIcon />,
  },
  {
    title: 'Feed formulation and nutrition planning',
    icon: <NutritionIcon />,
  },
  {
    title: 'Hatchery operations and chick management',
    icon: <HatchIcon />,
  },
  {
    title: 'Poultry business planning and startup support',
    icon: <PlanIcon />,
  },
  {
    title: 'Rural and backyard poultry models',
    icon: <LeafIcon />,
  },
]

const Expertise = () => {
  return (
    <section className="section-pad" id="expertise">
      <Container>
        <SectionHeading
          eyebrow="Expertise • నైపుణ్యం • विशेषज्ञता"
          title="Focused guidance across the poultry value chain"
          description="Comprehensive consulting for farmers, entrepreneurs, startups, and development organizations. • రైతులు, వ్యాపారవేత్తలు, స్టార్టప్‌లు మరియు అభివృద్ధి సంస్థలకు సమగ్ర సలహా. • किसानों, उद्यमियों, स्टार्टअप्स और विकास संगठनों के लिए व्यापक परामर्श।"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="card flex h-full flex-col gap-4 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-100 text-forest-700">
                  {item.icon}
                </div>
                <p className="text-base text-forest-800">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Expertise

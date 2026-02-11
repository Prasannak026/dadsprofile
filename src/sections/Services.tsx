import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const services = [
  {
    title: 'Phone / Zoom Consultation',
    titleTe: 'ఫోన్ / జూమ్ సలహా',
    titleHi: 'फ़ोन / ज़ूम परामर्श',
    price: 'INR 500 per session',
    priceTe: 'ప్రతి సెషన్‌కు ₹500',
    priceHi: 'प्रति सत्र ₹500',
    description:
      'One-on-one guidance to resolve immediate technical, health, or operational challenges in poultry farming.',
    descriptionTe:
      'పౌల్ట్రీ వ్యవసాయంలో తాత్కాలిక సాంకేతిక, ఆరోగ్య లేదా కార్యాచరణ సమస్యలను పరిష్కరించడానికి ఒకరి-ఒకరి మార్గదర్శనం.',
    descriptionHi:
      'पोल्ट्री फार्मिंग में तत्काल तकनीकी, स्वास्थ्य या परिचालन चुनौतियों को हल करने के लिए व्यक्तिगत मार्गदर्शन।',
  },
  {
    title: 'On-site Business Setup & Support',
    titleTe: 'ఆన్-సైట్ వ్యవసాయ ఏర్పాటు మరియు మద్దతు',
    titleHi: 'ऑन-साइट व्यवसाय सेटअप और समर्थन',
    price: 'INR 50,000 flat fee',
    priceTe: '₹50,000 ఫ్లాట్ సామానులు',
    priceHi: '₹50,000 फ्लैट फीस',
    description:
      'Hands-on assistance for farm design, housing systems, workflows, and operational readiness.',
    descriptionTe:
      'ఫార్మ్ డిజైన్, హౌసింగ్ వ్యవస్థలు, వర్క్‌ఫ్లోలు మరియు కార్యాచరణ సిద్ధం కోసం ప్రత్యక్ష సహాయం.',
    descriptionHi:
      'खेत डिज़ाइन, आवास प्रणालियों, वर्कफ़्लो और परिचालन तैयारी के लिए व्यावहारिक सहायता।',
  },
  {
    title: 'Training & Advisory',
    titleTe: 'నిపుణులు మరియు సలహా',
    titleHi: 'प्रशिक्षण और सलाह',
    price: 'Custom engagement',
    priceTe: 'కస్టమ్ ఎంగేజ్‌మెంట్',
    priceHi: 'कस्टम एंगेजमेंट',
    description:
      'Structured programs for startups, NGOs, and government-led rural development initiatives.',
    descriptionTe:
      'స్టార్టప్‌లు, ఎన్జిఓలు మరియు ప్రభుత్వ నేతృత్వంలోని గ్రామీణ అభివృద్ధి పద్ధతులకు నిర్మాణిత కార్యక్రమాలు.',
    descriptionHi:
      'स्टार्टअप, एनजीओ और सरकार द्वारा चलाए जा रहे ग्रामीण विकास पहलों के लिए संरचित कार्यक्रम।',
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
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-forest-900">{service.title}</h3>
                  <p className="text-base text-forest-700">{service.titleTe}</p>
                  <p className="text-base text-forest-700">{service.titleHi}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-forest-600">
                    {service.price}
                  </p>
                  <p className="text-sm text-forest-600">{service.priceTe}</p>
                  <p className="text-sm text-forest-600">{service.priceHi}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base text-forest-700">{service.description}</p>
                  <p className="text-sm text-forest-600">{service.descriptionTe}</p>
                  <p className="text-sm text-forest-600">{service.descriptionHi}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services

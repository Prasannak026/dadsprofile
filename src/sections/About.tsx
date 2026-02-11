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
          <div className="card p-8 space-y-4">
            <p className="text-base sm:text-lg text-forest-700">
              My consulting work blends scientific rigor with practical, field-tested solutions. From
              backyard poultry models to large-scale commercial operations, I help clients implement
              sustainable systems that improve animal health, operational efficiency, and business
              outcomes.
            </p>
            <p className="text-base text-forest-700">
              నా సలహా పనులు శాస్త్రీయ ఖచ్చితత్వాన్ని ఆచరణాత్మక పరిష్కారాలతో కలుపుతాయి. ఇంటి వెనుక పక్షుల పెంపకం నుండి పెద్ద వాణిజ్య కార్యకలాపాల వరకు, నేను క్లయింట్లకు జంతు ఆరోగ్యం, కార్యాచరణ సామర్థ్యం మరియు వ్యాపార ఫలితాలను మెరుగుపరిచే స్థిరమైన వ్యవస్థలను అమలు చేయడంలో సహాయం చేస్తాను.
            </p>
            <p className="text-base text-forest-700">
              मेरा परामर्श कार्य वैज्ञानिक सटीकता को व्यावहारिक समाधानों के साथ जोड़ता है। घरेलू पोल्ट्री मॉडल से लेकर बड़े पैमाने के वाणिज्यिक संचालन तक, मैं ग्राहकों को टिकाऊ प्रणालियों को लागू करने में मदद करता हूं जो पशु स्वास्थ्य, परिचालन दक्षता और व्यावसायिक परिणामों में सुधार करते हैं।
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default About

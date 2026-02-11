import Container from '../components/Container'
import OutlineButton from '../components/OutlineButton'
import PrimaryButton from '../components/PrimaryButton'
import Reveal from '../components/Reveal'

const Hero = () => {
  return (
    <section className="section-pad" id="top">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Reveal>
            <span className="pill">Professional Poultry Consulting • వృత్తిపరమైన పౌల్ట్రీ సలహా • पेशेवर पोल्ट्री परामर्श</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Pratap Darigi
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg sm:text-xl text-forest-700">
              Poultry Consultant | Former CTO, ICAR-DPR, Hyderabad
            </p>
            <p className="text-base sm:text-lg text-forest-600">
              పౌల్ట్రీ సలహాదారు | మాజీ సిటిఓ, ఐసిఎఆర్-డిపిఆర్, హైదరాబాద్
            </p>
            <p className="text-base sm:text-lg text-forest-600">
              पोल्ट्री सलाहकार | पूर्व सीटीओ, आईसीएआर-डीपीआर, हैदराबाद
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-xl text-base sm:text-lg text-forest-700">
              35+ years of expertise in scientific poultry farming and business consulting.
            </p>
            <p className="max-w-xl text-base text-forest-600">
              శాస్త్రీయ పౌల్ట్రీ వ్యవసాయం మరియు వ్యాపార సలహాలో 35+ సంవత్సరాల నైపుణ్యం.
            </p>
            <p className="max-w-xl text-base text-forest-600">
              वैज्ञानिक पोल्ट्री फार्मिंग और व्यापार परामर्श में 35+ वर्षों की विशेषज्ञता।
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="#contact">Get Started</PrimaryButton>
              <OutlineButton href="#contact">Contact for Long-Term Support</OutlineButton>
            </div>
          </Reveal>
        </div>
        <Reveal className="flex justify-center" delay={0.2}>
          <div className="card flex h-80 w-72 flex-col items-center justify-center gap-4 overflow-hidden bg-white/70 text-center sm:h-96 sm:w-80">
            <img
              src="photos/IMG_6344.JPG"
              alt="Pratap Darigi portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Hero

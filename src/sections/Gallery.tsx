import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

const galleryItems = [
  {
    src: '/photos/01fb9439-0afd-4dd5-94dd-9d9a9765ba3a.jpg',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/09a41d73-7962-483b-867b-9c6b356da3b3.jpg',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/105b03f2-8215-4ecc-8c98-22af7a15b740.jpg',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/ab49db6c-3bb9-4c23-8699-6a315e531e27.jpg',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/bb8db9f6-a94b-4a12-9096-55acc368774d.jpg',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/f1d96b45-5d66-411d-a849-8af8bcaef760.JPG',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/IMG_6344.JPG',
    caption: 'IPC training, Netherlands',
  },
  {
    src: '/photos/415d52c7-ff56-49ce-b3b1-607f80629f91.JPG',
    caption: 'Poultry farm visit',
  },
  {
    src: '/photos/IMG_6352.JPG',
    caption: 'International visit',
  },
  {
    src: '/photos/IMG_8932.jpg',
    caption: 'Personal portrait',
  },
]

const Gallery = () => {
  return (
    <section className="section-pad" id="gallery">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from field work, training, and global exposure"
          description="Highlights from international training programs, farm visits, and professional events."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.04}>
              <figure className="card overflow-hidden">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="px-5 py-4 text-sm text-forest-700">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery

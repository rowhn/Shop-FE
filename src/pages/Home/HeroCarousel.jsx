import { Carousel } from 'react-bootstrap';
import Icon from '../../components/Icon.jsx';
import { Button } from '../../components/ui';
import { useConfig } from '../../context/Config.jsx';
import './HeroCarousel.css';

// ✏️ Slides of the big homepage slider. Edit text / links here. `image` is optional (put file in public/ e.g. '/slides/s1.jpg').
const SLIDES = [
  {
    eyebrow: 'Latest & greatest',
    title: 'The newest phones first in town',
    subtitle: 'See what is new and ask for today’s best price.',
    cta: ['Explore phones', '/phones'],
    theme: 'light',
    icon: 'phone',
    image: 'https://www.apple.com/in/iphone-duo/images/overview/media-hero/hero_endframe__gdt3l3spaqie_large.jpg',
  },
  {
    eyebrow: 'Repairs',
    title: 'Cracked screen? Weak battery?',
    subtitle: 'Bring your phone to Pranay Mobiles for a quick check and a clear quote.',
    cta: ['See repair services', '/repairs'],
    theme: 'dark',
    icon: 'wrench',
    image: 'https://www.prizminstitute.com/blog/wp-content/uploads/2025/12/mobile-phone-repairing-tools.jpg',
  },
  {
    eyebrow: 'Visit us in Ghugus',
    title: 'Your local mobile shop on Bank Of India Rd',
    subtitle: 'Walk in, see the phones in hand and get honest advice.',
    cta: ['Find the shop', '/contact'],
    theme: 'light',
    icon: 'mapPin',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYkCGHX1XAIdhrYHaSwv3-cTQ9Pns3FoUua9jZBTzfiDOntVgOhYMysyU&s=10',
  },
];

export default function HeroCarousel() {
  const { store } = useConfig();
  return (
    <section className="container pt-3 pt-md-4" aria-label="Highlights">
      <div className="pm-hero">
        <Carousel interval={6500} pause="hover" fade touch
          prevIcon={<span className="pm-hero__arrow" aria-hidden="true"><Icon name="chevronLeft" size={22} /></span>}
          nextIcon={<span className="pm-hero__arrow" aria-hidden="true"><Icon name="chevronRight" size={22} /></span>}
          prevLabel="Previous slide" nextLabel="Next slide">
          {SLIDES.map((b) => {
            const dark = b.theme === 'dark';
            return (
              <Carousel.Item key={b.title}>
                <div className={`pm-hero__slide ${dark ? 'is-dark' : 'is-light'}`}>
                  <div className="row g-0 align-items-center h-100">
                    <div className="col-md-7 col-lg-6">
                      <div className="pm-hero__text">
                        <p className="pm-hero__eyebrow">{b.eyebrow}</p>
                        <h1 className="pm-hero__title">{b.title}</h1>
                        <p className="pm-hero__sub">{b.subtitle}</p>
                        <div className="pm-hero__cta">
                          <Button to={b.cta[1]} size="lg" variant={dark ? 'secondary' : 'primary'}>{b.cta[0]}</Button>
                          <Button href={store.whatsappUrl} target="_blank" rel="noopener noreferrer" size="lg" variant="whatsapp"><Icon name="whatsapp" size={18} /> WhatsApp us</Button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-lg-6 d-none d-md-block h-100">
                      <div className="pm-hero__art">{b.image ? <img src={b.image} alt="" className="pm-hero__img" /> : <Icon name={b.icon} size={150} strokeWidth={0.8} className="pm-hero__icon" />}</div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}

import React , {useEffect, useState} from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  options?: EmblaOptionsType,
  align?: 'center',
  draggable?: false
}

const Carousel: React.FC<PropType> = () => {
  //const [emblaRef, emblaApi] = useEmblaCarousel({dragFree: false, loop: true}, [Autoplay({delay:1000, stopOnInteraction:false})])

  const [shuffledPosters, setShuffledPosters] = useState<string[]>([]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     emblaApi?.scrollTo(0); // ensure first slide starts centered
  //     emblaApi?.plugins().forEach(plugin => plugin?.destroy?.()); // stops autoplay from re-adding drag listeners
  //     emblaApi?.destroy(); // disables all event listeners like drag/swipe
  //   }
  // }, [emblaApi]);

  useEffect(() => {
    const posters = Array.from({ length: 49 }, (_, i) => `/posters/${i + 1}.jpg`);

    // Fisher-Yates shuffle
    for (let i = posters.length - 1; i > 0; i--) {
      console.log(posters[i])
      const j = Math.floor(Math.random() * (i + 1));
      [posters[i], posters[j]] = [posters[j], posters[i]];
    }

    setShuffledPosters(posters);
  }, []);

  return (
    <section className="embla">
      <div className="embla__viewport">
        <div className="embla__container">
          {shuffledPosters.map((path: string, index) => (
             <div key={index} className="embla__slide">
              <img
                src={path}
                alt={`Poster ${index + 1}`}
              />
           </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel

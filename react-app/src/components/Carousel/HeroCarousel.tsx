import React, { useState, useEffect } from 'react';

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: '/img/1920x1080/01.jpg',
    title: 'Hi-Tech Design',
    description: 'Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore',
    buttonText: 'Explore',
    buttonLink: '#'
  },
  {
    id: 2,
    image: '/img/1920x1080/02.jpg',
    title: 'Hi-Tech Design',
    description: 'Lorem ipsum dolor amet consectetur adipiscing dolore magna aliqua enim minim estudiat veniam siad venumus dolore',
    buttonText: 'Explore',
    buttonLink: '#'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    // Resume autoplay after user interaction
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="hero-carousel" className="carousel slide" data-ride="carousel">
      <div className="container">
        {/* Indicators */}
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentSlide ? 'active' : ''}
            />
          ))}
        </ol>
      </div>

      {/* Wrapper for slides */}
      <div className="carousel-inner" role="listbox">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`item ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh'
            }}
          >
            <div className="container">
              <div className="carousel-centered">
                <div className="margin-b-40">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p dangerouslySetInnerHTML={{ __html: slide.description }} />
                </div>
                <a 
                  href={slide.buttonLink} 
                  className="btn-theme btn-theme-sm btn-white-brd text-uppercase"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls (optional - can be hidden via CSS if not needed) */}
      <button
        className="carousel-control-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{ display: 'none' }} // Hidden by default to match original design
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        onClick={nextSlide}
        aria-label="Next slide"
        style={{ display: 'none' }} // Hidden by default to match original design
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default HeroCarousel;
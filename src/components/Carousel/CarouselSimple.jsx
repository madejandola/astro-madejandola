import React, { useEffect, useRef, useState } from 'react';
import Flickity from 'flickity';

export default function FlickityCarousel({ children }) {
  const carouselRef = useRef(null);
  const [Flickity, setFlickity] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flickity').then((module) => {
        setFlickity(module.default);
      });
    }
  }, []);

  useEffect(() => {
    if (Flickity && carouselRef.current) {
      new Flickity(carouselRef.current, {
        // Add your Flickity options here
        wrapAround: true,
      });
    }
  }, [Flickity]);

  return (
    <div ref={carouselRef} className="carousel">
      {children}
    </div>
  );
}

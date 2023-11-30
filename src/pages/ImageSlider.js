
import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '15%', height: 'auto' }}
      />
      <button onClick={showPrevious}>Previous</button>
      <button onClick={showNext}>Next</button>
    </div>
  );
};

export default ImageSlider;

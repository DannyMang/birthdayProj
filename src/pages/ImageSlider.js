import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, messages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff',
    border: '5px solid #ddd',
    padding: '8px 16px',
    borderRadius: '50px',
    cursor: 'pointer',
    outline: 'none',
  };
  const messageStyle = {
    color: 'black',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  useEffect(() => {
    // You can add any additional logic or side effects here
    // when currentIndex changes (e.g., updating messages).
  }, [currentIndex]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '20%', height: 'auto' }}
      />
      <p style = {messageStyle} >{messages[currentIndex]}</p>
      <button style={{ ...buttonStyle, left: '10px' }} onClick={showPrevious}>
        Previous
      </button>
      <button style={{ ...buttonStyle, right: '10px' }} onClick={showNext}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;

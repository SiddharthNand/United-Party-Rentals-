import React, { useState } from 'react';

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://i.imgur.com/d0Q2KB7.png',
    'https://i.imgur.com/Jdhywtp.png',
    'https://i.imgur.com/FxIwL6u.png',
    'https://i.imgur.com/Jdhywtp.png',
  ];

  const previousImage = () => {
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const nextImage = () => {
    const newIndex = currentImageIndex + 1;
    setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
  };

  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="review" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;


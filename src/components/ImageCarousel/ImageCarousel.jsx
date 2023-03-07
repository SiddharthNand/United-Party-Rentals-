import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const images = [
'https://i.imgur.com/6f7LjE6.png',
'https://i.imgur.com/xbqFDTc.png',
'https://i.imgur.com/XWxoGTB.png',
];

const previousImage = () => {
const newIndex = currentImageIndex - 1;
setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
};

const nextImage = () => {
const newIndex = currentImageIndex + 1;
setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
};

useEffect(() => {
const intervalId = setInterval(() => {
const newIndex = currentImageIndex + 1;
setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
}, 10000);
return () => clearInterval(intervalId);
}, [currentImageIndex]);


  return (
    <>
    <h1 className='Testimonials'>TESTIMONIALS</h1>
    <div className='ImageCarousel'>
      <button onClick={previousImage} className="Previous"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						</svg></button>
      <img src={images[currentImageIndex]} alt="review" />
      <button onClick={nextImage} className="Previous"><svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
						</svg></button>
    </div>
    </>
  );
};

export default ImageCarousel;


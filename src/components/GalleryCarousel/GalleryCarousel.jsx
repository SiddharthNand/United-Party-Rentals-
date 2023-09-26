// import React, { useState, useEffect } from 'react';
// import './GalleryCarousel.css';

// const GalleryCarousel = () => {
// const [currentImageIndex, setCurrentImageIndex] = useState(0);
// const images = [
//     "https://i.imgur.com/Jh4532I.png",
//     "https://i.imgur.com/MMAaNn7.png",
//     "https://i.imgur.com/vamCcU4.png",
//     "https://i.imgur.com/LmB5Guh.png",
//     "https://i.imgur.com/L4iKmzW.png",
//     "https://i.imgur.com/p7y4jNA.jpg",
//     "https://i.imgur.com/Dzd8zOZ.png",
//     "https://i.imgur.com/17YJzRS.jpg",
//     "https://i.imgur.com/SP1SwNC.jpg",
//     "https://i.imgur.com/DXhYJGA.jpg",
//     "https://i.imgur.com/TqOBqyW.jpg",
//     "https://i.imgur.com/UttkH5X.jpg",
//     "https://i.imgur.com/aIFbC9i.jpg",
//     "https://i.imgur.com/1TROEjs.png",
//     "https://i.imgur.com/o15VW8A.png",
//     "https://i.imgur.com/TUVL2E8.png",
//     "https://i.imgur.com/8ZT2axb.png",
//     "https://i.imgur.com/t33c44w.png",
//     "https://i.imgur.com/WzJ70MM.png",
//     "https://i.imgur.com/EhRtIhc.png",
//     "https://i.imgur.com/Pakm03r.png",
//     "https://i.imgur.com/d5VjoMV.png",
//     "https://i.imgur.com/mepyjSy.png",
//     "https://i.imgur.com/CtT1NH7.png",
//     "https://i.imgur.com/BxgA155.png",
//     "https://i.imgur.com/f13vSbM.png",
//     "https://i.imgur.com/ME2YJLZ.png",
//     "https://i.imgur.com/8kcycmT.png",
//     "https://i.imgur.com/A0OJlET.png",
//     "https://i.imgur.com/UERR5tF.png",
//     "https://i.imgur.com/h50DzOP.png",
//     "https://i.imgur.com/zH64Vxw.png",
//     "https://i.imgur.com/4RzVWxV.png",
//     "https://i.imgur.com/XzimuwW.png",
//     "https://i.imgur.com/qUFT62Z.png",
//     "https://i.imgur.com/KiqRYW5.png",
//     "https://i.imgur.com/sRm3DYB.png",
//     "https://i.imgur.com/WSGHWsi.jpeg",
//     "https://i.imgur.com/gPHBu1T.jpeg",
//     "https://i.imgur.com/oMeMBs8.jpeg",
//     "https://i.imgur.com/d2N9oJS.jpeg",
//     "https://i.imgur.com/WU3NcSX.jpeg",
//     "https://i.imgur.com/i2eDlqH.jpeg",
//     "https://i.imgur.com/z7U2zWo.jpeg",
//     "https://i.imgur.com/ASJq097.jpeg",
//     "https://i.imgur.com/XZxu9CB.jpeg",
//     "https://i.imgur.com/rusydLO.jpeg",
//     "https://i.imgur.com/yNzocPM.jpg",
//     "https://i.imgur.com/crxS48g.jpg",
//     "https://i.imgur.com/ScRm7Df.jpg",
//     "https://i.imgur.com/yPxfH1V.jpg",
//     "https://i.imgur.com/dJjMwb3.jpg",
//     "https://i.imgur.com/ycVsXmG.jpg",
//     "https://i.imgur.com/Hmzd5YY.jpg",
//     "https://i.imgur.com/MhNnOXl.jpg",
//     "https://i.imgur.com/TUXN76X.jpg",
//     "https://i.imgur.com/0W5WO1O.jpg",
//     "https://i.imgur.com/wh5mEWT.jpg",
//     "https://i.imgur.com/iHViTXh.jpg",
//     "https://i.imgur.com/QaUwfcn.jpg",
//     "https://i.imgur.com/8OaPw56.jpg",
// ];

// const previousImage = () => {
// const newIndex = currentImageIndex - 1;
// setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
// };

// const nextImage = () => {
// const newIndex = currentImageIndex + 1;
// setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
// };

// useEffect(() => {
// const intervalId = setInterval(() => {
// const newIndex = currentImageIndex + 1;
// setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
// }, 10000);
// return () => clearInterval(intervalId);
// }, [currentImageIndex]);


//   return (
//     <>
//     <h1 className='Testimonials'>TESTIMONIALS</h1>
//     <div className='GalleryCarousel'>
//       <button onClick={previousImage} className="Previous"><svg class="svg-icon" viewBox="0 0 20 20">
// 							<path fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
// 						</svg></button>
//       <img src={images[currentImageIndex]} alt="review" />
//       <button onClick={nextImage} className="Previous"><svg class="svg-icon" viewBox="0 0 20 20">
// 							<path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
// 						</svg></button>
//     </div>
//     </>
//   );
// };

// export default GalleryCarousel;


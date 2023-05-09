import React from 'react';
import LazyLoad from 'react-lazyload';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://i.imgur.com/Jh4532I.png",
  "https://i.imgur.com/MMAaNn7.png",
  "https://i.imgur.com/vamCcU4.png",
  "https://i.imgur.com/LmB5Guh.png",
  "https://i.imgur.com/L4iKmzW.png",
  "https://i.imgur.com/p7y4jNA.jpg",
  "https://i.imgur.com/Dzd8zOZ.png",
  "https://i.imgur.com/17YJzRS.jpg",
  "https://i.imgur.com/SP1SwNC.jpg",
  "https://i.imgur.com/DXhYJGA.jpg",
  "https://i.imgur.com/TqOBqyW.jpg",
  "https://i.imgur.com/UttkH5X.jpg",
  "https://i.imgur.com/aIFbC9i.jpg",
  "https://i.imgur.com/1TROEjs.png",
  "https://i.imgur.com/o15VW8A.png",
  "https://i.imgur.com/TUVL2E8.png",
  "https://i.imgur.com/8ZT2axb.png",
  "https://i.imgur.com/t33c44w.png",
  "https://i.imgur.com/WzJ70MM.png",
  "https://i.imgur.com/EhRtIhc.png",
  "https://i.imgur.com/Pakm03r.png",
  "https://i.imgur.com/d5VjoMV.png",
  "https://i.imgur.com/mepyjSy.png",
  "https://i.imgur.com/CtT1NH7.png",
  "https://i.imgur.com/BxgA155.png",
  "https://i.imgur.com/f13vSbM.png",
  "https://i.imgur.com/ME2YJLZ.png",
  "https://i.imgur.com/8kcycmT.png",
  "https://i.imgur.com/A0OJlET.png",
  "https://i.imgur.com/UERR5tF.png",
  "https://i.imgur.com/h50DzOP.png",
  "https://i.imgur.com/zH64Vxw.png",
  "https://i.imgur.com/4RzVWxV.png",
  "https://i.imgur.com/XzimuwW.png",
  "https://i.imgur.com/qUFT62Z.png",
  "https://i.imgur.com/KiqRYW5.png",
  "https://i.imgur.com/sRm3DYB.png",
  "https://i.imgur.com/WSGHWsi.jpeg",
  "https://i.imgur.com/gPHBu1T.jpeg",
  "https://i.imgur.com/oMeMBs8.jpeg",
  "https://i.imgur.com/d2N9oJS.jpeg",
  "https://i.imgur.com/WU3NcSX.jpeg",
  "https://i.imgur.com/i2eDlqH.jpeg",
  "https://i.imgur.com/z7U2zWo.jpeg",
  "https://i.imgur.com/ASJq097.jpeg",
  "https://i.imgur.com/XZxu9CB.jpeg",
  "https://i.imgur.com/rusydLO.jpeg",
  "https://i.imgur.com/yNzocPM.jpg",
  "https://i.imgur.com/crxS48g.jpg",
  "https://i.imgur.com/ScRm7Df.jpg",
  "https://i.imgur.com/yPxfH1V.jpg",
  "https://i.imgur.com/dJjMwb3.jpg",
  "https://i.imgur.com/ycVsXmG.jpg",
  "https://i.imgur.com/Hmzd5YY.jpg",
  "https://i.imgur.com/MhNnOXl.jpg",
  "https://i.imgur.com/TUXN76X.jpg",
  "https://i.imgur.com/0W5WO1O.jpg",
  "https://i.imgur.com/wh5mEWT.jpg",
  "https://i.imgur.com/iHViTXh.jpg",
  "https://i.imgur.com/QaUwfcn.jpg",
  "https://i.imgur.com/8OaPw56.jpg",
]

const Gallery = () => {
  return (
    <div style={{ padding: '10px' }}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <LazyLoad key={i}>
              <img
                src={image}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            </LazyLoad>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
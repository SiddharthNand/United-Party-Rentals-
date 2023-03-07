import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

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

]

const Gallery = () => {
  // const [data, setData] = useState({img: '', i: 0})

  // const viewImage = (img, i) => {
  //   setData({img, i})
  // }

  // const imgAction = (action) => {
  //   let i = data.i;
  //   if(action === 'next-img'){
  //     setData({img: images[i + 1], i: i + 1});
  //   }
  //   if(action === 'previous-img'){
  //     setData({img: images[i - 1], i: i - 1});
  //   }
  //   if(!action){
  //     setData({img: '', i: 0});
  //   }
  // }

  return (
    <>
    {/* {data.img && 
      <div style={{
        width: '100%',
        height: '100%',
        background: 'grey',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <button onClick={()=> imgAction()} style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
        <button onClick={() => imgAction('previous-img')}>Previous</button>
        <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
        <button onClick={() => imgAction('next-img')}>Next</button>
      </div>
    } */}
      <div style={{padding: '10px'}}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", }}
                alt=""
                // onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>

  )
}

export default Gallery



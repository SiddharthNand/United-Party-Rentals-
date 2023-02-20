import "./Chairs.css"
import React from 'react';

const Chairs = () => {
    return (
        <>
        <h1 className="canopy">Chairs</h1>
     <div className="grid-container">
         <div className="product-card-container">
             <img src="https://i.imgur.com/8mzbFk7.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>White Folding</h5>
                 <h5>$1.25 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/CiRIFSu.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>Black Padded Resin</h5>
                 <h5>$3.75 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/pq01j1N.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>White Padded Resin</h5>
                 <h5>$3.50 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/8mzbFk7.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>White Folding CHILDREN</h5>
                 <h5>$1.25 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/JsXTgFy.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>Chivari Gold w/padding</h5>
                 <h5>$8.00 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/jOqdsK8.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>Chivari Silver w/padding</h5>
                 <h5>$8.00 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/PUqOl5p.jpg"alt="canopy" className="canopy" />
             <div className="product-text-container">
                 <h5>Barstool</h5>
                 <h5>$8.00 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/BYIb8cR.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>White Wicker<br></br> ***Cushion Not Included***</h5>
                 <h5>$50.00 Each</h5>
             </div>
         </div>
         <div className="product-card-container">
             <img src="https://i.imgur.com/gQbZ7GK.jpg"alt="canopy"  className="canopy"/>
             <div className="product-text-container">
                 <h5>White Bistro</h5>
                 <h5>$2.00 Each</h5>
             </div>
         </div>
 
             
             
         </div>
         
        </>
    );
}

export default Chairs;



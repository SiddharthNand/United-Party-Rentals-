import "./home.css"

export default function Home () {
    return (
        <>
       <div className="container">
      <div className="image-container">
        <img src="https://i.imgur.com/z1QjUN8.png" classname="homepic" alt="home" />
      </div>
      <div className="text-container">
      <h3>Be ready for your next big event</h3>
      <br></br>
      <p>The event planners at United Party Rentals are here to help you. When you are ready, give our event planner's a call and we will help you through the process of selecting the equipment you will need for your party or event.</p>
      <br></br>
          <button>Contact Us</button>
        </div>
      </div>
<br></br>
<div className="grid-container">
      <div className="product-card-container">
            <img src="https://i.imgur.com/zlynFnm.png"alt="China and Tableware" />
            <div className="product-text-container">
                <h5>China and Tableware</h5>
            </div>
        </div>

        <div className="product-card-container">
            <img src="https://i.imgur.com/vwL8F2d.png"alt="China and Tableware" />
            <div className="product-text-container">
                <h5>Tables and Chairs</h5>
            </div>
        </div>

        <div className="product-card-container">
            <img src="https://i.imgur.com/BTAKq2Z.png"alt="China and Tableware" />
            <div className="product-text-container">
                <h5>Wedding Accessories</h5>
            </div>
        </div>

        <div className="product-card-container">
            <img src="https://i.imgur.com/bvz079g.png"alt="China and Tableware" />
            <div className="product-text-container">
                <h5>Catering Equipment</h5>
            </div>
        </div>
        </div>

        <div className="container">
      <div className="text-container1">
      <h3>Prepare for your upcoming event with confidence.</h3>
      <br></br>
      <p>Tents can be a valuable addition to any party, regardless of the weather conditions. Our tents are designed to withstand rain, and are also fire retardant certified. We offer a range of tents that can accommodate parties of different sizes, from small gatherings of 10 people to large events with 200 guests.</p>
      <br></br>
          <button className="rental button">View Rentals</button>
        </div>
        <div className="image-container">
        <img classname="tentpic" src="https://i.imgur.com/tIOrrww.jpg" alt="home" style={{ width: '600px', height: '400px' }} />
      </div>
      </div>
     
        </>
    )
}

import "./home.css"
import { Link } from 'react-router-dom';

export default function Home() {
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
                    <button><a href="tel:+19164248300" className="contacthome contact-text1">Contact Us</a></button> 
                    <br></br>
                    <h4>Visit our showroom!</h4><p><a href="https://goo.gl/maps/t9MAizKhZt6iyDXS9">7232 Stockton Blvd. Sacramento, CA 95823</a><br></br>
                    Winter Hours: Monday to Friday 9am-4pm <br></br> Saturday 9am-2pm <br></br>Sunday - CLOSED</p>
                </div>
            </div>
            <br></br>
            <div className="grid-container1">
                <div className="product-card-container">
                    <img src="https://i.imgur.com/zlynFnm.png" alt="China and Tableware" />
                    <div className="product-text-container">
                        <h5>China and Tableware</h5>
                    </div>
                </div>

                <div className="product-card-container">
                    <img src="https://i.imgur.com/vwL8F2d.png" alt="China and Tableware" />
                    <div className="product-text-container">
                        <h5>Tables and Chairs</h5>
                    </div>
                </div>

                <div className="product-card-container">
                    <img src="https://i.imgur.com/BTAKq2Z.png" alt="China and Tableware" />
                    <div className="product-text-container">
                        <h5>Wedding Accessories</h5>
                    </div>
                </div>

                <div className="product-card-container">
                    <img src="https://i.imgur.com/bvz079g.png" alt="China and Tableware" />
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
                    <button className="rental button contact-text">
                    <Link to="/canopy" className="contacthome contact-text">View Tents</Link>
                    </button>
                </div>
                <div className="image-container">
                    <img classname="tentpic" src="https://i.imgur.com/tIOrrww.jpg" alt="home" style={{ width: '600px', height: '400px' }} />
                </div>
            </div>

        </>
    )
}

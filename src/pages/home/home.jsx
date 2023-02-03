import "./home.css"
// import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import React from 'react';



export default function Home() {
    return (
        <>
            <article className="article">
                <picture className="picture">
                    <img src="https://i.imgur.com/nkIQiqk.png" alt="background" className="image" />
                </picture>
                <h1 className="header"><img src="https://i.imgur.com/oIgfTxi.png" alt='logo' className='logohome'></img><br></br>
                {/* <p className="intro">The event planners at United Party Rentals are here to help you. When you are ready, give our event planner's a call and we will help you through the process of selecting the equipment you will need for your party or event.</p><br></br> */}
                </h1>
            </article>
                
           


            <div className="businfo">
                <h1 className="title">Visit our showroom!</h1>
           
                <p className="title addy"><a href="https://goo.gl/maps/t9MAizKhZt6iyDXS9">7232 Stockton Blvd. Sacramento, CA 95823</a></p> 
                <div className="title1 title">
                <p className="title addy"><strong>Winter Hours (Jan-Mar): </strong>
                <br></br>Monday to Friday: 9am-4pm 
                <br></br> Saturday: 9am-2pm 
                <br></br>Sunday: CLOSED</p>
                
                <br></br>
                
                <p className="title addy"><strong>Summer Hours (April - Dec):</strong>
                    <br></br>Monday to Friday: 9am-5pm 
                    <br></br>Saturday: 9am-3pm
                    <br></br>Sunday: CLOSED
                </p>
            </div>
            <a href="tel:+19164248300" className="contact">Contact Us</a>
            </div>

            {/* <ImageCarousel /> */}
        

        </>

        
    )
}
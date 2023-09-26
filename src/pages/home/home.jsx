import "./home.css"
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import React from 'react';
// import GalleryCarousel from "../../components/GalleryCarousel/GalleryCarousel";
// import Contact from "../Contact/Contact";



export default function Home() {
    return (
        <>
            <article className="article">
                <picture className="picture">
                    <img src="https://i.imgur.com/W8esp2f.png" alt="background" className="image" />
                </picture>

                <h1 className="header">THE PARTY STARTS WITH US</h1>


            </article>




            <div className="businfo">
                <h1 className="title2">VISIT OUR SHOWROOM</h1>

                <p className="title addy"><a href="https://goo.gl/maps/t9MAizKhZt6iyDXS9">7232 Stockton Blvd. Sacramento, CA 95823</a></p>
                <p><a className="title addy" href="tel:+19164248300">(916)-424-8300</a></p>
                <div className="title1 title">
                    <p className="title addy"><strong className="seasonHead">Winter Hours (Jan-Mar): </strong>
                        <br></br>Monday to Friday: 9:00 am- 4:00 pm
                        <br></br> Saturday: 9:00 am - 2:00 pm
                        <br></br>Sunday: CLOSED</p>

                    <br></br>

                    <p className="title addy"><strong className="seasonHead">Summer Hours (April - Dec):</strong>
                        <br></br>Monday to Friday: 9:00 am- 5:00 pm
                        <br></br>Saturday: 9:00 am- 2:00 pm
                        <br></br>Sunday: CLOSED
                    </p>
                </div>
                <a href="tel:+19164248300" className="contact">Contact Us</a>
            </div>





            <div className="areas-we-serve">
  <h2 className="title2">AREAS WE SERVE</h2>
  <ul className="areas-list">
    <li>
      <a href="/Auburn" className="area-link">Auburn, CA</a>
    </li>
    <li>
      <a href="/Clarksburg" className="area-link">Clarksburg, CA</a>
    </li>
    <li><a href="/Courtland" className="area-link">Courtland, CA</a></li>
    <li><a href="/Davis" className="area-link">Davis, CA</a></li>
    <li><a href="/Dixon" className="area-link">Dixon, CA</a></li>
    <li><a href="/ElkGrove" className="area-link">Elk Grove, CA</a></li>
    <li><a href="/Folsom" className="area-link">Folsom, CA</a></li>
    <li><a href="/Galt" className="area-link">Galt, CA</a></li>
    <li><a href="/GraniteBay" className="area-link">Granite Bay, CA</a></li>
    <li><a href="/Lincoln" className="area-link">Lincoln, CA</a></li>
    <li><a href="/Lodi" className="area-link">Lodi, CA</a></li>
    <li><a href="/Loomis" className="area-link">Loomis, CA</a></li>
    <li><a href="/RanchoCordova" className="area-link">Rancho Cordova, CA</a></li>
    <li><a href="/Rocklin" className="area-link">Rocklin, CA</a></li>
   <li> <a href="/Roseville" className="area-link">Roseville, CA</a></li>
   <li> <a href="/Sacramento" className="area-link">Sacramento, CA</a></li>
   <li> <a href="/WalnutGrove" className="area-link">Walnut Grove, CA</a></li>
   <li> <a href="/WestSacramento" className="area-link">West Sacramento, CA</a></li>
   <li> <a href="/Wilton" className="area-link">Wilton, CA</a></li>
   <li> <a href="/Woodland" className="area-link">Woodland, CA</a></li>
    
  </ul>
</div>





            {/* <Contact /> */}
            <ImageCarousel />
            {/* <GalleryCarousel /> */}



        </>


    )
}
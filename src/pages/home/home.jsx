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
                        <br></br> Saturday: 9:00 am - 1:00 pm
                        <br></br>Sunday: CLOSED</p>

                    <br></br>

                    <p className="title addy"><strong className="seasonHead">Summer Hours (April - Dec):</strong>
                        <br></br>Monday to Friday: 9:00 am- 5:00 pm
                        <br></br>Saturday: 9:00 am- 1:00 pm
                        <br></br>Sunday: CLOSED
                    </p><br></br>
                </div>
                <a href="tel:+19164248300" className="contact">Call Us!</a>
                <a href="mailto:upr_inc@yahoo.com" className="contact">Email Us!</a>

            </div>



<div className="column-container">

<div className="areas-we-rent">
                <h2 className="title2">Our Rentals</h2>
                <ul className="rent-list">
                   
                    <li><a href="/bar" className="area-link btn">Bar & Beverage</a></li>
                    <li><a href="/canopy" className="area-link btn">Canopy</a></li>
                    <li><a href="/chairs" className="area-link btn">Chairs</a></li>
                    <li><a href="/china" className="area-link btn">China</a></li>
                    <li><a href="/Concession" className="area-link btn">Concession</a></li>
                    <li><a href="/Cookware" className="area-link btn">Cookware</a></li>
                    <li><a href="/Decoration" className="area-link btn">Decoration</a></li>
                    <li><a href="/Flatware" className="area-link btn">Flatware</a></li>
                    <li><a href="/Glassware" className="area-link btn">Glassware</a></li>
                    <li><a href="/Linen" className="area-link btn">Linen</a></li>
                    <li><a href="/Misc" className="area-link btn">Miscellaneous</a></li>
                    <li><a href="/Serving" className="area-link btn">Serving</a></li>
                    <li><a href="/Staging" className="area-link btn">Staging & Flooring</a></li>
                    <li> <a href="/Tables" className="area-link btn">Tables</a></li>

                </ul>
            </div>

            <div className="areas-we-serve">
                <h2 className="title2">Service Areas and Nearby Cities</h2>
                <ul className="areas-list">
                    <li>
                        <a href="/Auburn" className="area-link btn">Auburn, CA</a>
                    </li>
                    <li>
                        <a href="/Clarksburg" className="area-link btn">Clarksburg, CA</a>
                    </li>
                    <li><a href="/Courtland" className="area-link btn">Courtland, CA</a></li>
                    <li><a href="/Davis" className="area-link btn">Davis, CA</a></li>
                    <li><a href="/Dixon" className="area-link btn">Dixon, CA</a></li>
                    <li><a href="/ElkGrove" className="area-link btn">Elk Grove, CA</a></li>
                    <li><a href="/Folsom" className="area-link btn">Folsom, CA</a></li>
                    <li><a href="/Galt" className="area-link btn">Galt, CA</a></li>
                    <li><a href="/GraniteBay" className="area-link btn">Granite Bay, CA</a></li>
                    <li><a href="/Lincoln" className="area-link btn">Lincoln, CA</a></li>
                    <li><a href="/Lodi" className="area-link btn">Lodi, CA</a></li>
                    <li><a href="/Loomis" className="area-link btn">Loomis, CA</a></li>
                    <li><a href="/RanchoCordova" className="area-link btn">Rancho Cordova, CA</a></li>
                    <li><a href="/Rocklin" className="area-link btn">Rocklin, CA</a></li>
                    <li> <a href="/Roseville" className="area-link btn">Roseville, CA</a></li>
                    <li> <a href="/Sacramento" className="area-link btn">Sacramento, CA</a></li>
                    <li> <a href="/WalnutGrove" className="area-link btn">Walnut Grove, CA</a></li>
                    <li> <a href="/WestSacramento" className="area-link btn">West Sacramento, CA</a></li>
                    <li> <a href="/Wilton" className="area-link btn">Wilton, CA</a></li>
                    <li> <a href="/Woodland" className="area-link btn">Woodland, CA</a></li>

                </ul>
            </div>

            </div>
            <ImageCarousel />


        </>


    )
}



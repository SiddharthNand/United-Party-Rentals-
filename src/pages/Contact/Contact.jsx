import React, { useState } from "react";
import './Contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Add code to send data to server or API
  }

  return (
    <>
      <div className="container">
        <h1 className="eMail">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </div><br></br>
          <form action="mailto:upr_inc@yahoo.com" method="post" encType="text/plain">
            <button type="submit" className="contact">
              Send
            </button>
          </form>
        </form>
      </div>
<br></br>
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
                        <br></br>Saturday: 9:00 am- 3:00 pm
                        <br></br>Sunday: CLOSED
                    </p>
                </div>
                <a href="tel:+19164248300" className="contact">Contact Us</a>
            </div>

    </>
  );
}

export default Contact;



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

    </>
  );
}

export default Contact;



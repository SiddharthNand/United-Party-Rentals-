import React from 'react';


const GoogleMaps = () => {
  return (
    <div>
      <h1 className="title2" style={{ textAlign: 'center' }}>Location</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.7096603958494!2d-121.43194928753904!3d38.49434097169529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac5c0ed31a663%3A0xbe5ab98e509bbe6!2sUnited%20Party%20Rentals!5e0!3m2!1sen!2sus!4v1707251773904!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0, maxWidth: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Embedded Google Map"
        />
      </div>
    </div>
  );
};

export default GoogleMaps;
import React from 'react';

const GoogleTour = () => {
  return (
    <div>
      <h1 className="title2" style={{ textAlign: 'center' }}>Google Tour</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1703008163874!6m8!1m7!1sCAoSLEFGMVFpcE9IV0pnU0FBSDNQeW94eDl6ZEJRamM5YmpiVmVVTjFkTEo2bVZ2!2m2!1d38.49422282352!2d-121.42925913594!3f358.83997480829754!4f-19.52869217995699!5f0.4000000000000002"
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

export default GoogleTour;
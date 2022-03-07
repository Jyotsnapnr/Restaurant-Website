import React from 'react';

const FindUs = () => (
  <div className="contact__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__contact">Main Avenue, Opposite South Indian Bank, Panampilly Nagar, Kochi, Kerala 682036</p>
        <p className="p__contact" style={{ color:'yellow', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__contact">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__contact">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
     
    </div>
  </div>
);

export default FindUs;
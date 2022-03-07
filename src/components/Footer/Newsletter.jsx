import React from 'react';


import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h2 className="headtext__cormorant">News Letter</h2>
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__contact">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="footer__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
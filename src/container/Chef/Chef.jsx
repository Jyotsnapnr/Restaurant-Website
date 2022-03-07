import React from 'react';


import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="chef__bg app__wrapper section__padding">
   
    <div className="app__wrapper_info">
   
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__chef">The duty of a good cuisinier is to transmit to the next generation everything he has learned and experienced. .</p>
        </div>
        <p className="p__chef"> Cooking requires confident guesswork and improvisation– experimentation and substitution, dealing with failure and uncertainty in a creative way.
        In the childhood memories of every good cook, there’s a large kitchen, a warm stove, a simmering pot, and a mom.
</p>
      </div>

      <div className="app__chef-sign">
        <p>Tintu Mon</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;

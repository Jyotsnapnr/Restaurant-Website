import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
   

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
       
        <p className="p__opensans">Banana Leaf Restaurant is a unique restaurant in Kerala. We are committed to serve high quality yummy and delicious food; to make your every visit enjoyable and relaxed ambience.
        Quick service, freshly cooked food, the best in quality and tasty food is our mantra. With an extensive menu of breakfast, lunch, and dinner favorites, we have something for everyone. Keeping in mind the health of our consumers. </p>
        <a href="https://en.wikipedia.org/wiki/Kerala" target="_blank" rel="noreferrer"><button type="button" className="banana__button">Know More</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
       
        <p className="p__opensans">For over 2000 years, Kerala has been visited by traders from Greece, Rome, the Eastern Mediterranean, Arab countries, and Europe. 
        Thus, Kerala cuisine is a blend of indigenous dishes and foreign dishes adapted to Kerala's tastes. In addition to historical diversity, the cultural influences, particularly the large percentages of Muslims and Syrian Christians, have also contributed unique dishes to Kerala cuisine, especially non-vegetarian dishes.</p>
        <a href="https://en.wikipedia.org/wiki/Kerala" target="_blank" rel="noreferrer"><button type="button" className="banana__button">Know More</button></a>
      </div>
    </div>
  </div>
);

export default AboutUs;

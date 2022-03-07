import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Feeling Hungry !</h1>
<h2 className="app__header-h2">We Offer You A great Tasting Experience</h2>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>

      We are committed to serve high quality yummy and delicious food; to make your every visit enjoyable and relaxed ambience. 
     Banana leaf restaurant offers not only Malabar Food but also many luscious food items.
 </p>
      <a href="#menu"><button type="button" className="custom__button">Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" className="header-img"/>
    </div>
  </div>
);

export default Header;

import React from 'react';

import twitterLogoSide from '../../assets/images/twitterBlackLogo.png';
import './SideAuth.css';


const sideAuth = () => {
    return (
        <div className="SideAuth">
            <img src={twitterLogoSide} alt="twitterLogo" />
        </div>
    );
}
 
export default sideAuth;
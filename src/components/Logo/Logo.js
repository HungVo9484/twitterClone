import React from 'react';

import twitterLogo from '../../assets/images/twitterLogo.svg';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{"width": props.width }}>
        <img src={twitterLogo} alt="twitterLogo" />
    </div>
);

export default logo;
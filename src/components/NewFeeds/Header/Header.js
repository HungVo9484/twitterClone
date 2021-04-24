import React from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Home</h2>
            <StarBorderOutlinedIcon />
        </div>
    );
}
 
export default Header;
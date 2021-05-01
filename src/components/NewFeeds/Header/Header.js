import React from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import Tooltip from '../../UI/Tooltip/Tooltip';
import './Header.css';

const Header = () => {

    return (
        <>
            <div className="header">
                <h2>Home</h2>
                <Tooltip title="Top Tweets" margin="-65%">
                    <StarBorderOutlinedIcon />
                </Tooltip>
                
            </div>
        </>
    );
}
 
export default Header;
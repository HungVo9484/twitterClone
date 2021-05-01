import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import './LogoutTooltip.css';

const LogoutTooltip = (props) => {
    
    return (
        <>
            <Backdrop show={props.show}
                    clicked={props.closedTooltip}
                    transparent='transparent_backdrop'
            />
            <div className="logoutTooltip">
                <span className="logoutTooltiptext">
                    {props.children}
                </span>
            </div>
        </>  
    );
}
 
export default LogoutTooltip;
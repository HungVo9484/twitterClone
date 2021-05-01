import React from 'react';

import './Tooltip.css';

const Tooltip = (props) => {
    
    return (
        <div className="tooltip">
            {props.children}
            <span className={`tooltiptext ${props.position}`}
                style={{marginLeft: props.margin}}
            >{props.title}</span>
        </div>
    );
}
 
export default Tooltip;
import React from 'react';

import './sideBarItem.css';

const sideBarItem = ({active, text, Icon}) => {
    return (
        <div className={`sideBarItem  ${active && "sideBarItemActive"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}
 
export default sideBarItem;
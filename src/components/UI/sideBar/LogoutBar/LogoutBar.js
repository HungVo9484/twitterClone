import React from 'react';
import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './LogoutBar.css';

const LogoutBar = () => {

    const displayName = 'Hung Vo';
    const userName = 'voduyhung';

    return (
        <div className="logoutBar">
            <Avatar />
            <div className="displayName">
                <strong>{displayName}</strong>
                <span className="userName">@{userName}</span>
            </div>
            <MoreHorizIcon className="moreIcon" />
        </div>
    );
}
 
export default LogoutBar;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

import { logout } from '../../../store/auth_actions';
import LogoutTooltip from '../LogoutTooltip/LogoutTooltip';
import './LogoutBar.css';
import bikiniPic from '../../../assets/avatar/bikini.jpg';

const LogoutBar = () => {

    const history = useHistory();
    const [toggleLogoutTooltip, setToggleLogoutTooltip] = useState(false);
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);

    const displayName = userInfo.username;
    const userName = userInfo.username;

    

    const toggleLogoutTooltipHandler = () => {
        setToggleLogoutTooltip(!toggleLogoutTooltip);
    };

    const logoutHandler = () => {
        dispatch(logout());
        history.push('/logout');
    }

    const LogoutTooltipBar = <LogoutTooltip show={toggleLogoutTooltip}
                                    closedTooltip={toggleLogoutTooltipHandler}
                            >
                                <div className="logoutTooltip_container">
                                    <div className="logoutTooltip_1" >
                                        <Avatar src={bikiniPic} />
                                        <div className="displayName">
                                            <strong>{displayName}</strong>
                                            <span className="userName">@{userName}</span>
                                        </div>
                                        <CheckOutlinedIcon className="logout_checkIcon" />
                                    </div>
                                    <p className="logoutTooltip_2">Add an existing account</p>
                                    <p className="logoutTooltip_2" onClick={logoutHandler}>Log out @{userName}</p>
                                    {/* <p className="logoutTooltip_3">Log out @{userName}</p> */}
                                </div>
                                
                            </LogoutTooltip>
    

    return (
        <div className="logoutBarOutline">
            {toggleLogoutTooltip ? LogoutTooltipBar : null}
            <div className="logoutBar" onClick={toggleLogoutTooltipHandler}>
                <Avatar src={bikiniPic} />
                <div className="displayName">
                    <strong>{displayName}</strong>
                    <span className="userName">@{userName}</span>
                </div>
                <MoreHorizIcon className="moreIcon" />
            </div>
        </div>
        
    );
}
 
export default LogoutBar;
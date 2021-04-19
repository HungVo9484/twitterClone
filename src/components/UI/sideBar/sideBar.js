import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutLineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button }from '@material-ui/core';

import SideBarItem from './sideBarItem/sideBarItem';
import LogoutBar from './LogoutBar/LogoutBar';
import './sideBar.css';

const sideBar = (props) => {
    return (
        <div className="sideBarOutline">
            <div className="sideBar">
                <TwitterIcon className="sideBarIcon"/>
                <SideBarItem active text='Home' Icon={HomeIcon} />
                <SideBarItem text='Notifications' Icon={NotificationsNoneIcon} />
                <SideBarItem text='Messages' Icon={MailOutLineIcon} />
                <SideBarItem text='Bookmarks' Icon={BookmarkBorderIcon} />
                <SideBarItem text='Lists' Icon={ListAltIcon} />
                <SideBarItem text='Profile' Icon={PermIdentityIcon} />
                <SideBarItem text='More' Icon={MoreHorizIcon} />
                <Button variant="outlined" className="sideBarButton" fullWidth>Tweet</Button>
            </div>
            <LogoutBar />
        </div>
        
    );
}
 
export default sideBar;
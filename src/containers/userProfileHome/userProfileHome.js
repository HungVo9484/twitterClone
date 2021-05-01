import React from 'react';

import UserHome from '../../components/UserHome/UserHome';
import SideBar from '../../components/sideBar/sideBar';
import Widgets from '../../components/Widgets/Widgets';
import './userProfileHome.css';

const UserMainHome = () => {


    return (
        <div className="userMainHome">
            <SideBar />
            <UserHome />
            <Widgets />
        </div>
    );
}
 
export default UserMainHome;
import React from 'react';

import Header from './Header/Header';
import UserProfile from './UserProfile/UserProfile';

import './UserHome.css';

const UserHome = (props) => {

    return (
        <div className="userHome">
            <Header />
            <UserProfile />
        </div>
    );
}
 
export default UserHome;
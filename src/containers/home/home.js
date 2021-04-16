import React from 'react';

import NewFeeds from '../../components/UI/NewFeeds/NewFeeds';
import SideBar from '../../components/UI/sideBar/sideBar';
import Widgets from '../../components/UI/Widgets/Widgets';
import './home.css';

const home = () => {
    return (
        <div className="Home">
            <SideBar />
            <NewFeeds />
            <Widgets />
        </div>
    );
}
 
export default home;
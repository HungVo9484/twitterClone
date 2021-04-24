import React from 'react';

import NewFeeds from '../../components/NewFeeds/NewFeeds';
import SideBar from '../../components/sideBar/sideBar';
import Widgets from '../../components/Widgets/Widgets';
import './home.css';
import { useStore } from '../../hooks-store/store';

const Home = () => {
    const state = useStore()[0];
    console.log(state.userInfo);
    
    return (
        <div className="Home">
            <SideBar />
            <NewFeeds />
            <Widgets />
        </div>
    );
}
 
export default Home;
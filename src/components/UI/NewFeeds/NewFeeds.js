import React from 'react';

import Header from './Header/Header'
import TweetBox from './TweetBox/TweetBox';
import Posts from './Posts/Posts';
import './NewFeeds.css';

const newFeeds = (props) => {
    return (
        <div className="newFeeds">

            <Header />

            <TweetBox />

            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>
        
    );
}
 
export default newFeeds;
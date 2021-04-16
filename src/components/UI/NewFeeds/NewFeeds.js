import React from 'react';

import TweetBox from './TweetBox/TweetBox';
import Posts from './Posts/Posts';
import './NewFeeds.css';

const newFeeds = (props) => {
    return (
        <div className="newFeeds">
            <div className="header">
                <h2>Home</h2>
            </div>
            <TweetBox />

            {/* Post */}
            <Posts />
        </div>
        
    );
}
 
export default newFeeds;
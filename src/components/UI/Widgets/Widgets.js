import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import {
    // TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets">
            <div className='widgets_search'>
                <SearchIcon className='widgets_searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>
            <div className="widgets_container">
                <h2>Trends for you</h2>
                <TwitterTweetEmbed tweetId={"1382989913998598146"} />
                {/* <TwitterTimelineEmbed 
                    sourceType="profile" 
                    screenName="HungVo42982477"
                    options={{height: 400 }}
                /> */}
                <TwitterShareButton
                    url={"https://www.facebook.com/hung.vo.923"}
                    options={{ text: "#reactjs is awesome", via: "HungVo"}}
                />
            </div>
        </div>

    );
}
 
export default Widgets;
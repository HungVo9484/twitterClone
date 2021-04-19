import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

import './TweetBox.css';
import bikiniPic from '../../../../assets/avatar/bikini.jpg';



const TweetBox = () => {
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox_input">
                  <Avatar src={bikiniPic} />
                  <input type="text" placeholder="What's happening ?..." />
                </div>
                <div className="tweetBox_footer">
                  <div className="tweetBox_icons">
                    <ImageOutlinedIcon />
                    <GifOutlinedIcon />
                    <PollOutlinedIcon />
                    <SentimentSatisfiedOutlinedIcon />
                    <ScheduleOutlinedIcon />
                  </div>
                  <Button className='tweetBox_button'>Tweet</Button>
                </div>
            </form>
        </div>
    );
}
 
export default TweetBox;
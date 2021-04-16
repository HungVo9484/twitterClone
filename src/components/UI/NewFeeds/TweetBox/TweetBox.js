import React from 'react';
import { Avatar, Button } from '@material-ui/core';

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
                <input 
                  className='tweetBox_imageInput'
                  placeholder='Optional: Enter image URL'
                  type='text'
                />
                <Button className='tweetBox_button'>Tweet</Button>
            </form>
        </div>
    );
}
 
export default TweetBox;
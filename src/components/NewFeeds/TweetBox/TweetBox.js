import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Avatar, Button } from '@material-ui/core';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

import Tooltip from '../../UI/Tooltip/Tooltip';
import './TweetBox.css';



const TweetBox = () => {
  const userName = useSelector((state) => state.auth.userInfo.username)
  const avatar = useSelector((state) => state.auth.userInfo.avatar)

  return (
      <div className='tweetBox'>
          <form>
              <div className="tweetBox_input">
                <Link to={`/${userName}`}>
                <Avatar src={avatar} />
                </Link>
                <input type="text" placeholder="What's happening ?..." />
              </div>
              <div className="tweetBox_footer">
                <div className="tweetBox_icons">
                  <Tooltip title="Media" margin="-38%"><ImageOutlinedIcon /></Tooltip>
                  <Tooltip title="GIF" margin="-28%"><GifOutlinedIcon /></Tooltip>
                  <Tooltip title="Poll" margin="-29%"><PollOutlinedIcon /></Tooltip>
                  <Tooltip title="Emoji" margin="-30%"><SentimentSatisfiedOutlinedIcon /></Tooltip>
                  <Tooltip title="Schedule" margin="-55%"><ScheduleOutlinedIcon /></Tooltip>
                </div>
                <Button className='tweetBox_button'>Tweet</Button>
              </div>
          </form>
      </div>
  );
}
 
export default TweetBox;
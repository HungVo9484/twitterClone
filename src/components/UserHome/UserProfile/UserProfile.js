import React from 'react';

import { Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';

import './UserProfile.css';
import bikiniPic from '../../../assets/avatar/bikini.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
      zIndex: '10',
      top: '-67.5px',
      left: '15px',
      border: '4px solid white',
    },
  }));

const UserProfile = (props) => {
    const classes = useStyles();
    return (
        <div className="userProfile">
            <div className="profileImage">
                {/* <img src={""} alt="No Image" /> */}
            </div>
            <div className="userProfile_avatar_btn">
                <Avatar src={bikiniPic} className={classes.large}/>
                <Button className="userProfile_btn">Edit Profile</Button>
            </div>
            <div className="userInfo">
                <h2>Display Name</h2>
                <p className='userProfile_username'>@username</p>
                <p>Word Hard Play Hard</p>
                <div className="joinedDate">
                    <TodayOutlinedIcon />
                    <p>Joined April 2020</p>
                </div>
                <p className="userInfo_follow">38 <span>Following</span>   1 <span>Follower</span></p>


            </div>
            
            <div className="userProfile_toolbar">
                <Button className='userProfile_toolbar_active'>Tweets</Button>
                <Button>Tweets & replies</Button>
                <Button>Media</Button>
                <Button>Likes</Button>
            </div>

        </div>
    );
}
 
export default UserProfile;
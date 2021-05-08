import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';

import { sendUserInfo } from '../../../store/data_actions';
import { imageActions } from '../../../store/image_slice';
import EditProfile from '../EditProfile/EditProfile';
import './UserProfile.css';

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
    const [showEditProfile, setShowEditProfile] = useState(false);
    const dispatch = useDispatch();
    const profileImage = useSelector((state) => state.auth.userInfo.profileImage);
    const avtartImage = useSelector((state) => state.auth.userInfo.avatar);

    const userInfo = useSelector((state) => state.auth.userInfo);
    const uploadFileCompleted = useSelector((state) => state.image.uploadFileCompleted);

    const showEditProfileHandler = () => {
        dispatch(imageActions.clearAll_profileImage());
        dispatch(imageActions.clearAll_avatarImage());
        dispatch(imageActions.clearIsAvatar());
        setShowEditProfile(!showEditProfile);
    }

    useEffect(() => {
        console.log('sendInfo', uploadFileCompleted)
        if (uploadFileCompleted) {
            dispatch(sendUserInfo(userInfo, userInfo.username))
            dispatch(imageActions.clearUploadFileCompleted())
        }
    }, [uploadFileCompleted, dispatch, userInfo])
    console.log('completed', uploadFileCompleted);

    return (
        <>
            <EditProfile
                show={showEditProfile}
                closedEditProfile={showEditProfileHandler}
            />
            <div className="userProfile">
                <div className="profileImage" style={{backgroundImage: `url(${profileImage})`}} >
                    {/* <img src={profileImage} alt="No Image" /> */}
                </div>
                <div className="userProfile_avatar_btn">
                    <Avatar src={avtartImage} className={classes.large}/>
                    <Button
                        className="userProfile_btn"
                        onClick={showEditProfileHandler}
                    >Edit Profile</Button>
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
        </>
    );
}
 
export default UserProfile;
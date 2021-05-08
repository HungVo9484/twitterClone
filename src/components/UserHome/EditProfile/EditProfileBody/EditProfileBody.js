import React, { useState, useRef } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';

import { imageActions } from '../../../../store/image_slice';
import { uiActions } from '../../../../store/ui_slice';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import './EditProfileBody.css';

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

const EditProfileBody = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const croppedImage = useSelector((state) => state.image.profileImage.croppedImage);
    const profileImage = useSelector((state) => state.auth.userInfo.profileImage);
    const croppedAvatar = useSelector((state) => state.image.avatarImage.croppedImage);
    const avatarImage = useSelector((state) => state.auth.userInfo.avatar);
    

    const [name_label, setName_label] = useState(false);
    const [inputName_focus, setInputName_forcus] = useState(false);
    const nameInputRef = useRef(null);

    const [bio_label, setBio_label] = useState(false);
    const [inputBio_focus, setInputBio_focus] = useState(false);
    const bioInputRef = useRef(null);

    const [location_label, setLocation_label] = useState(false);
    const [inputLocation_focus, setInputLocation_focus] = useState(false);
    const locationRef = useRef(null);

    const [web_label, setWeb_label] = useState(false);
    const [inputWeb_focus, setInputWeb_focus] = useState(false);
    const webRef = useRef(null);

    const nameFocusHandler = () => {
        if (!nameInputRef.current.value) {
            setName_label(!name_label);
        };
        setInputName_forcus(!inputName_focus);
    };

    const bioFocusHandler = () => {
        if (!bioInputRef.current.value) {
            setBio_label(!bio_label);
        };
        setInputBio_focus(!inputBio_focus)
    };

    const locationFocusHandler = () => {
        if (!locationRef.current.value) {
            setLocation_label(!location_label);
        };
        setInputLocation_focus(!inputLocation_focus);
    };

    const webFocusHandler = () => {
        if (!webRef.current.value) {
            setWeb_label(!web_label);
        };
        setInputWeb_focus(!inputWeb_focus);
    };

    const onChangeProfileImageHandler = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            dispatch(imageActions.setImage(reader.result))
        };
        reader.readAsDataURL(e.target.files[0]);
        dispatch(uiActions.setBtnProfileStatusApply());
    };

    const onChangeAvatarImageHandler = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            dispatch(imageActions.setAvatar(reader.result))
        };
        reader.readAsDataURL(e.target.files[0]);
        dispatch(uiActions.setBtnProfileStatusApply());
        dispatch(imageActions.setIsAvatar());
    };

    return (
        <>  
            <div className="edit_profileImage"
                style={{backgroundImage: `url(${croppedImage === null
                                                ? profileImage
                                                : croppedImage})`}}
            >
                <Tooltip title="Add photo" margin="-80%">
                    <label htmlFor="profileImage_file">
                        <AddAPhotoOutlinedIcon />
                    </label>
                    <input type="file" 
                        id='profileImage_file' 
                        style={{display: "none"}}
                        onChange={onChangeProfileImageHandler}
                    />
                </Tooltip>
            </div>
            <label htmlFor="avatar">
                <Avatar src={croppedAvatar === null
                            ? avatarImage
                            : croppedAvatar} 
                        className={classes.large} 
                        style={{cursor: "pointer"}}
                />
            </label>
            <input type="file" 
                        id='avatar' 
                        style={{display: "none"}}
                        onChange={onChangeAvatarImageHandler}
            />
            
            <form className="editProfile_form">
                <div className={`editProfile_name ${inputName_focus
                                ? "editProfile_form_focus"
                                : null}`}
                    onFocus={nameFocusHandler}
                    onBlur={nameFocusHandler}
                >
                    <label htmlFor="name"
                        className={`${name_label ? "form_label" : null}
                                    ${inputName_focus ? "label_color" : null}`}
                    >Name</label>
                    <input id="name" ref={nameInputRef}></input>
                </div>

                <div className={`editProfile_bio ${inputBio_focus
                                ? "editProfile_form_focus"
                                : null}`}
                    onFocus={bioFocusHandler}
                    onBlur={bioFocusHandler}
                >
                    <label htmlFor="bio"
                        className={`${bio_label ? "form_label" : null} 
                                    ${inputBio_focus ? "label_color" : null}`}>Bio</label>
                    <input id="bio" ref={bioInputRef}></input>
                </div>

                <div className={`editProfile_location ${inputLocation_focus
                                ? "editProfile_form_focus"
                                : null}`}
                    onFocus={locationFocusHandler}
                    onBlur={locationFocusHandler}
                >
                    <label htmlFor="location"
                        className={`${location_label ? "form_label" : null}
                        ${inputLocation_focus ? "label_color" : null}`}
                    >Location</label>
                    <input id="location" ref={locationRef}></input>
                </div>

                <div className={`editProfile_website ${inputWeb_focus
                                ? "editProfile_form_focus"
                                : null}`}
                    onFocus={webFocusHandler}
                    onBlur={webFocusHandler}
                >
                    <label htmlFor="website"
                        className={`${web_label ? "form_label" : null}
                        ${inputWeb_focus ? "label_color" : null}`}
                    >Website</label>
                    <input id="website" ref={webRef}></input>
                </div>
            </form>
        </>
    );
}
 
export default EditProfileBody;
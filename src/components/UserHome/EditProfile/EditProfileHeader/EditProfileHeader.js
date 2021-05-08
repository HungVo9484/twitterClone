import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button } from '@material-ui/core';

import { uiActions } from '../../../../store/ui_slice';
import { imageActions } from '../../../../store/image_slice';
import { getResizedImage,
        getResizedAvatar,
        updateUserInfoToServer
} from '../../../../store/image_actions';
import Tooltip from '../../../UI/Tooltip/Tooltip';
import './EditProfileHeader.css';

const EditProfileHeader = (props) => {
    const btnStatus = useSelector((state) => state.ui.btnProfileStatus);
    const profileImage = useSelector((state) => state.image.profileImage.image);
    const cropImage = useSelector((state) => state.image.profileImage.croppedAreaPixels);
    const croppedProfileImage = useSelector((state) => state.image.profileImage.croppedImage);
    const avatarImage = useSelector((state) => state.image.avatarImage.image);
    const cropAvatar = useSelector((state => state.image.avatarImage.croppedAreaPixels));
    const croppedAvatarImage = useSelector((state) => state.image.avatarImage.croppedImage)
    const isAvatar = useSelector((state) => state.image.isAvatar);
    const username = useSelector((state) => state.auth.userInfo.username);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        if (btnStatus === 'Apply') {
            dispatch(uiActions.setBtnProfileStatusSave())
        } else {
            dispatch(imageActions.clearAll_profileImage());
            props.modalClosed();
        }
    };

    const onSaveOrApplyHandler = () => {
        if (btnStatus === 'Apply') {
            if (!isAvatar) {
                dispatch(getResizedImage(profileImage, cropImage, {width: 600, height: 200}))
            } else {
                dispatch(getResizedAvatar(avatarImage, cropAvatar, {width: 250, height: 250}))
                dispatch(imageActions.clearIsAvatar())
            }
            dispatch(uiActions.setBtnProfileStatusSave())
        } else {
            if (croppedProfileImage || croppedAvatarImage) {
                dispatch(updateUserInfoToServer(
                    croppedProfileImage,
                    croppedAvatarImage,
                    `${username}ProfileImage.png`,
                    `${username}AvatarImage.png`
                ))
            }
            props.modalClosed();
        }
    }
    return (
        <div className="editProfile_header">
            <div className="editProfile_closed">
                <Tooltip title={btnStatus === 'Save' ? "Close" : "Back"}
                        margin="-37%">
                    <CloseOutlinedIcon onClick={onClickHandler} />
                </Tooltip>
                <h2>{btnStatus === 'Save' ? 'Edit Profile' : 'Edit Media'}</h2>
            </div>
            <Button onClick={onSaveOrApplyHandler}>{btnStatus}</Button>
    </div>
    );
}
 
export default EditProfileHeader;
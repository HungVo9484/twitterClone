import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../../UI/Modal/Modal';
import EditProfileHeader from './EditProfileHeader/EditProfileHeader';
import EditProfileBody from './EditProfileBody/EditProfileBody';
import ImageCropper from '../../ImageCropper/ImageCropper';

import './EditProfile.css';

const EditProfile = (props) => {
    const btnStatus = useSelector((state) => state.ui.btnProfileStatus);
    const profileImage = useSelector((state) => state.image.profileImage.image);
    const avatarImage = useSelector((state) => state.image.avatarImage.image)
    const isAvatar = useSelector((state) => state.image.isAvatar);

    return (
        <Modal 
            width="600px"
            height="auto"
            show={props.show}
            modalClosed={props.closedEditProfile}
        >
            <div className="editProfile">
                <EditProfileHeader modalClosed={props.closedEditProfile} />
                {btnStatus === 'Save' && <EditProfileBody />}
                {btnStatus === 'Apply' &&
                    <div style={{height: '90%', width: '100%', position: 'relative'}}>
                        { !isAvatar
                            ? <ImageCropper image={profileImage}
                                        cropShape={'rect'}
                                        cropWidth= {600}
                                        cropHeight= {200}/>
                            : <ImageCropper image={avatarImage}
                                        cropShape={'round'}
                                        cropWidth= {400}
                                        cropHeight= {400}/>
                        }
                    </div>
                }
            </div>
        </Modal>
    );
}
 
export default EditProfile;
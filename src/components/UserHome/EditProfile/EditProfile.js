import React from 'react';

import Modal from '../../UI/Modal/Modal';
import EditProfileHeader from './EditProfileHeader/EditProfileHeader';

const editProfile = (props) => {
    return (
        <Modal 
            width="600px"
            height="auto"
            show={props.show}
            modalClosed={props.closedEditProfile}
        >
            {/* Header */}
            <EditProfileHeader />
            {/* ProfileImg */}
            {/* Avatar */}
            {/* Form Input */}
            {/* BirthDate */}
            {/* Form Input */}
        </Modal>
    );
}
 
export default editProfile;
import React from 'react';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import { Button } from '@material-ui/core';

import Tooltip from '../../../UI/Tooltip/Tooltip';
import './EditProfileHeader.css';

const EditProfileHeader = () => {
    return (
        <div className="editProfile_header">
            <div className="editProfile_closed">
                <Tooltip title="Close" margin="-37%">
                    <CloseOutlinedIcon />
                </Tooltip>
                <h2>Edit Profile</h2>
            </div>
            <Button>Save</Button>
    </div>
    );
}
 
export default EditProfileHeader;
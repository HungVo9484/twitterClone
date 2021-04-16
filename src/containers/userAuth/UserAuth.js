import React from 'react';

import SideAuth from '../../components/UI/SideAuth/SideAuth';
import InputAuth from '../../components/UI/InputAuth/InputAuth';
import './UserAuth.css';

const auth = () => {
    return (
        <div className="UserAuth">
            <SideAuth />
            <InputAuth />
        </div>
    );
}
 
export default auth;
import React from 'react';

import SideAuth from '../../components/SideAuth/SideAuth';
import InputAuth from '../../components/InputAuth/InputAuth';
import './UserAuth.css';


const Auth = () => {
    return (
        <div className="UserAuth">
            <SideAuth />
            <InputAuth />
        </div>
    );
}
 
export default Auth;
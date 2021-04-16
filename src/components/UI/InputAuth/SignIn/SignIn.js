import React from 'react';

import Button from '../../../Button/Button';
import './SignIn.css';

const signIn = () => {
    return (
        <div className="SignIn">
            <div className="Title">Sign In</div>
            <form>
                <div className="Email">
                    <label>Email</label>
                    <input type='email' placeholder='Email...' />
                </div>
                <div className="Email">
                    <label>Password</label>
                    <input type='password' placeholder='Password...' />
                </div>
                <Button btnType='Login' >Login</Button>
            </form>
        </div>
    );
}
 
export default signIn;
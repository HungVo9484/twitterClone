import React from 'react';

import Button from '../../../Button/Button';
import './SignUp.css';

const signUp = () => {
    return (
        <div className="SignIn">
            <div className="Title">Sign Up</div>
            <form>
                <div className="Email">
                    <label>Email</label>
                    <input type='email' placeholder='Email...' />
                </div>
                <div className="Email">
                    <label>Password</label>
                    <input type='password' placeholder='Password...' />
                </div>
                <Button btnType='Login' >Submit</Button>
            </form>
        </div>
    );
};

export default signUp;
import React, { useState } from 'react';

import Logo from '../../Logo/Logo';
import Button from '../../Button/Button';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import './InputAuth.css';


const MainAuth = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const signInHandler = () => {
        setIsSignIn(true)
    };

    const signUpHandler = () => {
        setIsSignUp(true)
    };

    let auth = <div>
                    <div className="Title">What's happening?</div>
                    <div className="Label">Joining Twitter today</div>
                    <Button btnType="SignUp" clicked={signUpHandler}>SignUp</Button>
                    <Button btnType="SignIn" clicked={signInHandler}>SignIn</Button>
                </div>;

    if (isSignIn) {
        auth = <SignIn />
    };

    if (isSignUp) {
        auth = <SignUp />
    };

    return (
        <div className="InputAuth">
            <Logo />
            {auth}
        </div>
    );
}
 
export default MainAuth;
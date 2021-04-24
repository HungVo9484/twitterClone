import React, { useEffect, useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';

import useHttp from '../../hooks/useHttp';
import { authUser, updateUsersInfo } from '../../lib/api';
import { useStore } from '../../hooks-store/store';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import './InputAuth.css';

const MainAuth = () => {
    const [checkSignupOrSignin, setCheckSignupOrSignin] = useState(null);
    const [state, dispatch] = useStore(false);
    const history = useHistory();

    const {
        sendRequest: sendRequestAuth,
        status: authStatus,
        data: authData,
        error: authError 
    } = useHttp(authUser);
    
    const {
        sendRequest: sendRequestUser,
        status: userStatus,
        data: userData,
        error: userError 
    } = useHttp(updateUsersInfo);

    useEffect(() => {
        console.log('F0');
        
            if (authStatus === 'completed' &&
                userStatus !== 'completed' && state.userInfo.email !== null) {
                console.log('F2');

               // Add userInfo to hooks-store
                dispatch('ADD', {email: authData.email,
                                userId: authData.localId
                });

                // Send 
                if (checkSignupOrSignin === 'signup') {
                    sendRequestUser(state.userInfo);
                }
            };
    
            if (userStatus === 'completed') {
                history.push('/home');
            };
    }, [authStatus , userStatus, authData, checkSignupOrSignin,
        dispatch, history, sendRequestUser, state.userInfo]);
    

    const signUpHandler = (authData, userName) => {
        setCheckSignupOrSignin('signup');
        dispatch('ADD', {userName: userName});
        sendRequestAuth(authData, true);
    };

    const signInHandler = (authData) => {
        setCheckSignupOrSignin('signin');
        sendRequestAuth(authData, false);
    };


    const authHome = <Route path='/userAuth' exact>
                        <div className="Title">What's happening?</div>
                        <div className="Label">Joining Twitter today</div>
                        <div className="button">
                            <Link to='/userAuth/signup'>
                                <Button btnType="SignUp">SignUp</Button>
                            </Link>
                            <Link to='/userAuth/signin'>
                                <Button btnType="signIn">SignIn</Button>
                            </Link>
                        </div>
                    </Route>;

    return (
        <div className="InputAuth">
            <Logo />
            {authHome}
            <Route path='/userAuth/signup'>
                <SignUp onSignUp={signUpHandler} />
            </Route>
            <Route path='/userAuth/signin'>
                <SignIn onSignIn={signInHandler} />
            </Route>
        </div>
    );
}
 
export default MainAuth;
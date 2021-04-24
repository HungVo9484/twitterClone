import React from 'react';

import UseInput from '../../../hooks/useInput';
import Button from '../../Button/Button';
import './SignUp.css';

const SignUp = (props) => {

    const {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangedHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = UseInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = UseInput(value => value.includes('@'));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = UseInput(value => value.trim() !== '');

    let formIsValid = false;

    if (enteredUsernameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        };
        


        resetUsernameInput();
        resetEmailInput();
        resetPasswordInput();
        props.onSignUp({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        }, enteredUsername);
    };

    const usernameInputClasses = usernameInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    const emailInputClasses = emailInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    const passwordInputClasses = passwordInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    return (
        <div className="signUpForm">
            <div className="Title">Sign Up</div>
            <form onSubmit={formSubmissionHandler}>
                <div className={usernameInputClasses}>
                    <label htmlFor='userName' >Username</label>
                    <input 
                        type='text' 
                        id='userName' 
                        placeholder='Username...'
                        onChange={usernameChangedHandler}
                        onBlur={usernameBlurHandler}
                        value={enteredUsername}
                    />
                </div>
                <div className={emailInputClasses}>
                    <label htmlFor='email' >Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        placeholder='Email...'
                        onChange={emailChangedHandler}
                        onBlur={emailBlurHandler}
                        value={enteredEmail}
                    />
                </div>
                <div className={passwordInputClasses}>
                    <label htmlFor='password' >Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        placeholder='Password...'
                        onChange={passwordChangedHandler}
                        onBlur={passwordBlurHandler}
                        value={enteredPassword}
                    />
                </div>
                <Button type='submit' btnType='Login' >Submit</Button>
            </form>
        </div>
    );
};

export default SignUp;
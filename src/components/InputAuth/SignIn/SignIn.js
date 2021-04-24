import React from 'react';

import UseInput from '../../../hooks/useInput';
import Button from '../../Button/Button';
import './SignIn.css';

const signIn = (props) => {
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

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        resetEmailInput();
        resetPasswordInput();
        props.onSignIn({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        });
    };

    const emailInputClasses = emailInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    const passwordInputClasses = passwordInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    return (
        <div className="signInForm">
            <div className="Title">Sign In</div>
            <form onSubmit={formSubmissionHandler}>
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
                <Button type='submit' btnType='Login' >Login</Button>
            </form>
        </div>
    );
};

export default signIn;
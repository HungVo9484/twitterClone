import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import UseInput from '../../../hooks/useInput';
import { validateUsername, validateEmail, validatePassword} from '../../../lib/validation';
import Button from '../../Button/Button';
import { signUp } from '../../../store/auth_actions';
import { uiActions } from '../../../store/ui_slice';
import './SignUp.css';

const SignUp = () => {

    const dispatch = useDispatch();
    const errorMessage = useSelector((state) => state.ui.errorMessage);
    const authSuccess = useSelector((state) => state.ui.authSuccess);
    const history = useHistory();


    const {
        value: enteredUsername,
        isValid: enteredUsernameIsValid,
        hasError: usernameInputHasError,
        valueChangeHandler: usernameChangedHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsernameInput
    } = UseInput(validateUsername);

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = UseInput(validateEmail);

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput
    } = UseInput(validatePassword);

    let formIsValid = false;

    if (enteredUsernameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        };
        dispatch(signUp({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        }, enteredUsername))
        resetUsernameInput();
        resetEmailInput();
        resetPasswordInput();
    };

    useEffect(() => {
        if (authSuccess) {
            dispatch(uiActions.setIsAuth())
            history.push('/home')
        }
    }, [authSuccess, history, dispatch])

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
            {errorMessage ? <strong style={{color: "red"}}>{errorMessage}</strong> : null}
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
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import UseInput from '../../../hooks/useInput';
import Button from '../../Button/Button';
import { signIn } from '../../../store/auth_actions';
import { uiActions } from '../../../store/ui_slice';
import './SignIn.css';

const SignIn = (props) => {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state) => state.ui.errorMessage);
    const authSuccess = useSelector((state) => state.ui.authSuccess);
    const history = useHistory();

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
        dispatch(signIn({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        }))
        resetEmailInput();
        resetPasswordInput();
    };

    useEffect(() => {
        if (authSuccess) {
            dispatch(uiActions.setIsAuth())
            history.push('/home')
            console.log('SignIn');
        }
    }, [authSuccess, history, dispatch])

    const emailInputClasses = emailInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    const passwordInputClasses = passwordInputHasError
        ? 'signup-form-control invalid'
        : 'signup-form-control';

    return (
        <div className="signInForm">
            <div className="Title">Sign In</div>
            {errorMessage ? <strong style={{color: "red"}}>{errorMessage}</strong> : null}
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

export default SignIn;
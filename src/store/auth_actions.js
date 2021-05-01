import { authActions } from './auth_slice';
import { uiActions } from './ui_slice';

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expirationDate');
        dispatch(authActions.clearUserInfo());
        dispatch(uiActions.clearAll());
    };
};

export const checkAuthTimeout = (expiration) => {
    return async (dispatch) => {
        setTimeout(() => dispatch(logout()), expiration*3000)
        console.log('check timeout');
    };
}

export const signUp = (userData, userName) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Signing up...',
            message: 'User signing up!'
        }));

        const userSignUp = async () => {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYN0xEzucqSY7h48Ge6qyE0L6u7LaUjcE'
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error.message || 'Could not SignUp')
            };
            return data;
        };

        try {
            const data = await userSignUp();
            const expirationDate = new Date(new Date().getTime() + data.expiresIn*1000)
            localStorage.setItem('token', data.idToken);
            localStorage.setItem('userId', data.localId);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(checkAuthTimeout(data.expiresIn))
            dispatch(authActions.addUserInfo({
                username: userName,
                email: data.email,
                userId: data.localId,
            }));
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'SignUp success!'
            }));
            dispatch(uiActions.setAuthSuccess())
            dispatch(authActions.setIsSignup())
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: error.message
            }));
            dispatch(uiActions.showErrorMessage(
                error.message
            ));
        };
    };
};

export const signIn = (userData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Signing in...',
            message: 'User signing in!'
        }));

        const userSignIn = async () => {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYN0xEzucqSY7h48Ge6qyE0L6u7LaUjcE';
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error.message || 'Could not SignUp')
            };
            return data;
        };

        try {
            const data = await userSignIn();
            const expirationDate = new Date(new Date().getTime() + data.expiresIn*1000)
            localStorage.setItem('token', data.idToken);
            localStorage.setItem('userId', data.localId);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(checkAuthTimeout(data.expiresIn))
            dispatch(authActions.addUserInfo({
                email: data.email,
                userId: data.localId,
            }));
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'SignUp success!'
            }));
            dispatch(uiActions.setAuthSuccess())
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error...',
                message: error.message
            }));
            dispatch(uiActions.showErrorMessage(
                error.message
            ));
        };
    };
};

export const authCheckState =  () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(uiActions.setCheckAuthStateCompleted())
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(uiActions.setCheckAuthStateCompleted())
                dispatch(logout());
            } else {
                dispatch(uiActions.setCheckAuthStateCompleted())
                dispatch(authActions.addUserInfo({
                    userId: localStorage.getItem('userId'),
                }));
                dispatch(uiActions.setIsAuth());
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            };
        };
    };
};




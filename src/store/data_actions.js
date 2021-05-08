import { authActions } from './auth_slice';

const FIREBASE_DOMAIN = 'https://twitter-clone1-755c7-default-rtdb.firebaseio.com';

export const sendUserInfo = (userData, userName) => {
    return async (dispatch) => {
        const newUserData = {};
        newUserData[userName] = userData;
        const url = `${FIREBASE_DOMAIN}/usersInfo.json`;
        const sendRequest = async () => {
            const response = await fetch(url, {
                method: 'PATCH',
                body: JSON.stringify(newUserData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error.message || 'Could not create userInfo');
            }
            return data;
        };

        try {
            const data = await sendRequest();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        };
    };
};

export const getUserInfo = (userId) => {
    return async (dispatch) => {
        const url = `${FIREBASE_DOMAIN}/usersInfo.json?orderBy="userId"&equalTo="${userId}"`;
        const sendRequest = async () => {
            const response = await fetch(url, {method: 'GET'});
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error.message || 'Could not create userInfo');
            }
            return data;
        };

        try {
            const data = await sendRequest();
            dispatch(authActions.addUserInfo(data[Object.keys(data)[0]]))
            console.log(data);
            console.log(Object.keys(data));
        } catch (error) {
            console.log(error.message);
        };  
    };
};

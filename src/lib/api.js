import { checkAuthTimeout } from './authCheckState'

const FIREBASE_DOMAIN = 'https://twitter-clone1-755c7-default-rtdb.firebaseio.com';

export async function authUser(authData, isSignup = false) {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYN0xEzucqSY7h48Ge6qyE0L6u7LaUjcE';

    if (isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYN0xEzucqSY7h48Ge6qyE0L6u7LaUjcE'
    };

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log('api', data);

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not SignUp or SignIn')
    };

    const expirationDate = new Date(new Date().getTime() + data.expiresIn*1000)
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('token', data.idToken);
    localStorage.setItem('expirationDate', expirationDate);
    checkAuthTimeout(data.expiresIn * 1000)
    return data;
};

export async function createUsersInfo(userName, userInfo) {
    const newUserInfo = {};
    newUserInfo[userName] = userInfo;

    const url = `${FIREBASE_DOMAIN}/usersInfo.json`;

    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(newUserInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not create User Info')
    };



    return data;
};

export async function updateUsersInfo(updateInfo) {
    const url = `${FIREBASE_DOMAIN}/usersInfo/${updateInfo.userName}.json`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(updateInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not update User Info')
    };

    return data
};

export async function readUsersInfo(userId) {
    const url = `${FIREBASE_DOMAIN}/usersInfo.json?orderBy="userId"&equalTo="${userId}"`;

    const response = await fetch(url, {method: 'GET'});

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not update User Info')
    };

    return data;
};

export async function deleteUsersInfo(userName) {
    const url = `${FIREBASE_DOMAIN}/usersInfo/${userName}.json`;

    const response = await fetch(url, {method: 'DELETE'});

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not update User Info')
    };

    return data;
}


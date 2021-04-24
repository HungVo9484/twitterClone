const FIREBASE_DOMAIN = 'https://twitter-clone-cf72b-default-rtdb.firebaseio.com/';

export async function authUser(authData, isSignup) {
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCRDy1kX7qKGqcI8MYnd4GnnxcUlUUlziM';

    if (isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCRDy1kX7qKGqcI8MYnd4GnnxcUlUUlziM'
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
        throw new Error(data.message || 'Could not SignUp or SignIn')
    };

    return data;
};

export async function createUserInfo(userName, userInfo) {
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
        throw new Error(data.message || 'Could not create User Info')
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
        throw new Error(data.message || 'Could not update User Info')
    };

    return data
};

export async function readUsersInfo(userName) {
    const url = `${FIREBASE_DOMAIN}/usersInfo/${userName}.json`;

    const response = await fetch(url, {method: 'GET'});

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not update User Info')
    };

    return data;
};

export async function deleteUsersInfo(userName) {
    const url = `${FIREBASE_DOMAIN}/usersInfo/${userName}.json`;

    const response = await fetch(url, {method: 'DELETE'});

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not update User Info')
    };

    console.log(data);

    return data;
}
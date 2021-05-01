
export  const Logout = () => {

    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
};

export const checkAuthTimeout = (expiration) => {
    return async () => {
        setTimeout(Logout(), expiration*1000)
    };
}

export const authCheckState =  () => {
    const token = localStorage.getItem('token');
    let isAuth = false;
    let userId = null;
    if (!token) {
        Logout();
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            Logout();
        } else {
            userId = localStorage.getItem('userId');
            isAuth = true;
            checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 );
        };
    };
    return [isAuth, userId];
}
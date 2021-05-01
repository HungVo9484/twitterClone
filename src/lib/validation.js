export const validateEmail = (value) => {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(value);
};

export const validateUsername = (value) => {
    const pattern = /^[^ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{5,30}$/;
    // const p = /^[^* | \ " : < > [ ] { } ` \ ( ) '' ; @ & $]+$/;
    return pattern.test(value);
};

export const validatePassword = (value) => {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return pattern.test(value);
};

export const validateNumber = (value) => {
    const pattern = /^\d+$/;
    return pattern.test(value);
};
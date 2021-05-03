import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notification: null,
        errorMessage: null,
        authSuccess: false,
        isAuth: false,
        checkAuthStateCompleted: false,
    },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        },
        showErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
        clearErrorMessage(state) {
            state.errorMessage = null;
        },
        setIsAuth(state) {
            state.isAuth = true;
        },
        clearIsAuth(state) {
            state.isAuth = false;
        },
        setAuthSuccess(state) {
            state.authSuccess = true;
        },
        clearAuthSuccess(state) {
            state.authSuccess = false;
        },
        setCheckAuthStateCompleted(state) {
            state.checkAuthStateCompleted = true;
        },
        clearAll(state) {
            state.notification = null;
            state.errorMessage = null;
            state.isAuth = false;
            state.authSuccess = false;
        }
    }
});

export const uiActions= uiSlice.actions;

export default uiSlice;
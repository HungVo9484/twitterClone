import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userInfo: {
            displayName: null,
            username: null,
            email: null,
            avatar: null,
            userId: null,
            profileImage: null,
        },
        isSignup: false,
        changed: false,
    },
    reducers: {
        addUserInfo(state, action) {
            for (let key of Object.keys(action.payload)) {
                state.userInfo[key] = action.payload[key];
            };
        },
        clearUserInfo(state) {
            for (let key of Object.keys(state)) {
                state.userInfo[key] = null;
            };
        },
        setIsSignup(state) {
            state.isSignup = true;
        },
        clearIsSignup(state) {
            state.isSignup = false;
        },
        setChanged(state) {
            state.changed = true;
        },
        clearChanged(state) {
            state.changed = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;
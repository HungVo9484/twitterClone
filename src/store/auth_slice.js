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
            bio: null,
            location: null,
            website: null,
            joinedDate: null,
            following: [],
            follower: [],
        },
        isSignup: false,
    },
    reducers: {
        addUserInfo(state, action) {
            for (let key of Object.keys(action.payload)) {
                state.userInfo[key] = action.payload[key];
            };
        },
        clearUserInfo(state) {
            for (let key of Object.keys(state.userInfo)) {
                state.userInfo[key] = null;
            };
        },
        setFollowing(state, action) {
            state.userInfo.following.push(action.payload);
        },
        unFollowing(state, action) {
            state.userInfo.following = state.userInfo.following.filter(
                el => el !== action.payload
            );
        },
        setFollower(state, action) {
            state.userInfo.follower.push(action.payload);
        },
        unFollower(state, action) {
            state.userInfo.follower = state.userInfo.follower.filter(
                el => el !== action.payload
            );
        },
        setIsSignup(state) {
            state.isSignup = true;
        },
        clearIsSignup(state) {
            state.isSignup = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;
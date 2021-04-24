import { initStore } from './store';

const configureStore = () => {
    const actions = { ADD: (curState, user) => {
        const updatedInfo = {...curState};
        for (let key of Object.keys(user)) {
            updatedInfo.userInfo[key] = user[key];
        };
        return updatedInfo;
    }};

    initStore(actions, {userInfo: {
        userName: null,
        userId: null,
        email: null,
        displayName: null,
        avatar: null,
        profileImage: null,
    }});
};

export default configureStore;
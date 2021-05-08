import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui_slice';
import authSlice from './auth_slice';
import imageSlice from './image_slice';

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        image: imageSlice.reducer
    }
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui_slice';
import authSlice from './auth_slice';

const store = configureStore({
    reducer: { ui: uiSlice.reducer, auth: authSlice.reducer}
});

export default store;

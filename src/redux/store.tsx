import { configureStore } from '@reduxjs/toolkit';
//import authReducer from './slices/authSlice'; // مثال لمستقبلك
import authSlice from './authSlice';
export const store = configureStore({
  reducer: {
    auth: authSlice,
    // تقدر تضيف reducers تانية هنا
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
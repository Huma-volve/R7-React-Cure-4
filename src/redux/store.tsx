import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import appointmentReducer from "./appointmentSlice";
import paymentReducer from "./paymentSlice";
import rateReducer from "./rateSlice";
import doctorsReducer from "./doctorsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
    payments: paymentReducer,
    doctors: doctorsReducer,
    rate: rateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

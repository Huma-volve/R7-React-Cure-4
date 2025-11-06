import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// signIn thunk
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://cure-doctor-booking.runasp.net/api/Identity/Accounts/login",
        { phoneNumber }
      );
      console.log("📥 Received sign up response:", response.data);
      console.log("📥 Received sign up response:", response);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
// signUp thunk
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (
    {
      fullName,
      email,
      phoneNumber,
    }: { fullName: string; email: string; phoneNumber: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://cure-doctor-booking.runasp.net/api/Identity/Accounts/register",
        { fullName, email, phoneNumber }
      );
      console.log("📥 Received sign up response:", response.data);
      console.log("📥 Received sign up response:", response);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// OTP thunk
export const verfyOtp = createAsyncThunk(
  "auth/verfyOtp",
  async (
    { phoneNumber, otp , api }: { phoneNumber: string; otp: string, api: string },
    { rejectWithValue }
  ) => {
    try {
      console.log("📤 Sending OTP verify request:", { phoneNumber, otp });
      const response = await axios.post(
        `https://cure-doctor-booking.runasp.net/api/Identity/Accounts/verify-${api}`,
        { phoneNumber, otpNumber: otp }
      );
      console.log("📥 Received OTP verify response:", response.data);
      console.log("📥 Received OTP verify response:", response);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// ✅ Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    // ---- signIn ----
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---- signUp ----
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // ---- verifyOtp ----
    builder
      .addCase(verfyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verfyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        const userData = action.payload; // 👈 بيانات المستخدم الراجعة من السيرفر

        // حفظ الـ tokens
        if (userData.accessToken) {
          localStorage.setItem("accessToken", userData.accessToken);
        }
        if (userData.refreshToken) {
          localStorage.setItem("refreshToken", userData.refreshToken);
        }
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .addCase(verfyOtp.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

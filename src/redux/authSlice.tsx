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
      // console.log("📥 Received sign up response:", response.data);
      // console.log("📥 Received sign up response:", response);
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
      // console.log("📥 Received sign up response:", response.data);
      // console.log("📥 Received sign up response:", response);
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
    {
      phoneNumber,
      otp,
      api,
    }: { phoneNumber: string; otp: string; api: string },
    { rejectWithValue }
  ) => {
    try {
      // console.log("📤 Sending OTP verify request:", { phoneNumber, otp });
      const response = await axios.post(
        `https://cure-doctor-booking.runasp.net/api/Identity/Accounts/verify-${api}`,
        { phoneNumber, otpNumber: otp }
      );
      // console.log("📥 Received OTP verify response:", response.data);
      // console.log("📥 Received OTP verify response:", response);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
// logout thunk
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

    if (!refreshToken) {
      return rejectWithValue(
        "⚠️ No refresh token found. You might already be logged out."
      );
    }

    try {
      await axios.post(
        "https://cure-doctor-booking.runasp.net/api/Identity/Accounts/logout",
        { refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return true;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");

      const response = await axios.get(
        "https://cure-doctor-booking.runasp.net/api/profile/Editprofile/getprofile",
        {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        }
      );
      console.log("📥 Received user profile response:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data; // بيرجع البيانات للـ slice
    } catch (error: any) {
      // لو السيرفر رجع 401 أو أي خطأ
      return rejectWithValue(
        error.response?.data || "فشل في جلب بيانات المستخدم"
      );
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
  reducers: {},
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
        const userData = action.payload.data;
        if (userData.accessToken) {
          localStorage.setItem("accessToken", userData.accessToken);
        }
        if (userData.refreshToken) {
          localStorage.setItem("refreshToken", userData.refreshToken);
        }
      })
      .addCase(verfyOtp.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // ---- logout User ----
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
    // ---- get User ----
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

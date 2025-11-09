// src/redux/slices/rateSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://cure-doctor-booking.runasp.net/api/Customer/Doctors/RateDoctor";

export const rateDoctor = createAsyncThunk(
  "rate/doctor",
  async (rateData: { doctorId: number; rating: number; comment?: string }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(BASE_URL, rateData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const rateSlice = createSlice({
  name: "rate",
  initialState: { success: false, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(rateDoctor.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(rateDoctor.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(rateDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default rateSlice.reducer;

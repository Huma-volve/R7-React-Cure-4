// src/redux/slices/appointmentSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://cure-doctor-booking.runasp.net/api/Customer/Appointments";

// ✅ Get all appointments
export const getAppointments = createAsyncThunk(
    "appointments/getAll",
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await axios.get(BASE_URL, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

// ✅ Create new appointment
export const createAppointment = createAsyncThunk(
    "appointments/create",
    async (appointmentData: any, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("accessToken");
            const response = await axios.post(BASE_URL, appointmentData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

const appointmentSlice = createSlice({
    name: "appointments",
    initialState: {
        data: [] as any[],
        loading: false,
        error: null as unknown | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAppointments.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAppointments.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getAppointments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createAppointment.pending, (state) => {
                state.loading = true;
            })
            .addCase(createAppointment.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(createAppointment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default appointmentSlice.reducer;

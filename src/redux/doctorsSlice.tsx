// src/store/doctorsSlice.ts
import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { DoctorDto } from "@/lib/api";
import { getAllDoctors, getDoctorDetails } from "@/lib/api";

export const fetchDoctors = createAsyncThunk<DoctorDto[]>(
    "doctors/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await getAllDoctors();
        } catch (err: any) {
            return rejectWithValue(err.message || "Failed to fetch doctors");
        }
    }
);

export const fetchDoctorById = createAsyncThunk<DoctorDto, number>(
    "doctors/fetchById",
    async (id, { rejectWithValue }) => {
        try {
            return await getDoctorDetails(id);
        } catch (err: any) {
            return rejectWithValue(err.message || "Failed to fetch doctor");
        }
    }
);

type DoctorsState = {
    list: DoctorDto[];
    selected?: DoctorDto | null;
    loading: boolean;
    error: string | null;
};

const initialState: DoctorsState = {
    list: [],
    selected: null,
    loading: false,
    error: null,
};

const doctorsSlice = createSlice({
    name: "doctors",
    initialState,
    reducers: {
        selectDoctorLocal(state, action: PayloadAction<number>) {
            const d = state.list.find((x) => x.id === action.payload) || null;
            state.selected = d;
        },
        clearSelected(state) {
            state.selected = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctors.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchDoctorById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctorById.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload;
            })
            .addCase(fetchDoctorById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { selectDoctorLocal, clearSelected } = doctorsSlice.actions;
export default doctorsSlice.reducer;

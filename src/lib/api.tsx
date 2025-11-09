// lib/api.ts

import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "https://cure-doctor-booking.runasp.net";


export type DoctorDto = {
  id: number;
  fullName?: string;
  name?: string;
  specialty?: string;
  specialtyName?: string;
  imageUrl?: string;
  rating?: number;
  reviewsCount?: number;
  patientsCount?: number;
  experienceYears?: number;
  description?: string;
  address?: string;
  latitude?: number;  // important for map
  longitude?: number; // important for map
  isFavourite?: boolean;
};

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    try {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("accessToken"); // أو غيري الاسم لو بتخزني باسم تاني
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
    } catch (e) {
        // ignore
        console.log(e)
    }
    return config;
});


export async function getAllDoctors(): Promise<DoctorDto[]> {
  const res = await fetch(`${API_BASE}/api/Customer/Doctors/GetAllDoctors`);
  if (!res.ok) throw new Error(`Failed to load doctors: ${res.status}`);
  return res.json();
}

export async function getDoctorDetails(id: number | string): Promise<DoctorDto> {
  const res = await fetch(`${API_BASE}/api/Customer/Doctors/DoctorDetails/${id}`);
  if (!res.ok) throw new Error(`Failed to load doctor ${id}: ${res.status}`);
  return res.json();
}
export default api;

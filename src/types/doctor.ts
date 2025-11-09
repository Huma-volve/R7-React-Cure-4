// types/doctor.ts
export interface DoctorDetails {
  id: string | number;
  fullName?: string;
  name?: string;
  specialty?: string;
  specialtyName?: string;
  bio?: string;
  description?: string;
  location?: string;
  address?: string;
  imageUrl?: string;
  patientsCount?: number;
  experienceYears?: number;
  rating?: number;
  reviewsCount?: number;
  isFavourite?: boolean;
}

"use client";
import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import type { DoctorDetails } from "../../types/doctor"; // لو استخدمتي الملف
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Props {
    doctorId: string | number;
}

export default function DoctorCard({ doctorId }: Props) {
    const [doctor, setDoctor] = useState<DoctorDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!doctorId) return;
        let cancelled = false;

        async function fetchDoctor() {
            setLoading(true);
            setError(null);
            try {
                const res = await api.get(`/api/Customer/Doctors/DoctorDetails/${doctorId}`);
                if (cancelled) return;
                setDoctor(res.data);
            } catch (err: any) {
                console.error(err);
                setError(err?.response?.data?.message || err.message || "Failed to load doctor");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchDoctor();
        return () => { cancelled = true; };
    }, [doctorId]);

    if (loading) return <div>Loading doctor...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    const img = doctor?.imageUrl || "/assets/doctor1.jpg";
    const name = doctor?.fullName || doctor?.name || "Dr. Unknown";
    const speciality = doctor?.specialty || doctor?.specialtyName || "Specialist";
    const bio = doctor?.bio || doctor?.description || "No bio available.";
    const location = doctor?.location || doctor?.address || "Location not specified";
    const patients = doctor?.patientsCount ?? 0;
    const exp = doctor?.experienceYears ?? 0;
    const rating = doctor?.rating ?? 0;
    const reviews = doctor?.reviewsCount ?? 0;

    return (
        <div className="w-full md:w-1/3 space-y-4">
            <Card className="p-6 bg-gray-50 rounded-2xl border-0">
                <CardContent className="space-y-4">
                    <div className="flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={img} />
                            <AvatarFallback>DT</AvatarFallback>
                        </Avatar>
                        <h2 className="font-semibold text-lg mt-2">{name}</h2>
                        <p className="text-sm text-gray-500">{speciality}</p>
                    </div>

                    <div className="flex justify-between text-center">
                        <div>
                            <p className="font-bold">{patients.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">Patients</p>
                        </div>
                        <div>
                            <p className="font-bold">{exp}+</p>
                            <p className="text-xs text-gray-500">Experience</p>
                        </div>
                        <div>
                            <p className="font-bold">{rating}</p>
                            <p className="text-xs text-gray-500">Rating</p>
                        </div>
                        <div>
                            <p className="font-bold">{reviews}</p>
                            <p className="text-xs text-gray-500">Reviews</p>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="font-semibold mb-1">About me</h3>
                        <p className="text-sm text-gray-600">{bio}</p>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-sm text-gray-600">{location}</p>
                        <div className="mt-2 bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            Map Placeholder
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

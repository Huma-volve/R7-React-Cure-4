import React from "react";
import type { DoctorDto } from "@/lib/api";

type Props = {
  doctors: DoctorDto[];
  onSelect: (id: number) => void;
};

export default function DoctorList({ doctors, onSelect }: Props) {
  return (
    <div className="p-4 space-y-4 overflow-y-auto" style={{ maxHeight: "700px" }}>
      <h3 className="text-lg font-semibold">Results</h3>
      {doctors.map((d) => (
        <div key={d.id} className="flex gap-3 items-center p-3 rounded-lg bg-white shadow-sm cursor-pointer" onClick={() => onSelect(d.id)}>
          <img src={d.imageUrl || "/assets/doctor1.jpg"} alt={d.fullName} className="w-12 h-12 rounded-full object-cover" />
          <div className="flex-1">
            <div className="font-semibold">{d.fullName || d.name}</div>
            <div className="text-xs text-gray-500">{d.specialty || d.specialtyName}</div>
            <div className="text-xs text-gray-400">{d.rating ?? "—"} ⭐ · {d.patientsCount ?? "—"} patients</div>
          </div>
          <div className="text-sm text-gray-500">{/* working hours optional */}9:30am - 8:00pm</div>
        </div>
      ))}
    </div>
  );
}

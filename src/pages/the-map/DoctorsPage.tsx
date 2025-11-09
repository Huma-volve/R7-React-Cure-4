import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors, selectDoctorLocal } from "../../redux/doctorsSlice"; // import doctorsSlice";
import type { RootState } from "../../redux/store";
import type { AppDispatch } from "../../redux/store";
import DoctorList from "./DoctorList";
import DoctorMap from "./DoctorMap";

export default function DoctorsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, selected, loading } = useSelector((state: RootState) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  function handleSelect(id: number) {
    dispatch(selectDoctorLocal(id));
    // optionally scroll to doctor card or fetch details: dispatch(fetchDoctorById(id))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-2xl p-4">
        <div className="flex gap-6">
          <div style={{ width: 360 }}>
            <DoctorList doctors={list} onSelect={handleSelect} />
          </div>

          <div style={{ flex: 1 }}>
            <DoctorMap doctors={list.map(d => ({ id: d.id, fullName: d.fullName || d.name, latitude: d.latitude, longitude: d.longitude, imageUrl: d.imageUrl }))} onMarkerClick={handleSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

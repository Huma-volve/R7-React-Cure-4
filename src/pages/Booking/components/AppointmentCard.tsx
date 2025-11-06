import { Calendar, MapPin } from "lucide-react";

export default function AppointmentCard() {
    return (
        <div className="w-full max-w-md bg-white rounded-2xl border shadow-sm p-4 font-sans">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <Calendar size={20} />
                    <span>Monday, July 21 - 11:00 AM</span>
                </div>
                <span className="text-[#145DB8] font-semibold text-sm">Upcoming</span>
            </div>

            {/* Doctor Info */}
            <div className="flex items-center gap-3 py-4">
                <img
                    src="https://i.ibb.co/0j1J3Dg/doctor-avatar.jpg"
                    alt="doctor"
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Jennifer Miller</h2>
                    <p className="text-gray-500 text-sm">Psychiatrist</p>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                <MapPin size={18} className="text-gray-500" />
                <span>129, El-Nasr Street, Cairo, Egypt</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
                <button className="w-1/2 py-2 rounded-xl border text-gray-500 font-medium hover:bg-gray-100 transition">
                    Cancel
                </button>

                <button className="w-1/2 py-2 rounded-xl [#145DB8] text-white font-medium hover:bg-blue-700 transition">
                    Reschedule
                </button>
            </div>
        </div>
    );
}

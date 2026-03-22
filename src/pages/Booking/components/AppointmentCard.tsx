import { Calendar, MapPin, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppointmentCard() {
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Jennifer Miller",
      specialty: "Psychiatrist",
      date: "Monday, July 21",
      time: "11:00 AM",
      location: "129, El-Nasr Street, Cairo, Egypt",
      status: "Upcoming",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      doctorName: "Dr. Ahmed Hassan",
      specialty: "Cardiologist",
      date: "Wednesday, July 23",
      time: "2:30 PM",
      location: "Cairo Medical Center, Zamalek",
      status: "Upcoming",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      doctorName: "Dr. Fatima Ali",
      specialty: "Dermatologist",
      date: "Friday, July 25",
      time: "4:00 PM",
      location: "Alexandria Clinic, Alexandria",
      status: "Scheduled",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-[#145DB8]";
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Canceled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <>
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="w-full bg-white border border-[#BBC1C7] rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow"
        >
          {/* Header with Date and Status */}
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Calendar className="w-5 h-5 text-[#145DB8]" />
              <span className="text-sm">
                {appointment.date} - {appointment.time}
              </span>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(
                appointment.status
              )}`}
            >
              {appointment.status}
            </span>
          </div>

          {/* Doctor Info */}
          <div className="flex items-center gap-3 mb-4">
            <img
              src={appointment.image}
              alt={appointment.doctorName}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {appointment.doctorName}
              </h3>
              <p className="text-gray-500 text-sm">{appointment.specialty}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 mb-4 pb-4 border-b">
            <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <span className="text-gray-600 text-sm">{appointment.location}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Message
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call
            </Button>
            <Button variant="outline" className="px-3">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

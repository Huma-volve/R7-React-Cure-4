import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CalendarRange } from "lucide-react";
import AppointmentCard from "./components/AppointmentCard";
import axios from "axios"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Booking() {
    const [msg, setmsg] = useState<string | null>(null);
    const [filterStatus, setFilterStatus] = useState("all");
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const token = (localStorage.getItem("accessToken") || "")

    useEffect(() => {
        async function getallAppointment() {
            try {
                const res = await axios.get("https://cure-doctor-booking.runasp.net/api/Customer/Booking/PatientBookings?pageNumber=1&pageSize=10", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const data = await res.data
                console.log(data)

            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    setmsg(error.response?.data?.message || "Request failed");
                } else if (error instanceof Error) {
                    setmsg(error.message);
                } else {
                    setmsg("An unexpected error occurred");
                }
            }
        }
        getallAppointment()
    }, [token])

    const handleFilterClick = (status: string) => {
        setFilterStatus(status);
    };

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            <div className="container">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-[#05162C] mb-2">
                        Your Appointments
                    </h1>
                    <p className="text-gray-600">
                        Manage and track all your doctor appointments in one place
                    </p>
                </div>

                {/* Filters Section */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        {/* Status Filter */}
                        <div className="flex flex-wrap gap-2">
                            {["all", "upcoming", "complete", "canceled"].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => handleFilterClick(status)}
                                    className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                                        filterStatus === status
                                            ? "bg-[#145DB8] text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>

                        {/* Date Filter */}
                        <Select value={selectedDate || ""} onValueChange={setSelectedDate}>
                            <SelectTrigger className="w-full md:w-75">
                                <CalendarRange className="w-4 h-4 mr-2" />
                                <SelectValue placeholder="Select a date" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="monday">Monday, July 21</SelectItem>
                                <SelectItem value="tuesday">Tuesday, July 22</SelectItem>
                                <SelectItem value="wednesday">Wednesday, July 23</SelectItem>
                                <SelectItem value="thursday">Thursday, July 24</SelectItem>
                                <SelectItem value="friday">Friday, July 25</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Appointments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {!msg ? (
                        <>
                            <AppointmentCard />
                        </>
                    ) : (
                        <div className="col-span-full">
                            <div className="bg-white rounded-lg p-12 text-center">
                                <p className="text-gray-600 text-lg mb-4">{msg}</p>
                                <Button className="bg-[#145DB8] hover:bg-[#0D4FA3]">
                                    Book Your First Appointment
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {!msg && (
                    <div className="mt-8 bg-blue-50 rounded-lg p-8 text-center border border-blue-200">
                        <h3 className="text-lg font-semibold text-[#05162C] mb-2">
                            No more appointments today
                        </h3>
                        <p className="text-gray-600 mb-4">
                            You don't have any {filterStatus} appointments
                        </p>
                        <Button className="bg-[#145DB8] hover:bg-[#0D4FA3]">
                            Book New Appointment
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

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
import { useEffect } from "react";




export default function Booking() {
    const token = JSON.parse(localStorage.getItem("user") || "").data.accessToken;

    async function getallAppointment() {
        try {
            const res = await axios.get(
                "https://cure-doctor-booking.runasp.net/api/Customer/Booking/PatientBookings",
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ أرسل التوكن هنا
                    },

                }
            );
            console.log(res.message)

            console.log("Appointments:", res.data);
            return res.data;
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
        // const data = await res.data

    }


    useEffect(() => {
        getallAppointment()
    })
    return (
        <section className="py-16">
            <div className="container">
                <h2 className="text-[#05162C] mb-6 text-2xl">
                    Your appointments
                </h2>
                <div className="flex justify-between max-lg:flex-col    ">
                    <ul className="flex flex-wrap max-lg:mb-4 capitalize [&_li]:focus:bg-[#145DB8] [&_li]:px-4 [&_li]:py-2  [&_li]:focus:text-white  [&_li]:rounded-[9px] [&_li]:cursor-pointer gap-2.5 [&_li]:">
                        <li tabIndex={0}>all</li>
                        <li tabIndex={0}>upcoming</li>
                        <li tabIndex={0}>complete</li>
                        <li tabIndex={0}>canceled</li>
                    </ul>
                    <Select>
                        <SelectTrigger className="sm:w-[396px] ">
                            <SelectValue
                                placeholder={
                                    <div className="flex">
                                        <CalendarRange className="mr-2" />{" "}
                                        <span>Monday,July 21</span>
                                    </div>
                                }
                                className="bg-white text-black"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Monday,July 21">
                                <CalendarRange /> Monday,July 21
                            </SelectItem>
                            <SelectItem value="Monday,July 21">
                                {" "}
                                <CalendarRange /> Monday,July 21
                            </SelectItem>
                            <SelectItem value="Monday,July 21">
                                {" "}
                                <CalendarRange />
                                Monday,July 21
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="gird grid-cols-4 mt-6">
                    <AppointmentCard />
                </div>
            </div>
        </section>
    );
}

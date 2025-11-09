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




export default function Booking() {
    const [msg, setmsg] = useState<string | null>(null);

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
                    // ✅ TypeScript دلوقتي عارف إن error هو AxiosError
                    setmsg(error.response?.data?.message || "Request failed");
                } else if (error instanceof Error) {
                    // ✅ في حالة error عادي
                    setmsg(error.message);
                } else {
                    // ✅ fallback
                    setmsg("An unexpected error occurred");
                }
            }
        }
        getallAppointment()
    }, [token])
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
                <div className="grid grid-cols-4 mt-6">
                    {msg ? msg : <AppointmentCard />
                    }
                </div>
            </div>
        </section>
    );
}

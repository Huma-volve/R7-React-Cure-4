import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CalendarRange } from "lucide-react";

import AppointmentCard from "./components/AppointmentCard";

// async function getallAppointment(params) {
//     axios
// }

export default function Booking() {
    return (
        <section className="py-16">
            <div className="container">
                <h2 className="text-[#05162C] mb-6 text-2xl">
                    Your appointments
                </h2>
                <div className="flex justify-between">
                    <ul className="flex capitalize [&_li]:focus:bg-[#145DB8] [&_li]:px-4 [&_li]:py-2  [&_li]:focus:text-white  [&_li]:rounded-[9px] [&_li]:cursor-pointer gap-2.5 [&_li]:">
                        <li tabIndex={0}>all</li>
                        <li tabIndex={0}>upcoming</li>
                        <li tabIndex={0}>complete</li>
                        <li tabIndex={0}>canceled</li>
                    </ul>
                    <Select>
                        <SelectTrigger className="w-[396px] ">
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

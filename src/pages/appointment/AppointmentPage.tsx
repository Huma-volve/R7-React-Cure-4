
import { useState, useMemo } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Star, CalendarDays } from "lucide-react";
import { format, startOfWeek, addDays } from "date-fns";
import leftArrow from "/assets/left-arrow.png";
import DoctorCard from "./DoctorCard";
// import chatIcon from "/assets/chat-Icon.png";
// import favIcon from "/assets/fav-Icon.png";
// import experience from "/assets/experience.png";
// import messages from "/assets/messages.png";
// import profileUser from "/assets/profile-2user.png";
// import starIcon from "/assets/starIcon.png";
export default function AppointmentPage() {

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedDay, setSelectedDay] = useState<string>("");
    const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
    const [showWeek, setShowWeek] = useState<boolean>(false);

const testDoctorId = 5;
    const weekDays = useMemo(() => {
        const start = startOfWeek(selectedDate, { weekStartsOn: 5 }); // يبدأ من الجمعة
        return Array.from({ length: 7 }).map((_, i) => addDays(start, i));
    }, [selectedDate]);

    const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:30 PM", "5:30 PM", "7:00 PM"];

    return (
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-6 mt-6">
            {/* ================= LEFT SIDE ================= */}
            <div className="flex-1 space-y-8">
                {/* العنوان */}
                <div className="flex items-center gap-3">
                    <img src={leftArrow} alt="left-arrow" className="mr-1 cursor-pointer" />
                    <CardTitle className="text-lg font-semibold m-0">Make an appointment</CardTitle>
                </div>

                {/* ========== Appointment Box ========== */}
                <Card className="p-6 rounded-2xl shadow-sm">
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold m-0">
                            Choose date and time
                        </CardTitle>

                        <div className="flex items-center gap-2">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button>
                                        <CalendarDays className="w-4 h-4 text-gray-500" />
                                    </button>
                                    </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(date) => {
                                            if (date) {
                                                setSelectedDate(date);
                                                setShowWeek(true);
                                            }
                                        }}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                    
                                    <p className="text-sm text-muted-foreground">
                                        {format(selectedDate, "PPP")} - {selectedTime}
                                    </p>
                                </div>
                            </CardHeader>

                            <Separator className="my-2 bg-gray-300" />

                            <CardContent className="space-y-4">
                                {/* ✅ عرض الأسبوع المختار */}
                                {showWeek && (
                                    <div className="flex gap-2 flex-wrap">
                                        {weekDays.map((day) => {
                                            const label = format(day, "EEE d"); // Fri 12
                                            return (
                                                <Button
                                                    key={label}
                                                    onClick={() => setSelectedDay(label)}
                                                    className={`rounded-lg px-4 py-2 transition-all ${selectedDay === label
                                                        ? "bg-blue-700 text-white"
                                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                                        }`}
                                                >
                                                    {label}
                                                </Button>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* ✅ اختيار الوقت */}
                                <div className="flex gap-2 flex-wrap">
                                    {times.map((time) => (
                                        <Button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`rounded-lg px-4 py-2 transition-all ${selectedTime === time
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                                }`}
                                        >
                                            {time}
                                        </Button>
                                    ))}
                                </div>

                                {/* ✅ عرض التاريخ والوقت المختارين */}
                                <p className="text-sm text-gray-500 mt-2">
                                    {selectedDay
                                        ? `${selectedDay} - ${selectedTime}`
                                        : `Please select date and time`}
                                </p>

                                <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-4 rounded-xl">
                                    Book
                                </Button>
                            </CardContent>
                        </Card>

                        {/* ========== Reviews & Ratings ========== */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">Reviews and Rating</h3>
                                <Button variant="link" className="text-blue-600 p-0">
                                    + Add Review
                                </Button>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="text-2xl font-bold">4.5/5</p>
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} fill={i <= 4 ? "yellow" : "none"} />
                                    ))}
                                </div>
                                <p className="text-gray-500 text-sm">1250+ Reviews</p>
                            </div>

                            {/* Review Cards */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    {
                                        name: "Nabila Reyna",
                                        time: "30 min ago",
                                        rating: 4.5,
                                        review:
                                            "Excellent service! Dr. Jessica Turner was attentive and thorough. Highly recommend!",
                                    },
                                    {
                                        name: "Ferry Ichsan A",
                                        time: "1 week ago",
                                        rating: 4.5,
                                        review:
                                            "Quick and easy appointment! The staff made me feel comfortable.",
                                    },
                                ].map((r, i) => (
                                    <Card key={i} className="p-4 bg-yellow-50/20 rounded-xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage src="/assets/avatar.jpg" />
                                                    <AvatarFallback>{r.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-semibold">{r.name}</p>
                                                    <p className="text-xs text-gray-500">{r.time}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <Star fill="yellow" className="w-4 h-4" />
                                                <span className="text-sm font-medium">{r.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-700">{r.review}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <DoctorCard doctorId={testDoctorId} />
                    {/* <div className=" w-full  md:w-1/3 space-y-4">
                        <Card className="p-6 bg-gray-50  rounded-2xl border-0">
                            <div className="flex justify-between" >
                                <img src={chatIcon}/>
                                <img src={favIcon} className=" w-10"/>

                            </div>
                            <CardContent className="space-y-4">
                                <div className="flex  flex-col items-center text-center">
                                    <Avatar className="h-20 w-20 ">
                                        <AvatarImage src="/assets/doctor1.jpg" />
                                        <AvatarFallback>DT</AvatarFallback>
                                    </Avatar>
                                    <h2 className="font-semibold text-lg mt-2">Dr. Jessica Turner</h2>
                                    <p className="text-sm text-gray-500">Pulmonologist</p>
                                </div>

          

                                <div className="flex justify-between text-center">
                                    <div>
                                        <img src={profileUser} className="w-12"/>
                                        <p className="font-bold">2,000+</p>
                                        <p className="text-xs text-gray-500">Patients</p>
                                    </div>
                                    <div>
                                        <img src={experience} className="w-12"/>
                                        <p className="font-bold">10+</p>
                                        <p className="text-xs text-gray-500">Experience</p>
                                    </div>
                                    <div>
                                        <img src={starIcon} className="w-12"/>
                                        <p className="font-bold">4.5</p>
                                        <p className="text-xs text-gray-500">Rating</p>
                                    </div>
                                    <div>
                                        <img src={messages} className="w-12"/>
                                        <p className="font-bold">1,872</p>
                                        <p className="text-xs text-gray-500">Reviews</p>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold mb-1">About me</h3>
                                    <p className="text-sm text-gray-600">
                                        Dr. Jessica Turner, a board-certified Pulmonologist with over 8
                                        years of experience in diagnosing and treating respiratory
                                        diseases.
                                    </p>
                                </div>

                                <Separator />

                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-sm text-gray-600">
                                        129, El-Nasr Street, Cairo, Egypt
                                    </p>
                                    <div className="mt-2 bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                                        Map Placeholder
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div> */}
            </div>
            );
}


import {
    Card,
    CardHeader,
    CardContent,

    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import leftArrow from "/assets/left-arrow.png";
import dateIcon from "/assets/dateIcon.png";
export default function AppointmentPage() {
    return (
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6 mt-6">
            {/* ================= LEFT SIDE ================= */}
            <div className="flex-1 space-y-8">
                <div className="flex items-center gap-3">
                            <img src={leftArrow} alt="left-arrow" className="mr-1 cursor-pointer" />
                            <CardTitle className="text-lg font-semibold m-0">Make an appointment</CardTitle>
                        </div>
                {/* ========== Appointment Box ========== */}
                <Card className="p-6 rounded-2xl shadow-sm">
                    
                           
                    <CardHeader className="flex items-center justify-between ">
                        <CardTitle className="text-lg font-semibold m-0">choose date and time</CardTitle>

                        <div className="flex items-center gap-2">
                            <img src={dateIcon} alt="date" />
                            <p className="text-sm text-muted-foreground">Friday, July 17 - 4:00pm</p>
                        </div>
                    </CardHeader>
                    <Separator className="my-2 bg-gray-300" />

                    <CardContent className="space-y-4">
                        {/* Choose date */}
                        <div>
                            <div className="flex gap-2 flex-wrap">
                                {["Fri 12", "Sat 13", "Sun 14", "Mon 15", "Tue 16", "Wed 17"].map(
                                    (day) => (
                                        <Button
                                            key={day}
                                            variant={day === "Mon 15" ? "default" : "outline"}
                                            className={`rounded-lg px-4 py-2 ${day === "Mon 15"
                                                ? "bg-blue-700 text-white"
                                                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                                }`}
                                        >
                                            {day}
                                        </Button>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Choose time */}
                        <div className="flex gap-2 flex-wrap">
                            {["9:00 AM", "10:00 AM", "11:00 AM", "12:30 AM", "5:30 PM"].map(
                                (time) => (
                                    <Button
                                        key={time}
                                        variant={time === "11:00 AM" ? "default" : "outline"}
                                        className={`rounded-lg px-4 py-2 ${time === "11:00 AM"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        {time}
                                    </Button>
                                )
                            )}
                        </div>

                        {/* Date info */}
                        <p className="text-sm text-gray-500 mt-2">
                            Monday, November 15 - 11:00 AM
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
            <div className="w-full md:w-1/3 space-y-4">
                <Card className="p-6 rounded-2xl shadow-sm">
                    <CardContent className="space-y-4">
                        <div className="flex flex-col items-center text-center">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="/assets/doctor1.jpg" />
                                <AvatarFallback>DT</AvatarFallback>
                            </Avatar>
                            <h2 className="font-semibold text-lg mt-2">
                                Dr. Jessica Turner
                            </h2>
                            <p className="text-sm text-gray-500">Pulmonologist</p>
                        </div>

                        <Separator />

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 text-center">
                            <div>
                                <p className="font-bold">2,000+</p>
                                <p className="text-xs text-gray-500">Patients</p>
                            </div>
                            <div>
                                <p className="font-bold">10+</p>
                                <p className="text-xs text-gray-500">Experience</p>
                            </div>
                            <div>
                                <p className="font-bold">4.5</p>
                                <p className="text-xs text-gray-500">Rating</p>
                            </div>
                            <div>
                                <p className="font-bold">1,872</p>
                                <p className="text-xs text-gray-500">Reviews</p>
                            </div>
                        </div>

                        <Separator />

                        {/* About me */}
                        <div>
                            <h3 className="font-semibold mb-1">About me</h3>
                            <p className="text-sm text-gray-600">
                                Dr. Jessica Turner, a board-certified Pulmonologist with over 8
                                years of experience in diagnosing and treating respiratory
                                diseases.
                            </p>
                        </div>

                        <Separator />

                        {/* Location */}
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
            </div>
        </div>
    );
}

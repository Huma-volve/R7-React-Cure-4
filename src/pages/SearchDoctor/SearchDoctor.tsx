import { SlidersHorizontal, MapPin } from "lucide-react";
import {
    Star,
    Clock,
    ChevronRight,
    HeartPulse,
    Stethoscope,
    Brain,
    Eye,
    Activity,
    Syringe,
} from "lucide-react";

const categories = [
    { name: "Dentist", icon: <HeartPulse className="w-4 h-4" /> },
    { name: "Cardiologist", icon: <Stethoscope className="w-4 h-4" /> },
    { name: "ENT", icon: <Syringe className="w-4 h-4" /> },
    { name: "Neurologist", icon: <Brain className="w-4 h-4" /> },
    { name: "General Practitioner", icon: <Stethoscope className="w-4 h-4" /> },
    { name: "Ophthalmologist", icon: <Eye className="w-4 h-4" /> },
    { name: "Pulmonologist", icon: <Activity className="w-4 h-4" /> },
];

const doctors = [
    {
        id: 1,
        name: "Robert Johnson",
        title: "Orthopedic | El-Nasr Hospital",
        rating: 4.8,
        time: "9:30am - 8:00pm",
        price: "$350",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Robert Johnson",
        title: "Orthopedic | El-Nasr Hospital",
        rating: 4.8,
        time: "9:30am - 8:00pm",
        price: "$350",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Robert Johnson",
        title: "Orthopedic | El-Nasr Hospital",
        rating: 4.8,
        time: "9:30am - 8:00pm",
        price: "$350",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
];

export default function SearchDoctor() {
    return (
        <div className="container">
            <div className="flex items-center gap-3 w-full scroll-auto">
                {/* Filter Button */}
                <button className="flex items-center justify-between border border-gray-500 rounded-full px-4 py-2 text-gray-400  hover:border-gray-300 transition-all">
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Filter</span>
                    </div>
                    <ChevronRight className="w-4 h-4 ml-2" />
                </button>

                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search doctors"
                    className="flex-1 border border-gray-500 rounded-full px-5 py-2 text-gray-400 bg-transparent focus:outline-none placeholder-gray-400"
                />

                {/* Map Button */}
                <button className="flex items-center gap-2 border border-gray-500 rounded-full px-4 py-2 text-gray-400  hover:border-gray-300 transition-all">
                    <MapPin className="w-4 h-4" />
                    <span>Map</span>
                </button>
            </div>
            <div className="w-full p-6  min-h-screen text-white">
                {/* Categories */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className="flex items-center gap-2 border border-gray-500 text-gray-300 px-4 py-2 rounded-full whitespace-nowrap hover:bg-gray-800 transition"
                        >
                            {cat.icon}
                            <span>{cat.name}</span>
                        </button>
                    ))}
                    <button className="ml-2 border border-gray-500 p-2 rounded-full">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {Array(9)
                        .fill(doctors[0])
                        .map((doctor, i) => (
                            <div
                                key={i}
                                className="bg-white text-black rounded-xl shadow-lg overflow-hidden p-4"
                            >
                                <div className="flex gap-2.5">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        className="w-[97px] h-[88px] object-cover rounded-[10px]"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{doctor.name}</h3>
                                        <p className="text-gray-500 text-sm">{doctor.title}</p>

                                        <div className="flex items-center gap-4 mt-2 text-sm">
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <Star className="w-4 h-4 fill-yellow-500" />
                                                <span>{doctor.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <Clock className="w-4 h-4" />
                                                <span>{doctor.time}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="px-2">


                                    <div className="flex justify-between items-center mt-3 text-sm">
                                        <p className="text-gray-600">
                                            Price<span className="text-gray-400">/hour</span>
                                        </p>
                                        <p className="text-red-500 font-semibold">{doctor.price}</p>
                                    </div>

                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md mt-3">
                                        Book appointment
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}

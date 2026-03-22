import { useState } from "react";
import { SlidersHorizontal, MapPin, Star, Clock, HeartPulse, Stethoscope, Brain, Eye, Activity, Syringe, Search, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { name: "Dentist", icon: HeartPulse },
  { name: "Cardiologist", icon: Stethoscope },
  { name: "ENT", icon: Syringe },
  { name: "Neurologist", icon: Brain },
  { name: "General Practitioner", icon: Stethoscope },
  { name: "Ophthalmologist", icon: Eye },
  { name: "Pulmonologist", icon: Activity },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Robert Johnson",
    specialty: "Orthopedic",
    hospital: "El-Nasr Hospital",
    rating: 4.8,
    reviews: 234,
    time: "9:30am - 8:00pm",
    price: 350,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Dr. Sarah Williams",
    specialty: "Cardiologist",
    hospital: "Cairo Medical Center",
    rating: 4.9,
    reviews: 456,
    time: "10:00am - 6:00pm",
    price: 400,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Dr. Ahmed El-Sayed",
    specialty: "Neurologist",
    hospital: "Helwan Hospital",
    rating: 4.7,
    reviews: 189,
    time: "11:00am - 7:00pm",
    price: 380,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Dr. Amira Hassan",
    specialty: "Dermatologist",
    hospital: "Alexandria Clinic",
    rating: 4.9,
    reviews: 312,
    time: "9:00am - 5:00pm",
    price: 320,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Dr. Karim Mansour",
    specialty: "Orthopedic",
    hospital: "El-Nasr Hospital",
    rating: 4.6,
    reviews: 178,
    time: "8:00am - 4:00pm",
    price: 300,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Dr. Noor Ibrahim",
    specialty: "Pediatrician",
    hospital: "Children Hospital",
    rating: 4.8,
    reviews: 298,
    time: "10:00am - 6:00pm",
    price: 280,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export default function SearchDoctor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minRating, setMinRating] = useState(0);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || doctor.specialty === selectedCategory;
    const matchesRating = doctor.rating >= minRating;

    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Search and Filters */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container py-6">
          <div className="flex flex-col gap-4">
            {/* Search Bar */}
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search doctors, specialty, hospital..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-2"
                />
              </div>
              <Button className="bg-[#1666C0] hover:bg-[#0D4FA3]">
                <MapPin className="w-4 h-4 mr-2" />
                Near Me
              </Button>
            </div>

            {/* Filter Controls */}
            <div className="flex gap-3 flex-wrap">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-50">
                  <SelectValue placeholder="Select Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Specialties</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.name} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={minRating.toString()} onValueChange={(val: string) => setMinRating(parseFloat(val))}>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">All Ratings</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  <SelectItem value="4.8">4.8+ Stars</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Carousel */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            <Button
              variant={!selectedCategory ? "default" : "outline"}
              onClick={() => setSelectedCategory("")}
              className="whitespace-nowrap"
            >
              All
            </Button>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.name}
                  variant={selectedCategory === cat.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="whitespace-nowrap flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="container py-8">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found matching your criteria</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Found <strong>{filteredDoctors.length}</strong> doctors
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Doctor Image */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#05162C] mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-[#6D7379] mb-1">
                      {doctor.specialty}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      {doctor.hospital}
                    </p>

                    {/* Rating and Time */}
                    <div className="flex items-center justify-between mb-3 pb-3 border-b">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{doctor.rating}</span>
                        <span className="text-xs text-gray-500">({doctor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Clock className="w-3 h-3" />
                        {doctor.time}
                      </div>
                    </div>

                    {/* Price and Book Button */}
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Consultation Fee</p>
                        <p className="text-lg font-bold text-[#1666C0]">
                          ${doctor.price}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-[#1666C0] hover:bg-[#0D4FA3]">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

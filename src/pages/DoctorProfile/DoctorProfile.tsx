import { useState } from "react";
import { Heart, MapPin, Award, Users, Star, Clock, DollarSign, MessageCircle, Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DoctorProfile() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>("Mon 15");
  const [selectedTime, setSelectedTime] = useState<string | null>("11:00 AM");

  const doctor = {
    id: 1,
    name: "Dr. Jessica Turner",
    specialty: "Pulmonologist",
    image: "/assets/doctor1.jpg",
    rating: 4.5,
    reviews: 1250,
    experience: 10,
    patients: 2000,
    consultationFee: 350,
    location: "129, El-Nasr Street, Cairo",
    hospital: "Cairo Medical Center",
    about: "Dr. Jessica Turner, a board-certified Pulmonologist with over 8 years of experience in diagnosing and treating respiratory diseases. Specialized in chronic respiratory conditions and allergies.",
    qualifications: [
      "MD - Respiratory Medicine",
      "Fellowship - Chest Diseases",
      "Board Certified - American Board of Internal Medicine",
    ],
    availableDays: ["Fri 12", "Sat 13", "Sun 14", "Mon 15", "Tue 16", "Wed 17"],
    availableTimes: ["9:00 AM", "10:00 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "5:30 PM"],
    services: [
      "Consultation",
      "Diagnosis",
      "Treatment Planning",
      "Follow-up Visits",
    ],
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent doctor! Very professional and caring. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "Ahmed Mohamed",
      rating: 4.5,
      text: "Great experience. Dr. Turner took time to explain everything.",
      date: "1 month ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-[#1666C0] to-[#0D4FA3] text-white p-4">
        <div className="container flex items-center justify-between">
          <Link to="/search-doctor" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ChevronLeft className="w-6 h-6" />
            <span>Back</span>
          </Link>
          <h1 className="text-2xl font-bold">Doctor Profile</h1>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="transition-transform duration-300 hover:scale-110"
          >
            <Heart
              className={`w-6 h-6 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Doctor Card */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp">
              <div className="flex gap-6 mb-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#05162C] mb-2">
                    {doctor.name}
                  </h2>
                  <p className="text-lg text-[#1666C0] mb-3">{doctor.specialty}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">
                        {doctor.rating} ({doctor.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5" />
                      <span>{doctor.experience}+ years</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{doctor.patients.toLocaleString()}+ patients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1666C0]">
                    {doctor.experience}+
                  </p>
                  <p className="text-sm text-gray-600">Years Exp</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1666C0]">
                    {(doctor.patients / 1000).toFixed(1)}k
                  </p>
                  <p className="text-sm text-gray-600">Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1666C0]">
                    {doctor.rating}
                  </p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1666C0]">
                    ${doctor.consultationFee}
                  </p>
                  <p className="text-sm text-gray-600">/hour</p>
                </div>
              </div>

              {/* About */}
              <div>
                <h3 className="text-xl font-semibold text-[#05162C] mb-3">
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold text-[#05162C] mb-4">
                Qualifications
              </h3>
              <div className="space-y-3">
                {doctor.qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#1666C0] mt-1 shrink-0" />
                    <span className="text-gray-700">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-[#05162C] mb-4">
                Services
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {doctor.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg"
                  >
                    <Clock className="w-5 h-5 text-[#1666C0]" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-semibold text-[#05162C] mb-4">
                Patient Reviews
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(testimonial.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div>
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 animate-slideUp" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-semibold text-[#05162C] mb-4">
                Book Appointment
              </h3>

              {/* Fee */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Consultation Fee</p>
                  <p className="text-2xl font-bold text-[#1666C0]">
                    ${doctor.consultationFee}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-[#1666C0] opacity-50" />
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#05162C] mb-3">
                  Select Date
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {doctor.availableDays.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedDate === day
                          ? "bg-[#1666C0] text-white transform scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#05162C] mb-3">
                  Select Time
                </p>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {doctor.availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? "bg-[#1666C0] text-white transform scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1666C0] mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{doctor.hospital}</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {doctor.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Link to="/payment" className="w-full">
                  <Button className="w-full bg-[#1666C0] hover:bg-[#0D4FA3] text-lg py-6 font-semibold transform transition-transform hover:scale-105">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full py-6 font-semibold hover:bg-gray-50 transform transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Doctor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
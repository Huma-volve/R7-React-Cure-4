import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const features = [
    {
      icon: "🏥",
      title: "Wide Range of Specialists",
      description: "Find doctors across multiple specialties",
    },
    {
      icon: "⏰",
      title: "Easy Scheduling",
      description: "Book appointments in just a few clicks",
    },
    {
      icon: "💬",
      title: "Instant Chat",
      description: "Communicate with doctors before your appointment",
    },
    {
      icon: "✅",
      title: "Secure & Reliable",
      description: "Your health data is protected with encryption",
    },
  ];

  const topDoctors = [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      specialty: "Cardiologist",
      rating: 4.8,
      image: "/assets/doctor1.jpg",
      experience: "12 years",
    },
    {
      id: 2,
      name: "Dr. Fatima Ali",
      specialty: "Dermatologist",
      rating: 4.9,
      image: "/assets/doctor1.jpg",
      experience: "10 years",
    },
    {
      id: 3,
      name: "Dr. Mohamed Salim",
      specialty: "Neurologist",
      rating: 4.7,
      image: "/assets/doctor1.jpg",
      experience: "15 years",
    },
    {
      id: 4,
      name: "Dr. Noor Ibrahim",
      specialty: "Orthopedic",
      rating: 4.9,
      image: "/assets/doctor1.jpg",
      experience: "8 years",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-[#1666C0] to-[#0D4FA3] text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect Doctor
              </h1>
              <p className="text-lg mb-8 text-gray-100">
                Book appointments with the best doctors in your area. Get quality healthcare at your convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button className="bg-white text-[#1666C0] hover:bg-gray-100 w-full sm:w-auto">
                    Book Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#1666C0] w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex justify-center">
              <img
                src="/assets/BsHeartPulse.png"
                alt="Healthcare"
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8 text-[#05162C]">
            Search for a Doctor
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name or specialty"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 text-lg"
                />
              </div>
              <Link to="/search-doctor" className="flex-1">
                <Button className="w-full bg-[#1666C0] hover:bg-[#0D4FA3] py-6 text-lg">
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#05162C]">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#05162C]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#05162C]">
              Top Rated Doctors
            </h2>
            <Link
              to="/search-doctor"
              className="text-[#1666C0] hover:underline font-semibold"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#05162C] mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-[#6D7379] text-sm mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">
                    {doctor.experience} experience
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 font-semibold text-sm">
                        {doctor.rating}
                      </span>
                    </span>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-[#1666C0] hover:bg-[#0D4FA3] text-sm">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1666C0] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to book your appointment?</h2>
          <p className="text-lg mb-8 text-gray-100">
            Get access to thousands of experienced doctors and healthcare professionals
          </p>
          <Link to="/booking">
            <Button className="bg-white text-[#1666C0] hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
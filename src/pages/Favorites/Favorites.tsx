import { useState } from "react";
import { Heart, MessageCircle, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Dr. Jessica Turner",
      specialty: "Pulmonologist",
      rating: 4.5,
      reviews: 1250,
      image: "/assets/doctor1.jpg",
      consultationFee: 350,
      location: "129, El-Nasr Street, Cairo",
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      specialty: "Cardiologist",
      rating: 4.8,
      reviews: 890,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      consultationFee: 400,
      location: "Cairo Medical Center",
    },
    {
      id: 3,
      name: "Dr. Fatima Ali",
      specialty: "Dermatologist",
      rating: 4.9,
      reviews: 1520,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      consultationFee: 320,
      location: "Alexandria Clinic",
    },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="mb-8 animate-slideDown">
          <h1 className="text-4xl font-bold text-[#05162C] mb-2">
            Favorite Doctors
          </h1>
          <p className="text-gray-600">
            You have {favorites.length} favorite doctor{favorites.length !== 1 ? "s" : ""}
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center animate-slideUp">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#05162C] mb-2">
              No Favorites Yet
            </h2>
            <p className="text-gray-600 mb-6">
              Start adding your favorite doctors to quick access them later
            </p>
            <Link to="/search-doctor">
              <Button className="bg-[#1666C0] hover:bg-[#0D4FA3]">
                Browse Doctors
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((doctor, index) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with Heart */}
                <div className="relative h-48 bg-linear-to-r from-[#1666C0] to-[#0D4FA3] flex items-center justify-center">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeFavorite(doctor.id)}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                  >
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#05162C] mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-[#1666C0] font-semibold mb-3">
                    {doctor.specialty}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">
                      {doctor.rating}
                    </span>
                    <span className="text-xs text-gray-600">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {doctor.location}
                    </p>
                    <p className="text-lg font-bold text-[#1666C0]">
                      ${doctor.consultationFee}
                      <span className="text-sm text-gray-600 font-normal">
                        /hour
                      </span>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Link to={`/doctor/${doctor.id}`} className="w-full">
                      <Button className="w-full bg-[#1666C0] hover:bg-[#0D4FA3] font-semibold transform transition-transform hover:scale-105">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full font-semibold transform transition-transform hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
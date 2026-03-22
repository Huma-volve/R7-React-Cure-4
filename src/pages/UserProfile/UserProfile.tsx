import { useState } from "react";
import { Camera, Mail, Phone, MapPin, Edit2, Save, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Seif",
    lastName: "Mohamed",
    email: "seif@example.com",
    phone: "+20 100 123 4567",
    location: "129, El-Nasr Street, Cairo",
    bio: "Healthcare enthusiast seeking the best medical professionals",
    dateOfBirth: "1995-03-15",
    gender: "Male",
    bloodType: "O+",
  });

  const [profileImage, setProfileImage] = useState("/assets/Ellipse 1537 (1).png");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // هنا يمكن إرسال البيانات للـ API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header Card */}
            <div className="bg-white rounded-xl shadow-md p-8 animate-slideUp">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="relative group">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#1666C0]"
                  />
                  {isEditing && (
                    <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <Camera className="w-6 h-6 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-[#05162C] mb-2">
                    {formData.firstName} {formData.lastName}
                  </h1>
                  <p className="text-gray-600 mb-4">Patient Profile</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{formData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{formData.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-[#1666C0] text-white p-3 rounded-full hover:bg-[#0D4FA3] transition-all duration-200 hover:scale-110 transform"
                >
                  {isEditing ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Edit2 className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Bio */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700">{formData.bio}</p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-md p-8 animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold text-[#05162C] mb-6">
                Personal Information
              </h2>

              {isEditing ? (
                <div className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-[#05162C] mb-2">
                      Location
                    </label>
                    <Input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  {/* Health Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        Date of Birth
                      </label>
                      <Input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={(e) =>
                          setFormData({ ...formData, gender: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-lg"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#05162C] mb-2">
                        Blood Type
                      </label>
                      <select
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={(e) =>
                          setFormData({ ...formData, bloodType: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-lg"
                      >
                        <option>O+</option>
                        <option>O-</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                      </select>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-semibold text-[#05162C] mb-2">
                      Bio
                    </label>
                    <Textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  {/* Save Button */}
                  <div className="flex gap-3">
                    <Button
                      onClick={handleSave}
                      className="bg-[#1666C0] hover:bg-[#0D4FA3] text-white font-semibold py-2 px-6"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      onClick={() => setIsEditing(false)}
                      variant="outline"
                      className="font-semibold py-2 px-6"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">First Name</p>
                      <p className="font-semibold text-[#05162C]">
                        {formData.firstName}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Last Name</p>
                      <p className="font-semibold text-[#05162C]">
                        {formData.lastName}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Gender</p>
                      <p className="font-semibold text-[#05162C]">
                        {formData.gender}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Blood Type</p>
                      <p className="font-semibold text-[#05162C]">
                        {formData.bloodType}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
                      <p className="text-xs text-gray-600 mb-1">
                        Date of Birth
                      </p>
                      <p className="font-semibold text-[#05162C]">
                        {formData.dateOfBirth}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold text-[#05162C] mb-6">
                Health Stats
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Appointments</p>
                  <p className="text-3xl font-bold text-[#1666C0]">12</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-3xl font-bold text-green-600">10</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-600">Upcoming</p>
                  <p className="text-3xl font-bold text-yellow-600">2</p>
                </div>
              </div>
            </div>

            {/* Favorite Doctors */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-bold text-[#05162C] mb-4">
                Favorite Doctors
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        i % 2 === 0 ? "women" : "men"
                      }/${i}.jpg`}
                      alt="Doctor"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-[#05162C]">
                        Dr. Name {i}
                      </p>
                      <p className="text-xs text-gray-600">Specialist</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
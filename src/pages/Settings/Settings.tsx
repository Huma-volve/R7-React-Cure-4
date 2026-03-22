import { useState } from "react";
import { Bell, Lock, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    appointmentReminders: true,
    newsletter: false,
    twoFactorAuth: true,
    privateProfile: false,
    activityStatus: true,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-4xl font-bold text-[#05162C] mb-8 animate-slideDown">Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Settings Menu */}
          <div className="lg:col-span-2 space-y-6">
            {/* Notification Settings */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-[#1666C0]" />
                <h2 className="text-2xl font-bold text-[#05162C]">Notifications</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    key: "emailNotifications" as const,
                    label: "Email Notifications",
                    description: "Receive updates via email",
                  },
                  {
                    key: "smsNotifications" as const,
                    label: "SMS Notifications",
                    description: "Receive updates via SMS",
                  },
                  {
                    key: "pushNotifications" as const,
                    label: "Push Notifications",
                    description: "Receive push notifications on your device",
                  },
                  {
                    key: "appointmentReminders" as const,
                    label: "Appointment Reminders",
                    description: "Get reminded about upcoming appointments",
                  },
                  {
                    key: "newsletter" as const,
                    label: "Newsletter",
                    description: "Receive weekly health tips and updates",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-[#05162C]">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <button
                      onClick={() => toggleSetting(item.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings[item.key]
                          ? "bg-[#1666C0]"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings[item.key] ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-[#1666C0]" />
                <h2 className="text-2xl font-bold text-[#05162C]">Privacy & Security</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    key: "twoFactorAuth" as const,
                    label: "Two-Factor Authentication",
                    description: "Add an extra layer of security to your account",
                  },
                  {
                    key: "privateProfile" as const,
                    label: "Private Profile",
                    description: "Only allow approved doctors to view your profile",
                  },
                  {
                    key: "activityStatus" as const,
                    label: "Show Activity Status",
                    description: "Let others see when you're online",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-[#05162C]">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <button
                      onClick={() => toggleSetting(item.key)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings[item.key]
                          ? "bg-[#1666C0]"
                          : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings[item.key] ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}

                <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">
                  <Lock className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
              </div>
            </div>

            {/* Account */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-[#1666C0]" />
                <h2 className="text-2xl font-bold text-[#05162C]">Account</h2>
              </div>

              <div className="space-y-3">
                <button className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group">
                  <span className="font-semibold text-[#05162C]">Download My Data</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
                <button className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group">
                  <span className="font-semibold text-[#05162C]">Delete Account</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Help & Support */}
          <div className="space-y-6">
            {/* Help Card */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-[#1666C0]" />
                <h3 className="text-xl font-bold text-[#05162C]">Help & Support</h3>
              </div>

              <div className="space-y-3">
                <Link to="/contact">
                  <Button variant="outline" className="w-full justify-start font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <button className="w-full p-3 border rounded-lg hover:bg-gray-50 transition-colors text-left font-semibold text-[#05162C]">
                  FAQ
                </button>
                <button className="w-full p-3 border rounded-lg hover:bg-gray-50 transition-colors text-left font-semibold text-[#05162C]">
                  Report a Problem
                </button>
              </div>
            </div>

            {/* About Card */}
            <div className="bg-white rounded-xl shadow-md p-6 animate-slideUp" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-xl font-bold text-[#05162C] mb-4">About</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <Link to="/privacy">
                  <p className="hover:text-[#1666C0] transition-colors cursor-pointer font-semibold">
                    Privacy Policy
                  </p>
                </Link>
                <button className="hover:text-[#1666C0] transition-colors font-semibold">
                  Terms of Service
                </button>
                <p className="pt-4 border-t">
                  Version: <span className="font-semibold">1.0.0</span>
                </p>
              </div>
            </div>

            {/* Logout */}
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 transform transition-transform hover:scale-105 animate-slideUp" style={{ animationDelay: "0.5s" }}>
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
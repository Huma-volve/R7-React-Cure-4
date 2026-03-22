import { useState } from "react";
import { Plus, CreditCard, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import doctor1 from "/assets/doctor1.jpg";
import locIcon from "/assets/Location-icon.png";
import dateIcon from "/assets/dateIcon.png";
import visaIcon from "/assets/visa-icon.png";
import paypalIcon from "/assets/paypal-icon.png";
import applePay from "/assets/apple-pay.png";

export default function PaymentPage() {
  const [method, setMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // محاكاة معالجة الدفع
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    alert("Payment successful! Your appointment has been booked.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <h1 className="text-4xl font-bold text-[#05162C] mb-8 animate-slideDown">
          Complete Your Payment
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Appointment Summary */}
            <Card className="rounded-2xl shadow-md animate-slideUp">
              <CardHeader>
                <CardTitle>Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={doctor1} alt="doctor" />
                      <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#05162C] text-lg">
                        Dr. Jessica Turner
                      </p>
                      <p className="text-sm text-gray-600">Pulmonologist</p>
                      <div className="flex items-center mt-1">
                        <img src={locIcon} alt="location" className="w-4 h-4" />
                        <p className="text-xs text-gray-600 ml-1">
                          129, El-Nasr Street, Cairo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img src={dateIcon} alt="date" className="w-4 h-4" />
                      <p className="text-sm font-semibold text-[#05162C]">
                        Monday, July 17 - 11:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            <Card className="rounded-2xl shadow-md animate-slideUp" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Select Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={method} onValueChange={setMethod}>
                  {/* Credit Card */}
                  <Label
                    htmlFor="card"
                    onClick={() => setMethod("card")}
                    className={`flex items-center justify-between bg-gray-50 rounded-lg p-4 cursor-pointer mb-3 transition-all ${
                      method === "card"
                        ? "ring-2 ring-[#1666C0] bg-blue-50"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="card" id="card" />
                      <span className="font-semibold text-[#05162C]">
                        Credit Card
                      </span>
                    </div>
                    <img src={visaIcon} alt="visa" className="w-8 h-8" />
                  </Label>

                  {/* PayPal */}
                  <Label
                    htmlFor="paypal"
                    onClick={() => setMethod("paypal")}
                    className={`flex items-center justify-between bg-gray-50 rounded-lg p-4 cursor-pointer mb-3 transition-all ${
                      method === "paypal"
                        ? "ring-2 ring-[#1666C0] bg-blue-50"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <span className="font-semibold text-[#05162C]">
                        PayPal
                      </span>
                    </div>
                    <img src={paypalIcon} alt="paypal" className="w-8 h-8" />
                  </Label>

                  {/* Apple Pay */}
                  <Label
                    htmlFor="apple"
                    onClick={() => setMethod("apple")}
                    className={`flex items-center justify-between bg-gray-50 rounded-lg p-4 cursor-pointer transition-all ${
                      method === "apple"
                        ? "ring-2 ring-[#1666C0] bg-blue-50"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="apple" id="apple" />
                      <span className="font-semibold text-[#05162C]">
                        Apple Pay
                      </span>
                    </div>
                    <img src={applePay} alt="apple" className="w-8 h-8" />
                  </Label>
                </RadioGroup>

                {/* Add Card Option */}
                <Button
                  variant="outline"
                  className="w-full border-dashed border-[#1666C0] text-[#1666C0] mt-4 font-semibold hover:bg-blue-50 transform transition-transform hover:scale-105"
                >
                  <Plus size={16} className="mr-2" />
                  Add New Payment Method
                </Button>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <Card className="rounded-2xl shadow-md animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Consultation Fee</span>
                  <span className="font-semibold text-[#05162C]">$350</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-semibold text-[#05162C]">$10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Taxes</span>
                  <span className="font-semibold text-[#05162C]">$28</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg font-bold text-[#05162C]">Total</span>
                  <span className="text-2xl font-bold text-[#1666C0]">$388</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-6">
            <Card className="rounded-2xl shadow-lg sticky top-24 animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Doctor</p>
                  <p className="font-semibold text-[#05162C]">
                    Dr. Jessica Turner
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Specialty</p>
                  <p className="font-semibold text-[#05162C]">Pulmonologist</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-semibold text-[#05162C]">
                    Mon, July 17 - 11:00 AM
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-[#05162C]">1 Hour</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-2xl font-bold text-[#1666C0] mb-2">$388</p>
                  <p className="text-xs text-gray-600">Total Amount</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-[#1666C0] hover:bg-[#0D4FA3] text-white font-bold py-6 transform transition-transform hover:scale-105 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Complete Payment
                    </>
                  )}
                </Button>
                <Button variant="outline" className="w-full font-semibold">
                  Cancel
                </Button>
              </CardFooter>
            </Card>

            {/* Security Info */}
            <Card className="rounded-2xl shadow-md animate-slideUp" style={{ animationDelay: "0.4s" }}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-[#1666C0] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#05162C] mb-1">
                      Secure Payment
                    </p>
                    <p className="text-xs text-gray-600">
                      Your payment information is encrypted and secure. We use
                      SSL technology to protect your data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
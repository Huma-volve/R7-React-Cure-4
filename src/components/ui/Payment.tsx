import  { useState } from "react";
import {  Plus } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";  
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import doctor1 from "/assets/doctor1.jpg";
import locIcon from "/assets/Location-icon.png"; 
import dateIcon from "/assets/dateIcon.png"
import visaIcon from "/assets/visa-icon.png"
import paypalIcon from "/assets/paypal-icon.png"
import applePay from "/assets/apple-pay.png"


export default function Payment() {
    const [method, setMethod] = useState("");

    return (
        <Card className="max-w-100 mx-auto mt-10 rounded-2xl shadow-md">
            <CardHeader>
                <div className="flex items-center justify-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={doctor1} alt="doctor" />
                        <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg">Dr. Jessica Turner</CardTitle>
                        <p className="text-sm text-muted-foreground">Pulmonologist</p>
                        <div className="flex">
                        <img src={locIcon} alt="location-icon" />
                        <p className="text-sm text-muted-foreground">129, El-Nasr Street, Cairo</p>
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                {/* Appointment info */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                    <img src={dateIcon}/>
                    <p className="text-sm text-muted-foreground">Friday, July 17 - 4:00pm</p>
                    </div>
                    <Button variant="link" className="text-blue-500 p-0 h-auto hover:cursor-pointer">
                        Reschedule
                    </Button>
                </div>

                {/* Payment Methods */}
                <Label className="font-semibold mt-8 mb-3">Payment Method</Label>

                <RadioGroup value={method} onValueChange={setMethod} >
                    {/* Credit Card */}
                    <Label
                        htmlFor="card"
                        onClick={() => setMethod("card")}
                        className={`flex items-center justify-between bg-gray-50 rounded-lg p-1.5 cursor-pointer ${method === "card" ? "text-green-600 bg-green-50" : "border-gray-200"
                            }`}
                    >

                        
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="card" id="card" />
                            <span>Credit Card</span>
                        </div>
                        <img src={visaIcon}/>
                    </Label>

                    {/* PayPal */}
                    <Label
                        htmlFor="paypal"
                        onClick={() => setMethod("paypal")}
                        className={`flex items-center justify-between bg-gray-50 rounded-lg p-1 cursor-pointer ${method === "paypal" ? "text-green-600 bg-green-50" : "border-gray-200"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <span>PayPal</span>
                        </div>         
                        <img src={paypalIcon}/>          
                        </Label>

                    {/* Apple Pay */}
                    <Label
                        htmlFor="apple"
                        onClick={() => setMethod("apple")}
                        className={`flex items-center justify-between bg-gray-50 rounded-lg py-4 cursor-pointer ${method === "apple" ? "text-green-600 bg-green-50" : "border-gray-200"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="apple" id="apple" />
                            <span>Apple Pay</span>
                        </div>
                        <img src={applePay}/>
                    </Label>
                </RadioGroup>

                {/* Add new card */}
                <Button
                    variant="outline"
                    className="w-full border-dashed border-blue-500 mt-4 text-blue-500 flex items-center justify-center gap-2 hover:bg-gray-50"
                >
                    <Plus size={16}  /> Add new card
                </Button>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
                <div className="flex justify-between w-full">
                    <p className="text-sm text-muted-foreground"><span className=" text-2xl text-black">Price</span>\hour</p>
                    <p className="text-red-500 font-semibold text-lg">350$</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-b-sm">
                    Pay
                </Button>
            </CardFooter>
        </Card>
    );
}

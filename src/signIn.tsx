import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupButton,
//   InputGroupInput,
// } from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function SignIn() {
    const [selectedCountry, setSelectedCountry] = useState({
        name: "Egypt",
        code: "+20",
        flag: "/assets/flags/egypt.png",
        placeholder: "0100 123 4567",
    });

    const countries = [
        {
            name: "Egypt",
            code: "+20",
            flag: "/assets/egyptFlag.png",
            placeholder: "0100 123 4567",
        },
        {
            name: "Italy",
            code: "+39",
            flag: "/assets/italiaFlag.png",
            placeholder: "333 123 4567",
        },
        {
            name: "Spain",
            code: "+34",
            flag: "/assets/spanishFlag.png",
            placeholder: "612 345 678",
        },
    ];

    return (
        <div className="h-[100vh] w-[100%] relative flex justify-center items-center flex-col">
            <div className="flex items-center justify-center w-[50%]">
                {/* White box */}
                <div className="flex flex-col items-center w-full">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-[#05162C] mb-2">
                        Sign in
                    </h2>
                    <p className="text-sm text-[#6D7379] mb-6">
                        Please enter your phone number
                    </p>

                    {/* Input group */}
                    <div className="w-f flex items-center border rounded-lg overflow-hidden mb-5 border-[#D8DEE5]">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 border-r border-[#D8DEE5]">
                                    <img
                                        src={selectedCountry.flag}
                                        alt={selectedCountry.name}
                                        className="w-5 h-3 object-cover rounded-sm"
                                    />
                                    <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="start"
                                className="rounded-lg bg-white"
                            >
                                {countries.map((country) => (
                                    <DropdownMenuItem
                                        key={country.name}
                                        onClick={() =>
                                            setSelectedCountry(country)
                                        }
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-5 h-3 object-cover rounded-sm"
                                        />
                                        <span>{country.name}</span>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Input
                            type="number"
                            inputMode="numeric"
                            dir="ltr"
                            placeholder={selectedCountry.placeholder}
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 w-full"
                        />
                    </div>
                    {/* Sign in button */}
                    <Button className="w-full bg-[#1666C0] hover:bg-[#1257A5] text-white rounded-lg h-10 mb-4">
                        Sign in
                    </Button>
                    {/* Divider */}
                    <div className="flex items-center w-full my-3">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-gray-500 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    {/* Google button */}
                    <Button
                        variant="outline"
                        className="w-full rounded-lg flex items-center justify-center gap-2 text-gray-700"
                    >
                        <img
                            src="https://www.svgrepo.com/show/355037/google.svg"
                            alt="Google"
                            className="w-4 h-4"
                        />
                        Sign in with Google
                    </Button>

                    {/* Footer */}
                    <p className="text-sm text-gray-500 mt-5">
                        Don’t have an account?{" "}
                        <a
                            href="#"
                            className="text-[#1666C0] font-medium hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
            <img
                src="/assets/logoNav.png"
                alt=""
                className="absolute top-10 left-10 w-[32px] h-[32px]"
            />
            <img
                src="/assets/Vector 5.png"
                alt=""
                className="w-[37%] h-[100%] absolute right-0"
            />
            <img
                src="/assets/Vector 4.png"
                alt=""
                className="w-[39%] h-[100%] absolute right-0"
            />
        </div>
    );
}

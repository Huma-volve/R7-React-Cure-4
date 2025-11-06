import { ChevronDownIcon } from "lucide-react";
import Otp from "./otp";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { signIn } from "@/redux/authSlice";
export default function SignIn() {
  let [testotp, setTestotp] = useState("login");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Egypt",
    code: "+20",
    flag: "/assets/egyptFlag.png",
    placeholder: "+20 100 000 0000",
  });

  const countries = [
    {
      name: "Egypt",
      code: "+20",
      flag: "/assets/egyptFlag.png",
      placeholder: "+20 100 000 0000",
    },
    {
      name: "Italy",
      code: "+39",
      flag: "/assets/italiaFlag.png",
      placeholder: "+39 333 123 4567",
    },
    {
      name: "Spain",
      code: "+34",
      flag: "/assets/spanishFlag.png",
      placeholder: "+34 612 345 678",
    },
  ];
  let [phoneNumber, setPhoneNumber] = useState("");
  let dispatch = useDispatch<AppDispatch>();
  let { loading } = useSelector((state: RootState) => state.auth);
  const handleSignIn = async () => {
    if (phoneNumber === "") {
      alert("Please enter your phone number");
      return;
    }
    try {
      // نرسل البيانات عبر signIn thunk
      await dispatch(signIn(phoneNumber)).unwrap();
      // لو كل حاجة تمام، ننتقل للـ OTP
      setTestotp("otp");
    } catch (err: any) {
      // لو حصل خطاء من السيرفر، نعرض الرسالة
      alert(err);
    }
  };

  return (
    <div className="h-[100vh] w-full relative flex justify-center items-center flex-col">
      <div className="flex items-center justify-center sm:w-[300px] md:w-[360px] lg:w-[420px] min-w-[250px]">
        {/* form */}
        {testotp !== "login" ? (
          <Otp
            setTestotp={setTestotp}
            sign={"login"}
            numberUser={phoneNumber}
          />
        ) : (
          <form className="flex flex-col items-center sm:w-[258px] md:w-[320px] lg:w-[360px] min-w-[210px] ">
            {/* Title */}
            <h2 className="text-[32px] font-semibold text-[#05162C] mb-2">
              Sign in
            </h2>
            <p className="text-[12px] text-[#6D7379] mb-6">
              Please enter your phone number
            </p>

            {/* Input group */}
            <div className="w-full flex items-center border rounded-lg overflow-hidden mb-5 border-[#D8DEE5]">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 border-r border-[#D8DEE5]">
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      className="w-6 h-6 object-cover rounded-full"
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
                      onClick={() => setSelectedCountry(country)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-6 object-cover rounded-full"
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
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 w-full"
              />
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="w-full bg-[#1666C0] hover:bg-[#1257A5] text-white rounded-lg h-10 mb-4 flex justify-center items-center"
              onClick={handleSignIn}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="mr-3 w-5 h-5 animate-spin text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Sign in"
              )}
            </button>

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
          </form>
        )}
      </div>
      {/* Background & Logo */}
      <img
        src="/assets/logoNav.png"
        alt="Logo"
        className="absolute top-10 left-10 w-[32px] h-[32px]"
      />
      <img
        src="/assets/Vector 5.png"
        alt="Vector Layer 1"
        className="hidden md:block w-[37%] h-full absolute right-0"
      />
      <img
        src="/assets/Vector 4.png"
        alt="Vector Layer 2"
        className="hidden md:block w-[39%] h-full absolute right-0"
      />
    </div>
  );
}

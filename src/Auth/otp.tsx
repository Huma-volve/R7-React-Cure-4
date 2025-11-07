import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
//import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { verfyOtp } from "@/redux/authSlice";
import { useNavigate } from "react-router-dom";
export default function Otp({ setTestotp, sign, numberUser }: any) {
  let dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  let { loading } = useSelector((state: RootState) => state.auth);
  // الحالة الأساسية للكود
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(55);
  const [error, setError] = useState(false);

  // عدّاد التايمر
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // دالة لتغيير رقم معين في الـ OTP
  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(false);
    }
  };

  // لما يضغط verify
  const handleVerify = async () => {
    try {
      const result = await dispatch(
        verfyOtp({
          phoneNumber: numberUser,
          otp: otp.join(""),
          api: sign,
        })
      );
      if (verfyOtp.fulfilled.match(result)) {
        // ✅ لو الكود صحيح
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      alert(error);
    }
  };

  // لما يضغط Resend
  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimer(55);
    setError(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-sm w-full text-center space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Code Verification
        </h1>

        <p className="text-gray-600 text-sm">
          Code has been sent to your phone number
          <br />
          <button
            className="text-blue-600 underline text-sm "
            onClick={() => setTestotp(sign)}
          >
            Check your phone number
          </button>
        </p>

        {/* خانات الكود */}
        <div className="flex justify-center gap-3 mt-4">
          {otp.map((digit, index) => (
            <Input
              key={index}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              className={`w-12 h-12 text-center text-xl font-medium border rounded-md focus-visible:ring-2 ${
                error ? "border-red-500" : "border-gray-300"
              }`}
            />
          ))}
        </div>

        {/* حالة الخطأ */}
        {error && <p className="text-red-500 text-sm mt-2">Wrong code</p>}

        {/* العد التنازلي */}
        {timer > 0 ? (
          <p className="text-gray-500 text-sm mt-2">
            Resend code in <span className="text-blue-600">{timer}s</span>
          </p>
        ) : (
          <div className="text-sm text-gray-600 mt-2">
            <button
              onClick={handleResend}
              className="text-blue-600 font-medium hover:underline"
            >
              Resend
            </button>{" "}
            or{" "}
            <button
              className="text-blue-600 font-medium hover:underline"
              onClick={() => setTestotp(sign)}
            >
              Enter another phone number
            </button>
          </div>
        )}

        {/* زر التحقق */}
        <button
          type="submit"
          className="w-full bg-[#1666C0] hover:bg-[#1257A5] text-white rounded-lg h-10 mb-4 flex justify-center items-center"
          onClick={handleVerify}
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
            "verify"
          )}
        </button>
      </div>
    </div>
  );
}

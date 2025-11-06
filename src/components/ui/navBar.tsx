import { Input } from "@/components/ui/input";
import {
  Bell,
  ChevronRight,
  Clock,
  Heart,
  LockKeyhole,
  LogIn,
  LogOut,
  MapPinned,
  Settings,
  UserRound,
  WalletCards,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleLogout() {
    axios
      .post(
        "https://cure-doctor-booking.runasp.net/api/Identity/Accounts/logout",
        {
          refreshToken: localStorage.getItem("refreshToken"),
        }
      )
      .then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.error(error);
        const message =
          error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again.";
        alert(message);
      });
  }

  return (
    <nav className="pt-[52px] pb-[24px]">
      <div className="flex container justify-between items-center">
        {/* ✅ Logo */}
        <div className="navaLogo">
          <img
            src="./assets/logoNav.png"
            alt="Logo"
            className="w-[32px] h-[32px]"
          />
        </div>

        {/* ✅ Search */}
        <Input
          type="text"
          placeholder="Search"
          className="w-[50%] hidden md:block"
        />

        {/* ✅ Menu & Profile */}
        <div className="flex gap-2">
          <Link
            to="/"
            className="bg-[#F5F6F7] font-normal  rounded-md text-[14px] p-1 md:p-2 "
            style={{ display: !isOpenMenu ? "none" : "block" }}
          >
            Home
          </Link>
          <Link
            to="/"
            className="bg-[#F5F6F7] font-normal text-[14px] p-1 md:p-2  rounded-md"
            style={{ display: !isOpenMenu ? "none" : "block" }}
          >
            Bookings
          </Link>
          <Link
            to="/"
            className="bg-[#F5F6F7]  font-normal text-[14px] p-1 md:p-2  rounded-md"
            style={{ display: !isOpenMenu ? "none" : "block" }}
          >
            chat
          </Link>

          <div className="flex justify-center items-center">
            {isOpenMenu ? (
              <X onClick={() => setIsOpenMenu(!isOpenMenu)} />
            ) : (
              <img
                src="./assets/Component 15.png"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              />
            )}
          </div>

          {/* ✅ Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[40px] h-[40px] bg-[#F5F6F7] flex justify-center items-center rounded-lg">
              <Bell />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[314px] overflow-auto">
              <DropdownMenuLabel className="bg-[#F5F6F7] text-center text-[20px] font-normal">
                Your Notification
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Clock style={{ width: "40px", height: "40px" }} />
                <div>
                  <div className="font-normal text-[16px]">
                    Upcoming Appointment
                  </div>
                  <p className="text-[#99A2AB]">
                    Reminder: You have an appointment with...
                  </p>
                </div>
                <span className="text-[#99A2AB] absolute top-0 right-0">
                  1 min
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* ✅ User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[40px] h-[40px] bg-[#F5F6F7] flex justify-center items-center rounded-lg">
              <UserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F5F6F7] w-[300px]">
              <DropdownMenuLabel className="text-center text-[20px] font-normal flex gap-2 relative">
                <img src="./assets/Ellipse 1537 (1).png" alt="" />
                <div>
                  <p className="font-normal text-[20px]">Seif Mohamed</p>
                  <p className="text-[#6D7379] flex text-[12px] items-center">
                    <MapPinned />
                    129, El-Nasr Street, Cairo
                  </p>
                </div>
                <Settings className="absolute top-1 right-1 text-[#145DB8]" />
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <WalletCards className="w-5 h-5" color="#05162C" />
                  <Link to="/">Payment Method</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>

              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" color="#05162C" />
                  <Link to="/">Favourite</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>

              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5" color="#05162C" />
                  <Link to="/">Settings</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>

              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="w-5 h-5" color="#05162C" />
                  <Link to="/">Privacy & Security</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>

              {/* ✅ Logout with confirmation dialog */}
              {localStorage.getItem("accessToken") ? (
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onSelect={(e) => e.preventDefault()}
                >
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="flex items-center gap-2 text-[#FC4B4E]">
                        <LogOut className="w-5 h-5 " color="#FC4B4E" />
                        Logout
                      </button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to log out?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          You will be logged out of your account and redirected
                          to the home page.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleLogout}
                          className="text-[#FC4B4E]"
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuItem>
              ) : (
                <div className="flex items-center gap-2">
                  <LogIn className="w-5 h-5" color="#05162C" />
                  <Link to="/">Sign Up</Link>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

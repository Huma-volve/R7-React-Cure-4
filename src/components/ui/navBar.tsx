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

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/authSlice";
import type { AppDispatch, RootState } from "@/redux/store";
export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  function handleLogout() {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        console.log("✅ Logged out successfully");
      })
      .catch((err) => {
        alert(err);
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
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
          />
        </div>

        {/* ✅ Search */}
        <Input
          type="text"
          placeholder="Search"
          className="w-[50%] hidden md:block"
        />

        {/* ✅ Menu & Profile */}
        <div className="flex gap-2 items-center">
          {isOpenMenu && (
            <>
              <Link
                to="/"
                className="bg-[#F5F6F7] font-normal text-[12px] p-1 md:p-2 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="bg-[#F5F6F7] text-[12px] font-normal p-1 md:p-2 rounded-md"
              >
                Bookings
              </Link>
              <Link
                to="/chat"
                className="bg-[#F5F6F7] font-normal text-[12px] p-1 md:p-2 rounded-md"
              >
                Chat
              </Link>
            </>
          )}

          {/* ✅ Menu Toggle */}
          <div className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#F5F6F7] flex justify-center items-center rounded-lg">
            {isOpenMenu ? (
              <X
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="./assets/Component 15.png"
                alt=""
                onClick={() => setIsOpenMenu(true)}
                className="cursor-pointer"
              />
            )}
          </div>
          {/* ✅ Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#F5F6F7] flex justify-center items-center rounded-lg">
              <Bell className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[314px] overflow-auto">
              <DropdownMenuLabel className="bg-[#F5F6F7] text-center text-[20px] font-normal">
                Your Notifications
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Clock className="w-5 h-5 mr-2 " />
                <div>
                  <div className="font-normal text-[16px]">
                    Upcoming Appointment
                  </div>
                  <p className="text-[#99A2AB]">
                    Reminder: You have an appointment with...
                  </p>
                </div>
                <span className="text-[#99A2AB] ml-auto text-sm">1 min</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#F5F6F7] flex justify-center items-center rounded-lg">
              {localStorage.getItem("accessToken") ? (
                <img
                  src="./assets/Ellipse 1537 (1).png"
                  alt=""
                  className=" bg-[#F5F6F7] flex justify-center items-center rounded-lg"
                />
              ) : (
                <UserRound className="cursor-pointer" />
              )}
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
                <Settings className="absolute top-1 right-1 text-[#145DB8]  cursor-pointer" />
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              {/* ✅ Menu Items */}
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
                  <Settings className="w-5 h-5 " color="#05162C" />
                  <Link to="/">Settings</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>

              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="w-5 h-5" color="#05162C" />
                  <Link to="/privacy">Privacy & Security</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>

              {/* ✅ Logout / SignUp */}
              {localStorage.getItem("accessToken") ? (
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onSelect={(e) => e.preventDefault()}
                >
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <button className="flex items-center gap-2 text-[rgb(252,75,78)] cursor-pointer">
                        <LogOut className="w-5 h-5" color="#FC4B4E" />
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
                          className="text-[#FC4B4E] bg-white border border-[#FC4B4E] hover:bg-[#FC4B4E] hover:text-white"
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
                            "continue"
                          )}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  <LogIn className="w-5 h-5" color="#05162C" />
                  <Link to="/signup">Sign Up</Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

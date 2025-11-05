import { Input } from "@/components/ui/input";
import {
  Bell,
  BlocksIcon,
  ChevronRight,
  Clock,
  Heart,
  MapPinned,
  MenuIcon,
  Settings,
  Settings2Icon,
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

export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <nav className="pt-[52px] pb-[24px]">
      <div className="flex container justify-between item-center">
        <div className="navaLogo">
          <img
            src="./assets/logoNav.png"
            alt=""
            className="w-[32px] h-[32px]"
          />
        </div>
        <Input type="text" placeholder="Search" className="w-[50%]" />
        <div className="flex gap-2">
          <Link
            to="/"
            className="bg-[#F5F6F7]  text-[14px] font-normal pt-[6px] pb-[6px] pl-[16px] pr-[16px] rounded-md ease-linear duration-300"
            style={{ opacity: isOpenMenu ? "0" : "1" }}
          >
            Home
          </Link>
          <Link
            to="/booking"
            className="bg-[#F5F6F7]  text-[14px] font-normal pt-[6px] pb-[6px] pl-[16px] pr-[16px] rounded-md ease-linear duration-300"
            style={{ opacity: isOpenMenu ? "0" : "1" }}
          >
            Bookings
          </Link>
          <div className="flex justify-center items-center">
            {isOpenMenu ? (
              <MenuIcon
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              />
            ) : (
              <X onClick={() => setIsOpenMenu(!isOpenMenu)} />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Bell />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[314px]  overflow-auto">
              <DropdownMenuLabel className="bg-[#F5F6F7] text-center text-[20px] font-normal">
                Your Notification
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Clock className="w-8 h-8" />
                <div>
                  <div className="font-normal text-[16px]">
                    Upcoming Appointment
                  </div>
                  <p className="text-[#99A2AB]">
                    Reminder: You have an appointment
                    with...
                  </p>
                </div>
                <span className="text-[#99A2AB] absolute top-0 right-0">
                  1 min
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <UserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#F5F6F7]">
              <DropdownMenuLabel className=" text-center text-[20px] font-normal flex gap-2">
                <img
                  src="./assets/Ellipse 1537 (1).png"
                  alt=""
                />
                <div>
                  <p className="font-normal text-[20px]">
                    Seif Mohamed
                  </p>
                  <p className="text-[#6D7379] flex text-[12px] items-center  ">
                    <MapPinned />
                    129,El-Nasr Street, Cairo
                  </p>
                </div>
                <Settings className="absolute top-1 right-1 text-[#145DB8]" />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <WalletCards className="w-8 h-8" />
                  <Link to="/">Payment Method</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Heart className="w-8 h-8" />
                  <Link to="/">favourite</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Settings2Icon className="w-8 h-8" />
                  <Link to="/">Setting</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BlocksIcon className="w-8 h-8" />
                  <Link to="/">privic & security</Link>
                </div>
                <ChevronRight />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="text-[#145DB8]">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

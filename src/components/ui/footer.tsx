import { Link } from "react-router-dom";

import { PhoneCall, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05162C] text-[#FFFFFF] pt-[80px] pb-[80px]">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:mb-3 max-lg:mb-10 max-lg:justify-center max-lg:items-center flex flex-none flex-col gap-4 text-left ">
            <div className="flex items-center gap-4">
              <img
                src="./assets/BsHeartPulse.png"
                className="w-[50px] h-[50px]"
                alt=""
              />
              <span className="font-normal text-[32px]">Cure</span>
            </div>
            <p className=" font-normal text-[20px] w-[250px]">
              Cure helps you find trusted doctors, book appointments, and manage
              your health—quickly and easily.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://wa.me/201234567890" // ضع رقمك هنا
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/whatsAppIcon.png"
                  alt="WhatsApp"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>

              <a
                href="https://facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/facebookIcon.png"
                  alt="Facebook"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>

              <a
                href="https://youtube.com/@YourChannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/youtubeIcon.png"
                  alt="YouTube"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>

              <a
                href="https://linkedin.com/in/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/LinkedIcon.png"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap font-medium right justify-between w-full lg:w-1/2 text-[#f1ededde]">
            <div className="flex flex-col text-left gap-2 max-lg:mb-5">
              <div className="mb-2 font-normal text-[24px] text-[#FFFFFF] ">
                company
              </div>
              <Link to="/">Home</Link>
              <Link to="/doctors">Doctors</Link>
              <Link to="/">FoQs</Link>
              <Link to="/contact">Contact us</Link>
            </div>
            <div className="flex flex-col text-left gap-2 max-lg:mb-5">
              <div className="mb-2 font-normal text-[24px] text-[#FFFFFF]">
                support
              </div>
              <Link to="/">Help Center</Link>
              <Link to="/">How it works</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
            </div>
            <div className="flex flex-col text-left gap-2 max-lg:mb-5">
              <div className="mb-2 font-normal text-[24px] text-[#FFFFFF]">
                Contact Info
              </div>
              <div className="flex gap-2">
                <PhoneCall />
                <div>
                  <div>Phone</div>
                  <p>080 707 555-321</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail />
                <div>
                  <div>Email</div>
                  <p>demo@example.com</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin />
                <div>
                  <div>Address</div>
                  <p>
                    526 Melrose Street,
                    <br />
                    Water Mill, 11976 New York
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 flex-wrap gap-2">
          <p>&copy; {new Date().getFullYear()} Techvio - All Rights Reserved</p>
          <p>Terms & Condition | Privacy Policy </p>
        </div>
      </div>
    </footer>
  );
}

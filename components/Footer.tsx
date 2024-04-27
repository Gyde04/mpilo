import Image from "next/image";
import Link from "next/link";
import logo from "../public/mpilo2.svg";
import { Button } from "@nextui-org/react";
import twit from "../public/twitter.svg";
import fb from "../public/fb.svg";
import link from "../public/linkedin.svg";

function Footer() {
  const date = new Date();

  return (
    <div className="h-full rounded-t-xl py-6 relative  flex flex-col  z-0">
      <div className="max-w-[1280px] mx-auto w-full sm:px-12 px-10 flex md:flex-row flex-col rounded-2xl py-10 gap-5 justify-between">
        <div className="">
          <Image src={logo} alt="logo" />
          <div className="flex gap-6 mt-10">
            <div className="w-14 h-14 justify-center items-center flex rounded-full bg-gray-200">
              <Image src={twit} alt="logo" />
            </div>
            <div className="w-14 h-14 justify-center items-center flex rounded-full bg-gray-200">
              <Image src={fb} alt="logo" />
            </div>
            <div className="w-14 h-14 justify-center items-center flex rounded-full bg-gray-200">
              <Image src={link} alt="logo" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full justify-between sm:justify-evenly gap-10 md:gap-20 flex-wrap ">
          <ul className="">
            <li className="text-[#000] text-xl mb-6 font-bold">Explore</li>
            <li className="mb-6 text-[#000] font-light">Feature</li>
            <li className="mb-6 text-[#000] font-light">About us</li>
            <li className="mb-6 text-[#000] font-light">FAQs</li>
            <li className="mb-6 text-[#000] font-light">Contact</li>
          </ul>
          <ul className="">
            <li className="text-[#000] text-xl mb-6 font-bold">Legal</li>
            <li className="mb-6 text-[#000] font-light">Privacy Policy</li>
            <li className="mb-6 text-[#000] font-light">Terms of Services</li>
            <li className="mb-6 text-[#000] font-light">Documentations</li>
            <li className="mb-6 text-[#000] font-light">Help Center</li>
          </ul>
          <div className="flex flex-col gap-2">
            <span className="text-[#000] text-lg font-bold">Subscribe</span>
            <div className="flex gap-3">
              <p className="text-[#000] font-light mb-2">
                Subscribe to get the latest news from us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1280px]  w-full sm:px-12 px-10  sm:flex-row justify-between py-4  border-t border-white text-[#062126]">
        <div className="mb-4 sm:mb-0">
          <p className="font-light">
            {" "}
            <span className="text-xl">&copy;</span> {date.getUTCFullYear()}{" "}
            Augment All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <p className="font-light">Privacy Policy</p>
          <p className="font-light">Terms of Use</p>
          <p className="font-light">Accessibilty</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

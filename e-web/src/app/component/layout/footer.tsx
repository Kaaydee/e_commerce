"use client";

import Link from "next/link";
import { IoMailOutline } from "react-icons/io5";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiPhone,
  PiTiktokLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

export default function Footer() {
  return (
    <footer
      className={` bg-[#f9f9f9] pt-14 pb-32 bg-[url('/images/footer.png')] bg-left-bottom bg-repeat-x`}
    >
      <div className="relative z-10 container grid lg:grid-cols-4 gap-8 p-10">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <h4 className="font-bold text-2xl">Thông tin cửa hàng</h4>
          <div>
            <Link
              href={"#/youtube"}
              className="flex items-center text-gray-700 gap-3 "
            >
              <PiYoutubeLogo className="w-6 h-6  "></PiYoutubeLogo>
              <span>@piacakehuflic.youtube.com</span>
            </Link>

            <Link
              href={"#/tel"}
              className="flex items-center text-gray-700 gap-3 "
            >
              <PiPhone className="w-6 h-6  "></PiPhone>
              <span>@0367999999</span>
            </Link>

            <Link
              href={"#/email"}
              className="flex items-center text-gray-700 gap-3 "
            >
              <IoMailOutline className="w-6 h-6  "></IoMailOutline>
              <span>piacakehuflic@hmail.com</span>
            </Link>
          </div>
        </div>
        {/* mang xa hoi */}
        <div className="flex flex-col gap-6 ">
          <h4 className="font-bold text-2xl">Mạng xã hội</h4>
          <div className="flex gap-3">
            <Link href={"#/Youtube"}>
              <PiYoutubeLogo className="w-10 h-10  "></PiYoutubeLogo>
            </Link>

            <Link href={"#/Facebook"}>
              <PiFacebookLogo className="w-10 h-10  "></PiFacebookLogo>
            </Link>

            <Link href={"#/Instagram"}>
              <PiInstagramLogo className="w-10 h-10  "></PiInstagramLogo>
            </Link>

            <Link href={"#/Facebook"}>
              <PiTiktokLogo className="w-10 h-10  "></PiTiktokLogo>
            </Link>
          </div>
        </div>
        {/* Chinh sach policy */}
        <div className="flex flex-col gap-6 lg:text-right">
          <h4 className="font-bold text-2xl">Chính sách</h4>
          <Link href={"#/Chinhsachbaohanh"}>Chính sách bảo hành</Link>
        </div>
      </div>
    </footer>
  );
}

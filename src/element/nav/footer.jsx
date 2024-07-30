import Link from "next/link";
import React from "react";
import { IoLocationOutline, IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

const FooterNav = () => {
  return (
    <div className=" bg-gray-700 py-4 text-white">
      <div className="flex flex-row px-20 pt-8 pb-4 h-[400px] justify-between">
        <div className="w-1/4 py-2 px-5">
          <p className="text-xl font-bold mt-5 mb-10">Sunia Baru</p>
          <p>Located at Majalengka, West Java.</p>
        </div>
        <div className="w-1/4 py-2 px-5">
          <p className="text-xl font-bold mt-5 mb-10">Quick Links</p>
          <div className="flex flex-col gap-3">
            <Link href={"/dashboard"}>Dashboard</Link>
            <p>User Management</p>
            <p>Reports</p>
          </div>
        </div>
        <div className="w-1/4 py-2 px-5">
          <p className="text-xl font-bold mt-5 mb-10">Supports</p>
          <div className="flex flex-col gap-3">
            <p>Admin Guide</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="w-1/4 py-2 px-5">
          <p className="text-xl font-bold mt-5 mb-10">Contacts</p>
          <div className="flex flex-col gap-3">
            <div>
              <Link
                href={"https://maps.app.goo.gl/LSa64WyXgtTt8WBM7"}
                className="flex flex-row items-center gap-2"
              >
                <IoLocationOutline />
                <p>Jl. Desa Sunia Baru, Banjaran</p>
              </Link>
            </div>
            <div>
              <Link
                href={"https://wa.me/6282116424576"}
                className="flex flex-row items-center gap-2"
              >
                <FaPhoneAlt />
                <p>+62 8211 6424 576</p>
              </Link>
            </div>
            <div>
              <Link
                href={"mailto:dankoyuki398@gmail.com"}
                className="flex flex-row items-center gap-2"
              >
                <IoMail />
                <p>dankoyuki398@gmail.com</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col my-6">
            <p className="mb-4 text-lg font-bold">Connect</p>
            <div className="flex flex-row text-5xl gap-4">
              <Link href={"/"}>
                <TiSocialYoutubeCircular className="rounded-full" />
              </Link>
              <Link href={"/"}>
                <TiSocialInstagramCircular className="rounded-full" />
              </Link>
              <Link href={"/"}>
                <TiSocialFacebookCircular className="rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[100px]">
        <p>Copyright @2024 All rights reserved | Created by Dan Koyuki</p>
        <Link href={"/credits"} className="mt-4">
          Credits
        </Link>
      </div>
    </div>
  );
};

export default FooterNav;

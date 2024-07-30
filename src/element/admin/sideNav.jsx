"use client";

import React, { useState } from "react";
import { FaQuestionCircle, FaRegNewspaper, FaUserEdit } from "react-icons/fa";
import { MdDashboard, MdEvent } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import { SiAuth0 } from "react-icons/si";
import ContentManagementMenu from "./contentManagement";

const DashboardNav = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <MdDashboard size={25} /> },
    { name: "Reports", icon: <TbReport size={25} /> },
    { name: "Events", icon: <MdEvent size={25} /> },
    { name: "News", icon: <FaRegNewspaper size={25} /> },
    { name: "Staff", icon: <RiAdminFill size={25} /> },
    { name: "Users", icon: <FaUserEdit size={25} /> },
    {
      name: "Content",
      icon: <BiBookContent size={25} />,
      component: <ContentManagementMenu />,
    },
    { name: "SG", icon: <SiAuth0 size={25} /> },
    { name: "FAQ", icon: <FaQuestionCircle size={25} /> },
  ];

  return (
    <div className="flex flex-row">
      <div className="fixed z-0 w-1/6 border-r bg-gray-700 text-white min-h-screen font-bold pt-5">
        <div className="flex flex-col gap-5 pl-4 text-l">
          <p className="border-b-4 border-double">Generals</p>
          {menuItems.slice(0, 4).map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center gap-2 pl-7 cursor-pointer rounded-l-lg ${
                activeMenu === item.name
                  ? "border-lime-500 border-4 border-r-0 pl-4"
                  : "border-0"
              }`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
          <p className="border-b-4 border-double">Managements</p>
          {menuItems.slice(4, 7).map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center gap-2 pl-7 cursor-pointer rounded-l-lg ${
                activeMenu === item.name
                  ? "border-lime-500 border-4 border-r-0 pl-4"
                  : "border-0"
              }`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
          <p className="border-b-4 border-double">Help & Supports</p>
          {menuItems.slice(7).map((item) => (
            <div
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center gap-2 pl-7 cursor-pointer rounded-l-lg ${
                activeMenu === item.name
                  ? "border-lime-500 border-4 border-r-0 pl-4"
                  : "border-0"
              }`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-[16.66667%] w-5/6">
        {menuItems.find((item) => item.name === activeMenu)?.component}
      </div>
    </div>
  );
};

export default DashboardNav;

"use client";

import React, { useState } from "react";
import Tiptap from "./tiptapconf";

const ContentManagementMenu = () => {
  const [activeMenu, setActiveMenu] = useState("Sejarah");

  const handleMenu = (menu) => {
    setActiveMenu(menu);
  };

  const menuItems = [
    { name: "Sejarah", key: "Sejarah" },
    { name: "Visi & Misi", key: "VM" },
    { name: "Umum", key: "Umum" },
    { name: "Potensi", key: "Potensi" },
    { name: "Perkembangan", key: "Perkembangan" },
    { name: "Struktur", key: "Struktur" },
  ];

  return (
    <div className="bg-gray-700 min-h-screen px-4">
      <p className="text-3xl text-center font-bold py-4 text-white">
        Content Management
      </p>
      <div className="border-b-4 border-double mx-8"></div>
      <div className="my-4 mx-8 p-2 flex gap-4 bg-gray-800 text-white rounded-lg shadow-md justify-center">
        {menuItems.map((item) => (
          <p
            key={item.key}
            onClick={() => handleMenu(item.key)}
            className={`px-4 py-2 font-semibold rounded-lg transition duration-300 cursor-pointer ${
              activeMenu === item.key
                ? "bg-blue-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div className="mx-8">
        <Tiptap content={"Hello world!"}/>
      </div>
    </div>
  );
};

export default ContentManagementMenu;

"use client";

import Image from "next/image";
import Link from "next/link";
import { FiUser, FiLogOut, FiMenu } from "react-icons/fi";

const Navbar = ({ adminName = "John Doe", onToggleSidebar }) => {
  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 shadow-md fixed top-0 left-0 w-full z-20">
      {/* Toggle Sidebar Button (for small screens) */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden flex items-center gap-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        <FiMenu size={24} />
      </button>

      {/* Logo and Organization Name */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.jpg"
          width="48"
          height="48"
          alt="DB Logo"
          className="w-12 h-12 rounded-full"
        />
        <span className="font-bold text-lg md:text-xl text-white hidden lg:inline-block">
          DBYTC-Iringa
        </span>
      </Link>

      {/* Admin Info and Logout */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-white">
          <FiUser size={24} />
          <span className="hidden sm:inline-block">{adminName}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

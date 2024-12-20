"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="lg:pl-64 flex-1 bg-gray-100 overflow-auto flex flex-col">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-30 bg-white shadow-md">
          <Navbar onToggleSidebar={toggleSidebar} />
        </div>

        {/* Children content */}
        <div className="p-6 mt-10">{children}</div>
      </div>
    </div>
  );
}

import React from "react";
import Sidebar from "@/app/components/Sidebar";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 ml-0 transition-all duration-300">
        {/* Topbar */}
        <header className="bg-white shadow p-4 lg:pl-6 pl-14">
          <h1 className="text-2xl font-bold text-">Admin Dashboard</h1>
        </header>

        {/* Main Section */}
        <main className="p-6"></main>
      </div>
    </div>
  );
}

export default Dashboard;

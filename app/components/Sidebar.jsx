"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiLogOut,
  FiUser,
  FiChevronDown,
  FiChevronUp,
  FiBriefcase,
  FiBook,
  FiTool,
} from "react-icons/fi";

const Sidebar = ({ isOpen }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [productionUnitOpen, setProductionUnitOpen] = useState(false);

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-0"
        } lg:w-64 bg-gray-800 mt-16 text-white h-screen fixed top-0 left-0 transition-all duration-300 overflow-hidden z-10`}
      >
        {/* Sidebar Content */}
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Navigation Menu */}
          <nav className="flex-1 px-2 mt-6">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition"
                >
                  <FiBarChart2 size={24} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users"
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition"
                >
                  <FiUsers size={24} />
                  <span>Manage Users</span>
                </Link>
              </li>

              {/* Settings Dropdown */}
              <li>
                <div
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer"
                >
                  <FiSettings size={24} />
                  <span>Settings</span>
                  {settingsOpen ? (
                    <FiChevronUp size={20} className="ml-2" />
                  ) : (
                    <FiChevronDown size={20} className="ml-2" />
                  )}
                </div>
                {settingsOpen && (
                  <ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <Link
                        href="/admin/settings/staff"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Management & Staff</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/landing-page"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Landing Page</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/settings/comments"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Comments</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Projects Dropdown */}
              <li>
                <div
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer"
                >
                  <FiBriefcase size={24} />
                  <span>Projects</span>
                  {projectsOpen ? (
                    <FiChevronUp size={20} className="ml-2" />
                  ) : (
                    <FiChevronDown size={20} className="ml-2" />
                  )}
                </div>
                {projectsOpen && (
                  <ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <Link
                        href="/admin/projects/ongoing"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>On-going Projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/projects/completed"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Completed Projects</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Courses Dropdown */}
              <li>
                <div
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer"
                >
                  <FiBook size={24} />
                  <span>Courses Offered</span>
                  {coursesOpen ? (
                    <FiChevronUp size={20} className="ml-2" />
                  ) : (
                    <FiChevronDown size={20} className="ml-2" />
                  )}
                </div>
                {coursesOpen && (
                  <ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <Link
                        href="/admin/courses/long"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Long Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/courses/short"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Short Courses</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Production Units Dropdown */}
              <li>
                <div
                  onClick={() => setProductionUnitOpen(!productionUnitOpen)}
                  className="flex items-center gap-4 px-3 py-3 rounded hover:bg-gray-700 transition cursor-pointer"
                >
                  <FiTool size={24} />
                  <span>Production Units</span>
                  {productionUnitOpen ? (
                    <FiChevronUp size={20} className="ml-2" />
                  ) : (
                    <FiChevronDown size={20} className="ml-2" />
                  )}
                </div>
                {productionUnitOpen && (
                  <ul className="space-y-2 pl-8 mt-2">
                    <li>
                      <Link
                        href="/admin/production/motor"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Motor Vehicle Mechanics</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/production/carpentry"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Carpentry & Joinery</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/production/printing"
                        className="flex items-center gap-4 px-3 py-2 rounded hover:bg-gray-700 transition"
                      >
                        <span>Printing</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-3 py-3 rounded hover:bg-red-600 transition"
            >
              <FiLogOut size={24} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ManageUsers = () => {
  const initialUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Sam Johnson", email: "sam@example.com", role: "Moderator" },
    { id: 4, name: "Alex Brown", email: "alex@example.com", role: "Admin" },
    { id: 5, name: "Emily Davis", email: "emily@example.com", role: "User" },
    { id: 6, name: "Chris Lee", email: "chris@example.com", role: "Moderator" },
    { id: 7, name: "Laura Green", email: "laura@example.com", role: "User" },
    { id: 8, name: "Mark White", email: "mark@example.com", role: "Moderator" },
    { id: 9, name: "Sara Black", email: "sara@example.com", role: "Admin" },
    { id: 10, name: "Mike Grey", email: "mike@example.com", role: "User" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const totalPages = Math.ceil(users.length / usersPerPage);

  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
    // Logic to edit user
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-indigo-600 text-white">
              <TableHead>S/No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user, index) => (
              <TableRow key={user.id} className="border-t hover:bg-gray-50">
                <TableCell>
                  {(currentPage - 1) * usersPerPage + index + 1}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 ml-2"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600">
          Showing {currentUsers.length} of {users.length} users
        </p>
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;

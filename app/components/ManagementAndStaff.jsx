import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ManagementAndStaff = () => {
  const staffMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: "/images/john_doe.jpg",
    },
    {
      name: "Jane Smith",
      position: "Marketing Director",
      image: "/images/jane_smith.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Alice Johnson",
      position: "",
      image: "/images/rector.jpg",
    },
    {
      name: "Mark Wilson",
      position: "Operations Manager",
      image: "/images/mark_wilson.jpg",
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <section className="relative">
        <img
          src="/images/about.jpg"
          alt="About Us Banner"
          className="w-full h-80 md:h-[300px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            The DBYTC Management & Staff
          </h1>
        </div>
      </section>
      <div className="container mx-auto px-4 py-4 text-center">
        <div className="grid gap-10 md:grid-cols-4">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-purple-900">
                {member.name}
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                {member.position || "Position not assigned"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementAndStaff;

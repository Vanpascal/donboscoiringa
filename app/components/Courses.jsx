import React from "react";

function Courses() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-start mb-8 text-purple-900">
        Courses We Offer
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Long Courses Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/images/long.jpg" // Replace with the actual image path
            alt="Long Courses"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Long Courses
            </h3>
            <p className="text-gray-700 mb-6">
              Our long courses provide in-depth training designed to equip
              students with the skills needed for professional excellence.
            </p>
            <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Short Courses Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/images/long.jpg" // Replace with the actual image path
            alt="Short Courses"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">
              Short Courses
            </h3>
            <p className="text-gray-700 mb-6">
              Our short courses are tailored to meet the demands of modern
              professionals, offering concise and impactful learning.
            </p>
            <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

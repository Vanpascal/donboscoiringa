import React from "react";

function Carpentry() {
  return (
    <div className="bg-gray-100">
      {/* Top Section: Full-Width Production Unit Image */}
      <section className="relative">
        <img
          src="/images/about.jpg" // Replace with the actual image path
          alt="Carpentry Production Unit"
          className="w-full h-80 md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Carpentry Production Unit
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          {/* Left Section: Head of Production Unit */}
          <div className="flex-shrink-0 text-center">
            <img
              src="/images/rector.jpg" // Replace with the actual image path
              alt="Head of Production Unit"
              className="w-80 h-80 object-cover rounded-lg shadow-lg mx-auto"
            />
            <h3 className=" font-semibold text-gray-800 mt-4">Daniel Daniel</h3>
            <p className="text-gray-600">Head of Production Unit</p>
          </div>

          {/* Right Section: Description */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              About the Production Unit
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              The Carpentry Production Unit is a vital part of our technical
              training center, equipping students with practical skills in
              woodworking and craftsmanship. Through hands-on experience, they
              learn to create high-quality furniture and structures tailored to
              client needs.
            </p>

            <h3 className=" font-bold text-gray-800 mb-3">Services Offered</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Custom furniture design and manufacturing</li>
              <li>Cabinet making and installation</li>
              <li>Wooden door and window frame crafting</li>
              <li>Repair and restoration of wooden furniture</li>
              <li>General carpentry services</li>
            </ul>

            {/* Button Below Services */}
            <div className="mt-6 flex justify-end">
              <a
                href="/booking" // Replace with the actual booking link
                className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Make a Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-50 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/cj/chair1.jpg" // Replace with actual image path
                alt="Steel Gate"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Dining Table
                    </h3>
                    <p className="text-gray-600">Price: TSH 250,000</p>
                  </div>
                  <a
                    href="/cart" // Replace with the actual cart link
                    className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/cj/chair1.jpg" // Replace with actual image path
                alt="Steel Gate"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Dining Table
                    </h3>
                    <p className="text-gray-600">Price: TSH 250,000</p>
                  </div>
                  <a
                    href="/cart" // Replace with the actual cart link
                    className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/cj/chair1.jpg" // Replace with actual image path
                alt="Metal Chair"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Dining Table
                    </h3>
                    <p className="text-gray-600">Price: TSH 250,000</p>
                  </div>
                  <a
                    href="/cart" // Replace with the actual cart link
                    className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/cj/chair1.jpg" // Replace with actual image path
                alt="Custom Railing"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Dining Table
                    </h3>
                    <p className="text-gray-600">Price: TSH 250,000</p>
                  </div>
                  <a
                    href="/cart" // Replace with the actual cart link
                    className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* Add more products as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carpentry;

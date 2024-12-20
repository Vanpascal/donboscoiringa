import React from "react";

const MotorVehicleMechanics = () => {
  return (
    <div className="bg-gray-100">
      {/* Top Section: Full-Width Production Unit Image */}
      <section className="relative">
        <img
          src="/images/long.jpg" // Replace with the actual image path
          alt="Motor Vehicle Mechanics Production Unit"
          className="w-full h-80 md:h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center shadow-lg">
            Motor Vehicle Mechanics Production Unit
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
          {/* Left Section: Head of Production Unit */}
          <div className="flex-shrink-0 text-center">
            <img
              src="/images/rector.jpg" // Replace with the actual image path
              alt="Head of Production Unit"
              className="w-80 h-80 object-cover rounded-lg shadow-xl mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              John Doe
            </h3>
            <p className="text-gray-600 text-lg">Head of Production Unit</p>
          </div>

          {/* Right Section: Description */}
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full lg:w-2/3">
            <h2 className="text-3xl font-semibold text-purple-900 mb-6">
              About the Production Unit
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              The Motor Vehicle Mechanics Production Unit is a cornerstone of
              our technical training center. It offers students hands-on
              experience in vehicle maintenance, repair, and diagnostics,
              ensuring they gain real-world skills aligned with industry
              standards.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Services Offered
            </h3>
            <ul className="space-y-8">
              <li>
                <h4 className="font-semibold text-gray-800">
                  Wheel Alignment and Wheel Balance
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  This service ensures that the vehicle's wheels are aligned
                  properly, improving driving stability and ensuring optimal
                  tire wear. Wheel balancing is also done to prevent vibration
                  and extend tire life.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  Tyre Services (Changing and Fixing Punctures)
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We provide services for changing worn-out tires and fixing
                  punctures, ensuring that your vehicle remains roadworthy and
                  safe for use.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  Brake, Suspension, and Steering System Services
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We inspect and repair the braking, suspension, and steering
                  systems of vehicles to ensure safe handling and reliable
                  braking performance, crucial for overall vehicle safety.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  Electrical Systems Diagnostics and Repair
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team specializes in diagnosing and repairing electrical
                  faults in vehicles, including issues with wiring, alternators,
                  and battery systems, ensuring the vehicle's electrical systems
                  function correctly.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  Engine Overhauling
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We offer engine overhauling services that involve a complete
                  inspection and repair of engine components, ensuring the
                  engine runs smoothly and has a longer lifespan.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-gray-800">
                  Gearbox, Clutch, and Pressure Plate Services
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mechanics are trained to repair and maintain gearboxes,
                  clutches, and pressure plates, which are essential for smooth
                  gear transitions and overall vehicle performance.
                </p>
              </li>
            </ul>
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
    </div>
  );
};

export default MotorVehicleMechanics;

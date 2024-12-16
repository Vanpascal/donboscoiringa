"use client";

const courses = [
  {
    name: "Electrical Installation",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Learn the skills necessary to work with electrical systems, including wiring, troubleshooting, and maintenance. This course prepares you for a wide range of job opportunities in the electrical industry.",
  },
  {
    name: "Solar PV",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Develop expertise in solar photovoltaic (PV) technology, learning to design, install, and maintain solar power systems. This course provides in-depth knowledge on renewable energy, sustainability, and the installation of solar panels, preparing you for a career in the growing solar energy industry.",
  },

  {
    name: "Motor Vehicle Mechanics",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Develop hands-on skills in diagnosing and repairing vehicle systems. Ideal for those seeking a career in automotive repair or starting their own workshop.",
  },
  {
    name: "Design, Sewing, and Cloth Technology",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Explore the art of fashion design, sewing, and textile technology. Perfect for aspiring designers or anyone interested in clothing production and innovation.",
  },
  {
    name: "Carpentry and Joinery",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Learn the craft of woodworking, including furniture making and construction. This course provides skills to start a career in carpentry or run your own business.",
  },
  {
    name: "Welding and Metal Fabrication",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Master welding techniques and metal fabrication processes to create and repair metal structures. A highly in-demand skill for industrial and construction projects.",
  },
  {
    name: "Masonry and Bricklaying",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Acquire skills in bricklaying, concrete work, and other masonry techniques. This course is perfect for those interested in construction or civil engineering.",
  },
  {
    name: "Plumbing and Pipe Fitting",
    duration: " 6 Months to 1 year",
    image: "/images/long.jpg",
    description:
      "Become a skilled plumber by learning to install and repair piping systems. This course is ideal for a stable career in residential or commercial plumbing.",
  },
];

const ShortCourses = () => {
  const redirectToAdmissionSystem = () => {
    window.location.href = "https://admission.example.com";
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.name}
                className="h-40 w-full object-cover"
              />
              {/* Content */}
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold text-purple-800">
                  {course.name}
                </h2>
                <p className="text-gray-600 mt-2">
                  Duration: {course.duration}
                </p>
                <p className="text-gray-700 mt-2 text-sm text-justify">
                  {course.description}
                </p>
              </div>
              {/* Button */}
              <div className="p-4 bg-gray-100">
                <button
                  onClick={redirectToAdmissionSystem}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-center"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortCourses;

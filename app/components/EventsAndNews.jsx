import React from "react";

function EventsAndNews() {
  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Recent Updates Section */}
      <div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
        <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
          Recent Updates
        </h3>
        <ul className="space-y-4">
          {[
            {
              title:
                "Don Bosco Iringa signs a collaboration agreement with Kijiji Cha Matumaini",
              date: "Aug 20, 2024",
              img: "/images/update1.jpg",
            },
            {
              title:
                "The Prime Minister praises the innovation at Don Bosco Iringa",
              date: "May 31, 2024",
              img: "/images/update2.jpg",
            },
            {
              title:
                "10 billion allocated for power plant at Don Bosco Iringa Campus",
              date: "Feb 01, 2024",
              img: "/images/update3.jpg",
            },
            {
              title:
                "200 youths benefit from renewable energy training program",
              date: "Nov 16, 2023",
              img: "/images/update4.jpg",
            },
            {
              title:
                "Education Committee impressed by EASTRIP project at Don Bosco",
              date: "Oct 24, 2023",
              img: "/images/update5.jpg",
            },
          ].map((update, index) => (
            <li key={index} className="flex items-start">
              <img
                src={update.img}
                alt={update.title}
                className="w-20 h-20 rounded-md mr-4 object-cover shadow-sm"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800 break-words">
                  {update.title}
                </h4>
                <p className="text-xs text-gray-600">
                  Posted On: {update.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Announcements Section */}
      <div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
        <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
          Announcements
        </h3>
        <ul className="space-y-4">
          {[
            {
              title:
                "Provisional List of Graduands for the upcoming graduation",
              date: "Nov 19, 2024",
              downloadLink: "#",
            },
            {
              title: "Admissions list for 2024 Diploma Programs",
              date: "Oct 18, 2024",
              downloadLink: "#",
            },
            {
              title: "Multiple admissions list for 2024/2025 Academic Year",
              date: "Oct 06, 2024",
              downloadLink: "#",
            },
            {
              title: "Entry requirements for new vocational programs",
              date: "Oct 06, 2024",
              downloadLink: "#",
            },
          ].map((announcement, index) => (
            <li key={index}>
              <div className="flex items-start">
                <span className="text-red-600 font-bold mr-3">NEW</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 break-words">
                    {announcement.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">
                    Posted On: {announcement.date}
                  </p>
                  <a
                    href={announcement.downloadLink}
                    className="text-blue-600 text-xs underline hover:text-blue-800"
                  >
                    Download
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Document Center Section */}
      <div className="bg-white shadow-lg rounded-lg p-5 overflow-hidden">
        <h3 className="text-xl font-semibold text-purple-900 border-b-2 border-blue-800 pb-2 mb-5">
          Document Center
        </h3>
        <ul className="space-y-4">
          {[
            {
              title: "Don Bosco Bulletin - Issue 02",
              link: "#",
            },
            {
              title: "Annual Financial Report 2023",
              link: "#",
            },
            {
              title: "Tracer Study Report 2023 - Don Bosco Graduates",
              link: "#",
            },
            {
              title: "Vocational Program Admission Requirements",
              link: "#",
            },
            {
              title: "ICT Policy and Procedures",
              link: "#",
            },
          ].map((document, index) => (
            <li key={index} className="flex items-center">
              <span className="text-red-600 mr-3">📄</span>
              <a
                href={document.link}
                className="text-sm font-medium text-gray-800 break-words underline hover:text-blue-800"
              >
                {document.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventsAndNews;

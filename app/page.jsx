"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import MessageFromRector from "@/app/components/MessageFromRector";
import AboutDb from "@/app/components/AboutDb";
import Courses from "@/app/components/Courses";
import EventsAndNews from "@/app/components/EventsAndNews";
import OurSponsors from "@/app/components/OurSponsers";
import Footer from "@/app/components/Footer";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-white">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-justify ">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to Don Bosco Youth <br />
            <span>Training Center Iringa</span>
          </h1>
          <p className="mt-4 text-justify sm:text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
            Don Bosco Youth Training Center, Iringa, is a vibrant community
            offering a Technical College and daily youth activities. Established
            in 1981, the center provides professional courses in Printing,
            Masonry, Carpentry, Computer, Solar Energy, Tailoring, Electrical,
            Motor Vehicle Mechanics, and Welding and Fabrication. With courses
            ranging from six months to three years, the center equips students
            with VETA level III certificates and life skills, ensuring their
            physical, psychological, and emotional growth.
          </p>
          <a
            href="/about"
            className="mt-6 inline-block bg-purple-900 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300 sm:text-sm"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Message From Rector Section */}
      <section className=" py-10 px-4">
        <div className="container mx-auto">
          <MessageFromRector />
        </div>
      </section>

      {/* About DB Section */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto">
          <AboutDb />
        </div>
      </section>

      {/* Courses Section */}
      <section className=" py-10 px-4">
        <div className="container mx-auto">
          <Courses />
        </div>
      </section>

      {/* Events and News Section */}
      <section className="bg-white py-10 px-4">
        <div className="container mx-auto">
          <EventsAndNews />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="container mx-auto">
          <OurSponsors />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

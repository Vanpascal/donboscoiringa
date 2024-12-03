"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MessageFromRector from "@/components/MessageFromRector";
import AboutDb from "@/components/AboutDb";
import Courses from "@/components/Courses";
import EventsAndNews from "@/components/EventsAndNews";
import OurSponsors from "@/components/OurSponsers";
import Footer from "@/components/Footer";

const images = [
  "/images/image1.jpg",
  "/images//image2.jpg",
  "/images//image3.jpg",
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
      <section className="relative min-h-screen flex flex-col justify-center items-center text-start text-white">
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
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container z-10 px-4 mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold p-2">
            Welcome to Don Bosco Youth <br />
            <span>Training Center Iringa</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Don Bosco Youth Training Center, Iringa, is a vibrant community
            offering a Technical College and daily youth activities. Established
            in 1981, the center provides professional courses in Printing,
            Masonry, Carpentry, Computer, Solar energy, Tailoring, Electrical,
            Motor Vehicle Mechanics, and Welding and Fabrication. With courses
            ranging from six months to three years, the center equips students
            with VETA level III certificates and life skills, ensuring their
            physical, psychological, and emotional growth. Join us to build a
            brighter future through education and community support!
          </p>
          <a
            href="/about"
            className="mt-6 inline-block bg-purple-900 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-lg font-medium"
          >
            Learn More
          </a>
        </div>
      </section>
      <section className="bg-gray-100 py-5">
        <MessageFromRector />
      </section>
      <section className="bg-gray-100">
        <AboutDb />
      </section>
      <section className="bg-gray-100">
        <Courses />
      </section>
      <section className="bg-gray-100">
        <EventsAndNews />
      </section>
      <section className="bg-gray-100">
        <OurSponsors />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

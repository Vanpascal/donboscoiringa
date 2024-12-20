import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-amber-600 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connect With Us Section */}
        <div>
          <h3 className="font-bold mb-4">Connect With Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
                className="text-white hover:text-gray-400"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on LinkedIn"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Twitter"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on YouTube"
                className="text-white hover:text-gray-400"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p>Phone: +255 (0)763601355</p>
          <p>Email: info@donboscoiringa.org</p>
          <p>Address: Iringa, Tanzania</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold mb-4">Subscribe to Our Newsletter</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        © 2024 Don Bosco Iringa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

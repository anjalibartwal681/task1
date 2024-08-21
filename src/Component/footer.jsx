// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-10">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">
                <i className="fa-solid fa-house"></i>
              </span>

              <div>
                <p className="font-bold">FitTrack</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">
                <i className="fa-solid fa-mobile-screen"></i>
              </span>
              <p>1234567891</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <p>contact@example.com</p>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-5">
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
            </ul>
          </div>

          {/* Keep Connected */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Keep Connected</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-2xl">
                  <i className="fa-brands fa-facebook"></i>
                </span>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-2xl">
                  <i className="fa-brands fa-square-youtube"></i>
                </span>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-2xl">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-2xl">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

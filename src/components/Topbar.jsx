import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

function Topbar() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-1 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-end md:items-center px-6 text-sm md:space-y-0">
        
        {/* Left Section: Contact Info */}
        <div className="hidden md:flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2" aria-label="Email Contact">
            <HiMail className="text-orange-400" />
            <a
              href="mailto:annaiinstituts@gmail.com"
              className="hover:underline hover:text-orange-400 transition duration-300"
            >
              annaiinstituts@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2" aria-label="Phone Contact">
            <HiPhone className="text-orange-400" />
            <span>+91 9865826446</span>
          </div>
        </div>

        {/* Right Section: Social Media and Donation Link */}
        <div className="flex items-center space-x-4 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition duration-300 text-lg"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition duration-300 text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition duration-300 text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="/donation"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
            aria-label="Donation Page"
          >
            Donation
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

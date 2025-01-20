import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
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
      href="mailto:aetrust2001@gmail.com"
      target='_blank'
      className="hover:underline hover:text-orange-400 transition duration-300"
    >
      aetrust2001@gmail.com
    </a>
  </div>
  <div className="flex items-center space-x-2" aria-label="Phone Contact">
    <HiPhone className="text-orange-400" />
    <span>+91 9865826446</span>
  </div>
  <div className="flex items-center space-x-2" aria-label="Phone Contact">
    <HiPhone className="text-orange-400" />
    <span>+91 7418416121</span>
  </div>
</div>
        {/* Right Section: Social Media and Donation Link */}
        <div className="flex items-center space-x-4 ">
          <a
            href="https://www.facebook.com/profile.php?id=100003670249638&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition duration-300 text-lg"
          >
            <FaFacebookF />
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition duration-300 text-lg"
          >
            <FaTwitter />
          </a> */}
          <a
            href="https://www.instagram.com/homelessshelter_palani?igsh=MTB4cHRia2p1MW05Nw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition duration-300 text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.google.com/search?client=ms-android-transsion&sca_esv=d54d6af1d774538f&hl=en-US&cs=0&sxsrf=ADLYWIKeTkWYMyrvJdQji-36W8oru7nx4A%3A1736488845063&kgmid=%2Fg%2F11tnj2m3b1&q=Shelter%20For%20Urban%20Homeless%20Palani&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=0ad5d76d3019912c"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Business"
            className="hover:text-green-500 transition duration-300 text-lg"
          >
            <FcGoogle />
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

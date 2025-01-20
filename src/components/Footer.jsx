import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FaPhoneAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaHome,
  FaInfoCircle,
  FaTasks,
  FaEnvelope,
  FaGraduationCap,
  FaClinicMedical,
  FaTint,
  FaBlog,
  FaCalendarAlt,
  FaImages,
  FaDonate,
  FaHandsHelping,
  FaEnvelopeOpenText,
} from "react-icons/fa";


import Img from "../assets/slider4.jpg";
import Logo from "../assets/TRUSTLOGO.png"; // Dummy logo image

function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden min-h-screen font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${Img})` }}
      ></div>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 w-full text-gray-500  transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          fill="currentColor"
        />
      </svg>

      {/* Overlay */}
      <div className="absolute inset-0 md:inset-5 rounded-lg bg-black opacity-50"></div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 lg:px-16">
                  {/* Logo Section */}
                  <div
            className="flex flex-col items-center justify-center space-y-4"
            data-aos="fade-up"
          >
            <Link to="/" className="flex flex-col items-center space-y-3 group" onClick={handleScrollToTop}>
              {/* Logo Image with Group Hover Effect */}
              <img
                src={Logo}
                alt="Annai Trust Logo"
                className="w-24 h-24 group-hover:scale-125 transition-transform duration-500"
              />
              {/* Text will also scale when logo is hovered */}
              <span className="text-xl text-center font-bold group-hover:text-blue-500 transition-all duration-300">
                Annai Educational Trust
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-center">
              Empowering communities through education and support. Join us in
              making a difference.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* About Us Section */}
          <div
            className="flex flex-col items-center md:pt-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">
              Quick Links
            </h2>
            <ul className="space-y-2 text-md">
              <li className="flex items-center space-x-2 hover:text-blue-400 group">
                <FaHome className="w-4 h-4" />
                <Link
                  to="/"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group group">
                <FaInfoCircle className="w-4 h-4" />
                <Link
                  to="/about"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Who we are
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group group">
                <FaTasks className="w-4 h-4" />
                <Link to="/services" className="flex items-center transition transform group-hover:translate-x-2 " onClick={handleScrollToTop}>
                  What we do
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group group">
                <FaEnvelope className="w-4 h-4" />
                <Link to="/contact" className="flex items-center transition transform group-hover:translate-x-2" onClick={handleScrollToTop}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div
            className="flex flex-col items-center md:pt-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">
              Our Services
            </h2>
            <ul className="space-y-2 text-md">
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group group">
                <FaGraduationCap className="w-4 h-4" />
                <Link
                  to="/education"
                  className="flex items-center transition transform group-hover:translate-x-2 "
                  onClick={handleScrollToTop}
                >
                  Education Support
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaClinicMedical className="w-4 h-4" />
                <Link
                  to="/health"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Health & Shelter
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaTint className="w-4 h-4" />
                <Link
                  to="/community"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Blood Camp
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div
            className="flex flex-col items-center md:pt-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">
              Resources
            </h2>
            <ul className="space-y-2 text-md">
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaBlog className="w-4 h-4" />
                <Link to="/blog" className="flex items-center transition transform group-hover:translate-x-2" onClick={handleScrollToTop}>
                  Blog
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaCalendarAlt className="w-4 h-4" />
                <Link
                  to="/blog"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Events
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaImages className="w-4 h-4" />
                <Link
                  to="/gallery"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div
            className="flex flex-col items-center md:pt-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">
              Get Involved
            </h2>
            <ul className="space-y-2 text-md">
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaDonate className="w-4 h-4" />
                <Link
                  to="/donate"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Donate
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group">
                <FaHandsHelping className="w-4 h-4" />
                <Link
                  to="/volunteer"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Volunteer
                </Link>
              </li>
              <li className="flex items-center space-x-2 hover:text-blue-400 transition group group">
                <FaEnvelopeOpenText className="w-4 h-4" />
                <Link
                  to="/contact"
                  className="flex items-center transition transform group-hover:translate-x-2"
                  onClick={handleScrollToTop}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

{/* Additional Contact Information */}
{/* Additional Contact Information */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-center md:text-left mt-5 p-4 lg:gap-12">
  {/* Connect With Us */}
  <div
    className="flex flex-col items-center md:items-start"
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <h2 className="text-lg font-semibold">Connect With Us</h2>
    <p className="text-sm text-gray-600 mb-2">
      Have questions? Reach out to us anytime.
    </p>
    <Link
      to="/contact"
      className="text-blue-500 hover:text-blue-600 text-sm font-medium underline flex items-center"
    >
      Get in Touch
    </Link>
  </div>

  {/* Social Media Links */}
  <div
    className="flex justify-center items-center space-x-6"
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <a
      href="https://www.google.com/search?client=ms-android-transsion&sca_esv=d54d6af1d774538f&hl=en-US&cs=0&sxsrf=ADLYWIKeTkWYMyrvJdQji-36W8oru7nx4A%3A1736488845063&kgmid=%2Fg%2F11tnj2m3b1&q=Shelter%20For%20Urban%20Homeless%20Palani&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=0ad5d76d3019912c"
      target="_blank"
      className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
      aria-label="Google"
    >
      <FcGoogle size={30} />
    </a>
    <a
      href="https://www.instagram.com/homelessshelter_palani?igsh=MTB4cHRia2p1MW05Nw=="
      target="_blank"
      className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
      aria-label="Instagram"
    >
      <FaInstagram size={30} />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=100003670249638&mibextid=ZbWKwL"
      target="_blank"
      className="text-gray-300 hover:text-blue-500 transition transform hover:scale-110"
      aria-label="Facebook"
    >
      <FaFacebook size={30} />
    </a>
    <a
      href="tel:+919865826446"
      className="text-green-500 hover:text-green-600 transition transform hover:scale-110"
      aria-label="Phone"
    >
      <FaPhoneAlt size={28} />
    </a>
  </div>

  {/* Call Us */}
  <div
    className="flex flex-col items-center "
    data-aos="fade-up"
    data-aos-delay="600"
  >
    <h2 className="text-lg font-semibold">Call Us</h2>
    <a
      href="tel:+919865826446"
      className="text-blue-500 hover:text-blue-600 flex items-center mt-2 text-sm font-medium"
    >
      <FaPhoneAlt className="w-5 h-5 mr-2" />
      +91 98658 26446
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaBarsStaggered, FaAnglesLeft } from "react-icons/fa6";
import Logo from "../assets/TRUSTLOGO.png";

const Sidebar = ({ isMenuOpen, closeMenu }) => {
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  // Close sidebar on screen resize to md or larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  return (
    <div
      ref={sidebarRef}
      className={`absolute md:hidden inset-0 z-50 w-[60%] h-[90vh] bg-black bg-opacity-50 backdrop-blur-lg transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 shadow-xl`}
    >
      <button
        className="absolute top-4 right-4 p-1 rounded-full bg-white text-black"
        onClick={closeMenu}
        aria-label="Close menu"
      >
        <FaAnglesLeft className="text-xl" />
      </button>
      <ul className="flex flex-col items-center text-white font-bold mt-16 space-y-6">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-20 rounded-full shadow-md mb-4"
        />
        <li>
          <NavLink
            to="/"
            className="hover:bg-gray-600 hover:text-gray-200 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="hover:bg-gray-600 hover:text-gray-200 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Who we are
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className="hover:bg-gray-600 hover:text-gray-200 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            What we do
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className="hover:bg-gray-600 hover:text-gray-200 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className="hover:bg-gray-600 hover:text-gray-200 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium px-6 py-2 rounded-full shadow-lg"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {/* <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <NavLink
          to="/donate"
          className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:from-orange-500 hover:to-yellow-500 hover:scale-105"
          onClick={closeMenu}
        >
          Donate
        </NavLink>
      </div> */}
    </div>
  );
};

export default Sidebar;

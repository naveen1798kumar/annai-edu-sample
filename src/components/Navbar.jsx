import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaBarsStaggered, FaAnglesLeft } from "react-icons/fa6";
import Logo from "../assets/TRUSTLOGO.png";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


  // 

  useEffect(()=>{
    if (isMenuOpen) {
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }
    return ()=>{
        document.body.style.overflow = "auto"
    }
  },[isMenuOpen])


  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const activeLinkClass = "font-bold text-blue-600 ";
  const defaultLinkClass = "font-semibold hover:text-blue-500 ";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => { 
      setIsScrolled(window.scrollY > 0); // Check if not at the top
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-200 text-black py-2 shadow-lg' : 'bg-white text-gray-800 py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" aria-label="Home" onClick={handleScrollToTop}>
          <img
            src={Logo}
            alt="Logo"
            className={`w-12 h-12 rounded-full mr-2 ${
              isScrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}
          />
          <span
            className={`font-bold ${
              isScrolled ? 'text-lg md:text-2xl' : 'text-xl md:text-3xl'
            }`}
          >
            Annai Educational Trust
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Who we are
            </NavLink>
          </li>
          
{/* Dropdown for "What we do" */}
<li
  className="relative "
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  <NavLink
    to="/services"
    className={({ isActive }) =>
      `px-4 py-2 rounded-md transition-all duration-300
     ${isActive ? activeLinkClass : defaultLinkClass}`
    }
    onClick={handleScrollToTop}
  >
    What we do
  </NavLink>
  {isDropdownOpen && (
    <ul className="absolute right-0 top-full bg-gray-100 shadow-lg rounded-lg w-56 text-gray-700 py-2 z-50 border border-gray-200" >
      <li >
        <NavLink
          to="/services/vocationalTraining"
          className="block px-4 py-2 text-sm transition-colors duration-300 rounded-md hover:text-blue-600 hover:bg-gray-300"
          onClick={() => {
            closeMenu(); // Close mobile menu (if applicable)
            setIsDropdownOpen(false); // Close the dropdown
            handleScrollToTop()
          }}
        >
          Vocational Training
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services/paramedical"
          className="block px-4 py-2 text-sm transition-colors duration-300 rounded-md hover:text-blue-600 hover:bg-gray-100"
          onClick={() => {
            closeMenu();
            setIsDropdownOpen(false);
            handleScrollToTop()
          }}
        >
          Educational Cources
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services/shelter"
          className="block px-4 py-2 text-sm transition-colors duration-300 rounded-md hover:text-blue-600 hover:bg-gray-100"
          onClick={() => {
            closeMenu();
            setIsDropdownOpen(false);
            handleScrollToTop()
          }}
        >
          Homeless Rescue
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services/bloodBank"
          className="block px-4 py-2 text-sm transition-colors duration-300 rounded-md hover:text-blue-600 hover:bg-gray-100"
          onClick={() => {
            closeMenu();
            setIsDropdownOpen(false);
            handleScrollToTop()
          }}
        >
          Blood Bank
        </NavLink>
      </li>
    </ul>
  )}
</li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Gallery
            </NavLink>
          </li>
          <li>
          <NavLink
      to="/contact"
      className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-transform duration-300 hover:from-purple-600 hover:to-blue-600 hover:scale-105 shadow-lg"
      onClick={handleScrollToTop}
    >
      Contact
    </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <Sidebar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;

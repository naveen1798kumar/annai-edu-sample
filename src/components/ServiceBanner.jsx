import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function ServiceBanner({ backgroundImage, title, subtitle, currentPage }) {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };
  
  return (
    <div className="relative h-auto min-h-[400px] m-2 md:m-6 w-auto rounded-lg overflow-hidden">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white text-center bg-black bg-opacity-50">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
        <nav className="mt-8 flex items-center space-x-3 text-white text-lg md:text-2xl font-semibold">
        <Link to="/" className="flex items-center hover:text-gray-400 transition duration-300">
              <FaHome className="mr-2" />
              <span className="underline">Home</span>
              </Link>
              <span className="text-gray-400">/</span>
        <Link to='/services'><span className="text-gray-100 hover:underline" onClick={handleScrollToTop}>Services</span></Link>
              <span className="text-gray-400">/</span>
              {currentPage && (
                            <>
                              <span className="text-gray-100">{currentPage}</span>
                            </>
                          )}
        </nav>
      </div>
    </div>
  );
}

export default ServiceBanner;

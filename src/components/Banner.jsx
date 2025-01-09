import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Banner = ({ backgroundImage, title, subtitle, currentPage }) => {
  return (
<section className="relative min-h-[80vh] flex items-center justify-center">
  {/* Background Image with Black & White Gradient */}
  <div
    className="absolute inset-0 bg-cover bg-top"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      filter: 'grayscale(100%)',
    }}
  >
    {/* Enhanced Black Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black opacity-90" />
  </div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-center text-center px-6 py-12">
    {/* Title */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg shadow-black  transition-all duration-500 ease-in-out">
      <span className=" px-4 py-2 rounded-lg hover:text-gradient-to-r hover:text-blue-200 hover:via-blue-400 hover:to-blue-500 ">{title}</span>
    </h1>

    {/* Subtitle */}
    {subtitle && (
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-6 drop-shadow-md shadow-black bg-black/40 px-4 py-2 rounded-md">
        {subtitle}
      </p>
    )}

    {/* Breadcrumb Navigation */}
    <nav className="mt-8 flex items-center space-x-3 text-white text-lg md:text-2xl font-semibold">
      <Link to="/" className="flex items-center hover:text-gray-400 transition duration-300">
        <FaHome className="mr-2" />
        <span className="underline">Home</span>
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-100">{currentPage}</span>
    </nav>
  </div>
</section>

  );
};

export default Banner;

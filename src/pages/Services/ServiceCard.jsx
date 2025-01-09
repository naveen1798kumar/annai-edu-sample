import React from 'react';

function ServiceCard({ title, description, icon, link }) {
  return (
    <div
      className="group bg-gray-200 hover:bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-lg shadow-xl rounded-xl p-8 hover:scale-105 transition-transform duration-300 border border-white/20"
      data-aos="fade-up"
    >
      {/* Icon */}
      <div className="bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mx-auto w-24 h-24 flex items-center justify-center transition-all duration-300">
        {/* <img
          src={icon}
          alt={title}
          className="h-full w-full rounded-full"
        /> */}
         <i className={`${icon} text-white text-2xl group-hover:scale-115`} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 text-center mt-6">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center mt-4 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <a href={link} className="flex justify-center mt-6">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Learn More
        </button>
      </a>
    </div>
  );
}

export default ServiceCard;

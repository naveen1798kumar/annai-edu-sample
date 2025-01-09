import React from 'react';
import { Link } from 'react-router-dom';
import Donate from '../../assets/donate-bg.jpg'; // Ensure correct image path

const GetInvolvedSection = () => {
  return (
    <section
      className="relative py-20 bg-blue-600 text-white text-center bg-cover bg-fixed bg-no-repeat bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${Donate})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text mb-6">
          Contribute to Our Cause
        </h2>

        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Join Us in Making a Difference</h3>
        
        <p className="mb-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Support Annai Trust by volunteering, donating, or spreading the word about our initiatives. Your support helps us continue our mission of empowering communities and changing lives. Any contribution, big or small, makes a difference.
        </p>

        <p className="mb-6 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Support our mission by donating or reaching out to us for more information.
        </p>

        <div className="flex  justify-center gap-4 sm:gap-8 mt-10">
          {/* Donate Button with Routing */}
          <Link to="/donation" className="w-full sm:w-auto">
            <button className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-yellow-400 hover:shadow-xl transition duration-300 transform hover:scale-105">
              Donate
            </button>
          </Link>

          {/* Contact Us Button with Routing */}
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;

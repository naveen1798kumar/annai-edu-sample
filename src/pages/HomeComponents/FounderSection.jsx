import { Link } from 'react-router-dom'; // Ensure you're using React Router for navigation
import founderImage from '../../assets/founder.jpg'; // Replace with your actual image path
import { FaHandsHelping, FaHome, FaGraduationCap } from 'react-icons/fa'; 

const FounderSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8 space-y-8 md:space-y-0">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6 animate__animated animate__fadeIn">
            Founder’s Message
          </h2>
          <p className="text-xl text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">
            K.Ravichandran, Founder of Annni Educational Trust
          </p>

          {/* List of Points with Icons */}
          <ul className="space-y-6 text-lg text-gray-600 mb-8">
            <li className="flex items-start space-x-4">
              <FaHandsHelping className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold">Compassion and Service</p>
                <p>"I firmly believe that true societal transformation can only be achieved through compassion, service, and education. At Annni Educational Trust, we are dedicated to reaching out to the most vulnerable members of our society without access to proper education."</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaHome className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold">Shelter and Empowerment</p>
                <p>"We provide not only shelter and care but also the necessary tools for self-empowerment, enabling individuals to build a brighter future."</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaGraduationCap className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold">Education for Transformation</p>
                <p>"I am confident that the people we rescue today and those we empower through education will soon become the leaders, advocates, and change-makers who will drive positive change in their communities."</p>
              </div>
            </li>
          </ul>

          {/* Motivational Text */}
          <p className="text-lg text-gray-600 mb-6 italic animate__animated animate__fadeIn animate__delay-2s">
            "Together, with your support, we can create a world where no one is left behind, where each person has the opportunity to rise and make a difference."
          </p>

          {/* Call to Action Button */}
          <Link to="/about-founder">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg transition transform hover:bg-blue-700 hover:scale-105 focus:outline-none shadow-lg hover:shadow-2xl">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={founderImage}
            alt="Founder"
            className="w-full md:w-10/12 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default FounderSection;

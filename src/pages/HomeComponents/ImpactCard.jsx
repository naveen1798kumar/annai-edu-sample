import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ImpactCard = ({ image, title, description, link }) => (

  <div
    className="group relative w-full h-80 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:shadow-2xl"
    data-aos="fade-up"
  >
    {/* Background Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 "
    />

    {/* Sliding Overlay */}
    <div className="absolute inset-0 bg-black/50 transition-transform duration-500 transform group-hover:translate-x-0 translate-x-full"></div>

    <div className="absolute inset-0 inset-y-0 left-0 group-hover:-translate-x-full transition-all duration-800">
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/30">
      <div className="absolute left-6 bottom-6 flex items-center space-x-4 text-white text-lg md:text-2xl font-semibold">
        <FaArrowRight className="text-blue-500 text-xl md:text-3xl" />
        <span>{title}</span>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="absolute inset-y-0 right-0 bg-white w-3/5 p-6 rounded-l-lg shadow-lg transform transition-transform duration-800 translate-x-full group-hover:translate-x-0">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
      <Link to={link}>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

export default ImpactCard;

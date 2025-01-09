import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import ServiceBanner from '../components/ServiceBanner';
import serviceDetails from '../data/serviceDetails';
import Img from '../assets/slider2.jpg'; // Generic image, can be customized per service
// import { useState } from 'react';

function ServiceDetail() {
  const { serviceId } = useParams(); // Dynamic route parameter
  const service = serviceDetails[serviceId];

  if (!service) {
    return <p className="text-center text-red-500 mt-20">Service not found!</p>;
  }

    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleDescription = (index) => {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
  return (
    <div className="service-detail-page">
      {/* SEO Optimization */}
      <Helmet>
        <title>{service.title} - Annai Educational Trust</title>
        <meta name="description" content={service.subtitle} />
      </Helmet>

      {/* Banner Section */}
      <ServiceBanner
        backgroundImage={Img}
        title={service.title}
        subtitle={service.subtitle}
        currentPage={service.title}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Home</Link> &gt; 
          <Link to="/services" className="hover:text-blue-600"> Services</Link> &gt; 
          <span className="text-blue-600"> {service.title}</span>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Related Programs</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to={`/services/vocationalTraining`}
                className="block text-sm text-gray-700 hover:text-blue-600"
              >
                Vocational Training
              </Link>
            </li>
            <li>
              <Link
                to={`/services/paramedical`}
                className="block text-sm text-gray-700 hover:text-blue-600"
              >
                Educational Courses
              </Link>
            </li>
            <li>
              <Link
                to={`/services/shelter`}
                className="block text-sm text-gray-700 hover:text-blue-600"
              >
                Homeless Rescue
              </Link>
            </li>
            <li>
              <Link
                to={`/services/bloodBank`}
                className="block text-sm text-gray-700 hover:text-blue-600"
              >
                Blood Bank
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Details */}
        <section className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{service.description}</p>

          <div className="relative bg-black w-full max-h-[250px] h-auto my-10 border rounded-xl overflow-hidden">
  {/* Banner Image */}
  <img
    src={service.banner}
    alt={service.title || "Service Banner"}
    className="w-full h-full object-cover object-bottom"
  />
</div>

          {/* Related Programs Grid */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Explore Our Programs</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {service.relatedPrograms.map((program, idx) => (
        <li
          key={idx}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-4 transition-transform duration-300"
        >
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-2">{program.name}</h3>
            {expandedIndex === idx && (
              <p className="text-sm text-gray-600 mb-4">
                {program.detailedDescription}
              </p>
            )}
            <button
              onClick={() => toggleDescription(idx)}
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2"
            >
              {expandedIndex === idx ? "Show Less" : "Learn More"}
            </button>
          </div>
        </li>
      ))}
    </ul>
        </section>
      </div>
    </div>
  );
}

export default ServiceDetail;

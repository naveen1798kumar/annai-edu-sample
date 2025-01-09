import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import GetInvolvedSection from "../pages/HomeComponents/GetInvolvedSection"
import ServiceCard from "./Services/ServiceCard"
// import categories from '../data/categories';
// import serviceDetails from '../data/serviceDetails';
import { serviceDetails, categories } from '../data/services';

import Img from "../assets/banner-service.jpg";

import ServiceImg1 from "../assets/vocational-training.jpg"
import ServiceImg2 from "../assets/shelter.jpg"
import ServiceImg3 from "../assets/annai-paramedical.jpg"
import ServiceImg4 from "../assets/blood-bank.jpg"

function Services() {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

    React.useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

  return (
    <div className="services-page">
      {/* SEO Optimization */}
      <Helmet>
        <title>Our Services - Annai Educational Trust</title>
        <meta
          name="description"
          content="Discover a wide range of services offered by Annai Educational Trust, from vocational training and shelter for the homeless to specialized courses in hotel management and computer education."
        />
        <meta name="keywords" content="Vocational Training, Shelter, Para Medical, Blood Bank, Hotel Management, Computer Education, Annai Educational Trust" />
      </Helmet>

      {/* Banner Section */}
      <Banner
        backgroundImage={Img}
        title="Our Services"
        subtitle="Empowering Communities with Compassion and Care"
        currentPage="Services"
      />

{/* Categories Section */}
<section className="py-12 px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
          {categories.map((category, index) => (
            <ServiceCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              link={category.link}
            />
          ))}
        </div>
      </section>

      {/* Vocational Training Section */}
      <section className="py-16 bg-gray-100" id="vocational" data-aos="fade-up">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <img
              src={ServiceImg1}
              alt="Vocational Training"
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Vocational & Educational Training</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our vocational training programs empower individuals with essential skills in various trades, enabling them to secure sustainable employment. Courses include tailoring, computer skills, electrical work, and more, ensuring participants gain practical knowledge.
            </p>
            <p className="text-lg text-gray-700">
              Additionally, we partner with local businesses to provide internship opportunities for hands-on learning and practical application of skills.
            </p>
            <Link to="/services/vocationalTraining" onClick={handleScrollToTop} className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-transform">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Shelter for Homeless Section */}
      <section className="py-16 bg-white" id="shelter" data-aos="fade-right">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Shelter for Homeless People</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide a safe haven for homeless individuals, offering not just shelter but also support services like food, clothing, and healthcare. Our mission is to restore dignity and hope to those in need.
            </p>
            <p className="text-lg text-gray-700">
              Our shelter programs include counseling and job placement services, helping individuals transition to independent living.
            </p>
            <Link to="/services/shelter" onClick={handleScrollToTop} className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-transform">
              Read More
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={ServiceImg2}
              alt="Shelter for Homeless"
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Additional Courses Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Educational Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Add AOS for individual course cards */}
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform" data-aos="zoom-in">
              <h3 className="text-3xl font-bold mb-4 text-blue-700">Hotel Management</h3>
              <p className="text-lg text-gray-700">
                Learn the art of hospitality with our hotel management courses. Topics include guest services, food preparation, and front-office management.
              </p>
            </div>
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform" data-aos="zoom-in">
              <h3 className="text-3xl font-bold mb-4 text-blue-700">Catering Technology</h3>
              <p className="text-lg text-gray-700">
                Our catering courses teach modern techniques and culinary skills for a career in the food and beverage industry.
              </p>
            </div>
            <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform" data-aos="zoom-in">
              <h3 className="text-3xl font-bold mb-4 text-blue-700">Computer Education</h3>
              <p className="text-lg text-gray-700">
                Our computer education programs cover essential skills in IT, coding, and digital tools. We aim to bridge the digital divide and equip learners with the expertise required in the modern workplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para Medical Section */}
      <section className="py-16 bg-white" data-aos="fade-left" id='paramedical'>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <img
              src={ServiceImg3}
              alt="Annai Para Medical"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Annai Para Medical</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Para Medical services provide critical healthcare support in underprivileged areas. With trained professionals, we offer first aid, basic medical assistance, and health camps to promote community well-being.
            </p>
            <Link to="/services/paramedical" onClick={handleScrollToTop} className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-transform">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Blood Bank Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-up" id='blood-bank'>
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Blood Bank</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Blood Bank initiative is dedicated to saving lives by maintaining a steady supply of blood for emergencies. We organize regular blood donation camps and collaborate with hospitals to meet urgent blood requirements.
            </p>
            <Link to="/services/bloodBank" onClick={handleScrollToTop} className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transition-transform">
              Read More
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src={ServiceImg4}
              alt="Blood Bank"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

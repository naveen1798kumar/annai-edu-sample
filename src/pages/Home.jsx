import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './HomeComponents/Hero';
import About from '../assets/slider2.jpg';
import GetInvolvedSection from "../pages/HomeComponents/GetInvolvedSection"
import ImpactSection from "../pages/HomeComponents/ImpactSection"
import AchievementsSection from './HomeComponents/AchievementsSection';
import axios from 'axios';
import FounderSection from './HomeComponents/FounderSection';
import BlogEvents from './HomeComponents/BlogEvents';
import BlogEvent from './HomeComponents/BlogEvent';
import SupportingAgencies from './HomeComponents/SupportingAgencies';
import NewsSection from './HomeComponents/NewsSection';


const Home = () => {
  const [upComingEvents, setUpComingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      <Helmet>
        <title>Home - Annai Educational Trust</title>
        <meta
          name="description"
          content="Annai Educational Trust supports community health with Nursing, Paramedical, and Blood Donation services."
        />
      </Helmet>

      {/* Main H1 for SEO */}
      <h1 className="sr-only">Annai Educational Trust - Nursing, Paramedical, and Blood Donation Services</h1>
      {/* Hero Section with Parallax Effect */}
      <Hero />

      {/* About Us Section */}
      <section className="w-full p-8 md:p-16 bg-gradient-to-r from-blue-50 to-gray-200" data-aos="fade-up">
        <div className="w-full mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="md:w-1/2 w-full h-full" data-aos="zoom-in">
              <img
                src={About}
                alt="About Annai Educational Trust"
                className="w-full h-[300px] md:h-[450px] object-cover shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full p-6 md:p-8 bg-white rounded-lg shadow-lg" data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text text-transparent mb-6">Welcome to Annai</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className='font-bold text-blue-700 capitalize'>Annai Group of Institutions</span> is a multifaceted organization dedicated to <span>education, healthcare, and community welfare</span>. The institute has transformed the lives of over 3,000 students and their families through <span  className='font-bold text-blue-700 capitalize'>skill development and job-oriented training</span>. 
                <br /><br />
                Beyond education and healthcare, the organization actively contributes to <span  className='font-bold text-blue-700 capitalize'>social welfare</span> through medical camps, awareness programs, and initiatives in self-employment, waste management, and skill education. <span  className='font-bold text-blue-700 capitalize'>A Shelter for Urban Homeless</span> in Palani extends food, accommodation, and medical care to destitute individuals.
              </p>
              <Link to='/about' onClick={scrollToTop}>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <AchievementsSection />

      <FounderSection/>

      {/* New Impacts Section */}
      <ImpactSection />

    {/* <BlogEvents/> */}
    <BlogEvent/>

    <GetInvolvedSection />

    <NewsSection/>
    
    {/*  */}
    <SupportingAgencies/>    

    </div>
  );
};

export default Home;

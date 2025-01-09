import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';

import VideoModal from './AboutComponents/VideoModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Img from '../assets/banner-about.jpg';
import BG from '../assets/motherteresa.jpg';
import Banner from '../components/Banner';
// import GetInvolvedSection from "../pages/HomeComponents/GetInvolvedSection"
import FounderImg from '../assets/founder.png'; // Add the founder's image path

import Projects from './AboutComponents/Projects';
import OurImpact from './AboutComponents/OurImpact';
import GetInvolvedSection from '../pages/HomeComponents/GetInvolvedSection';

import Slide1 from "../assets/slide_image_1.jpeg"
import Slide3 from "../assets/slide_image_2.jpg"
import Slide2 from "../assets/slide_image_3.jpg"
import Profile from './AboutComponents/Profile';
import VideoGallery from './AboutComponents/VideoGallery';

const About = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const fetchMembers = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllMembers');
        console.log('Members:', response.data);
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);


  return (
    <div className="bg-gray-50">

    <Helmet>
      <title>About Us - Annai Educational Trust</title>
      <meta
          name="description"
          content="Learn more about Annai Educational Trust, our mission to empower through education, and our impact on communities."
      />
      <meta
          name="keywords"
          content="Annai Educational Trust, Education, Empowerment, Community Support"
      />
      </Helmet>

  {/* Banner Section */}
  <Banner
  backgroundImage={Img}
  title="About Annai Educational Trust"
  subtitle="Empowering individuals through quality education and community support."
  currentPage="About Us"
  />
  
<div className="h-auto py-4 px-6 md:py-6 md:px-12 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 flex items-center justify-center text-center">
  <p className="text-sm sm:text-lg md:text-xl lg:text-3xl font-semibold font-sans  text-gray-700 max-w-4xl">
    "Shelter for Urban Homeless People" <br />
    "Bringing Empowerment through Education"
  </p>
</div>

  {/* Organization Profile */}
  <Profile/>

  {/* Founder Section */}
  <section className=" bg-gradient-to-r from-gray-200 to-white py-16 px-6" id='vocational-training'>
        <div className='flex flex-col items-center'>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6" data-aos="fade-right">Meet Our Visionary Founder</h2>

        <div className="flex flex-col md:flex-row  max-w-6xl ">
         <div className='w-[40%]' data-aos="zoom-in">
          <div className='bg-gray-400 rounded-2xl'>
          <img
            src={FounderImg}
            alt="Founder"
            className=" object-cover mb-6 md:mb-0 md:mr-8 shadow-lg"
          />
          </div>
         </div>

          <div className="w-[60%]  text-lg text-gray-700 leading-relaxed p-5 " data-aos="fade-left">
            <div className='h-full'>
            <p>
              Our founder, <span className="font-bold text-gray-900">K.Ravichandran</span>,
              believes in the transformative power of education. With a lifelong
              commitment to social justice, he has been instrumental in
              empowering communities through access to resources, mentorship,
              and advocacy.
            </p>
            <blockquote className="mt-4 text-blue-600 italic">
              "Education is not just a tool—it’s a foundation for dignity and
              hope."
            </blockquote>

            <button className='bg-blue-700 px-8 py-2 rounded-full text-gray-200 my-3'>Know More</button>
            </div>
          </div>
        </div>
        </div>
  </section>

  {/* Our Team Section */}
  <section className="bg-gradient-to-r from-gray-200 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6" data-aos="fade-right">Our Board of Members</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {loading ? (
            <p className="text-center text-gray-600">Loading team members...</p>
          ) : (
            members.map((member, index) => (              
                <div key={index} className="rounded-lg shadow-lg overflow-hidden  hover:shadow-2xl transition duration-300">
                <img src={member.memberPhoto} alt={member.memberName} className="transform hover:scale-105 transition duration-300 w-full h-56 object-center object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.memberName}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
  </section>

{/* Projects */}
<Projects />

{/* YouTube Video Section */}
<VideoGallery/>

{/* Our Impacts */}
<OurImpact/>

  {/* <GetInvolvedSection/> */}

  </div>
  );
};

export default About;

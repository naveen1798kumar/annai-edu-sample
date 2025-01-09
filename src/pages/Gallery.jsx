import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Img from "../assets/banner-gallery.jpg";
import Banner from '../components/Banner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook to handle navigation

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllEvents');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='bg-gray-200'>
      <Helmet>
        <title>Gallery - Annai Educational Trust</title>
        <meta name="description" content="Explore the gallery of Annai Educational Trust showcasing our events, activities, and community support programs." />
      </Helmet>

      <Banner
        backgroundImage={Img}
        title="Our Gallery"
        subtitle="Capturing moments of impact, empowerment, and community engagement."
        currentPage="Gallery"
      />


      {/* Display Events */}
      <div className="min-h-[100vh] w-[80%] mx-auto p-5 py-10 ">
      <h2 className=" text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6">
          Events Gallery
        </h2>
        {loading ? (
          <p  className="text-center text-gray-400 text-lg mt-6">Loading events...</p>  // Display a loading message while events are being fetched
        ) : (
          <div className="mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 ">
            {Array.isArray(events) && events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event._id}
                  className="group relative bg-white text-black rounded-lg shadow-lg hover:shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105  cursor-pointer "
                  onClick={() => navigate(`/eventImages/${event._id}`)} // Navigate to EventImages page
                >

                {/*  */}
                <div className="relative overflow-hidden">
                  <img src={event.thumbnail} 
                  alt={event.title} 
                  className="w-full h-56  object-cover rounded-t-lg group-hover:opacity-90  group-hover:scale-110 group-hover:rotate-1 group-hover:-translate-y-2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50"></div>
                </div>

                {/*  */}
                  <div className="p-4 bg-white  border-t-8 border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 tracking-wide ">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 font-light line-clamp-2">
                      Click to explore event images.
                    </p>
                  </div>

                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No events found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

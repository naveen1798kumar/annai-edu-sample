import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import BlogImg from '../assets/banner-blog.jpg'; // Your blog banner image
import axios from 'axios';
import { FaCalendarAlt } from 'react-icons/fa';

// Function to slugify the blog title
const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [upComingEvents, setUpComingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({}); // Tracks expanded blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllBlogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchUpComingEvents = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllUpComingEvent');
        setUpComingEvents(response.data);
      } catch (error) {
        console.error('Error fetching UpComing Events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUpComingEvents();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className='bg-gray-200'>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Our Blog - Annai Educational Trust</title>
        <meta name="description" content="Stay updated with the latest news, events, and insights from Annai Educational Trust." />
        <meta name="keywords" content="Annai Educational Trust Blog, Education, Community Support, Events" />
      </Helmet>

      {/* Reusable Banner Component */}
      <Banner
        backgroundImage={BlogImg}
        title="Our Blog"
        subtitle="Latest News, Events, and Educational Insights"
        currentPage="Blog"
      />

      {/* Blog List */}
      <div className="w-full my-20">
        {/*  */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6">Recent Articles</h2>

        {/*  */}
        <div className="w-[80%] h-full mx-auto">
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs found.</p>
          ) : (
            blogs.map((blog) => (
<div
  key={blog._id}
  className="w-full flex flex-col md:flex-row mb-8 shadow-xl rounded-xl bg-white overflow-hidden transition-all duration-300 ease-in-out md:hover:scale-105 hover:shadow-2xl"
  data-aos="fade-right"
>
  {/* Image Section */}
  <div className="w-full md:w-[40%] p-2 overflow-hidden">
    <img
      src={blog.photo}
      alt={blog.title}
      className="w-full h-56 md:h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
    />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-[60%] my-6 p-6 text-justify">
    <p className="text-2xl font-semibold text-gray-800">{blog.title}</p>
    <p className="font-semibold text-gray-500 mt-2">
      {new Date(blog.date).toLocaleDateString("en-GB")}{" "}
      <span className="text-black font-bold ml-2">at</span>{" "}
      {new Date(blog.date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </p>

    {/* Blog Content */}
    <div className={`mt-4 ${expanded[blog._id] ? "" : "line-clamp-4"}`}>
      <p className="text-gray-600">{blog.content}</p>
    </div>

    {/* Read More/Show Less Button */}
    <button
      onClick={() => toggleExpand(blog._id)}
      className="mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
    >
      {expanded[blog._id] ? "Show Less" : "Read More"}
    </button>
  </div>
</div>

            ))
          )}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6">Upcoming Events</h2>
          <p className="text-lg text-gray-600 mb-12">
            Check out our upcoming community and educational events.
          </p>

          {loading ? (
            <p className="text-center text-gray-500">Loading events...</p>
          ) : upComingEvents.length === 0 ? (
            <p className="text-center text-gray-500">No events found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upComingEvents.map((event) => (
                <div
                  key={event._id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                   data-aos="fade-up"
                >
                  <div className="text-blue-500 text-3xl mr-4"><FaCalendarAlt /></div>

                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {event.title}
                    <span className="text-sm text-gray-500 ml-5">
                    {new Date(event.date).toLocaleDateString('en-GB')}{' '}
                    <span className="text-black font-medium">at</span>{' '}
                    {new Date(event.date).toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    })}
                  </span>
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;

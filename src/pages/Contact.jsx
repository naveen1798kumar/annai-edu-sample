import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Img from '../assets/donate-bg.jpg'; // Banner image path
import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://annai-backend.onrender.com/api/admin/addMessage', formData);
      if (response.status === 201) {
        alert('Thank you for your Messaging!');
        setSuccessMessage('Thank you for your Messaging!');
        setFormData({ name: '', email: '', message: '' });
        window.location.reload();
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Annai Educational Trust</title>
        <meta name="description" content="Get in touch with Annai Educational Trust to learn more about our mission and services." />
      </Helmet>

      {/* Banner Section */}
      <section className="relative min-h-[50vh] flex justify-center items-center bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" ></div>
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Contact Annai Educational Trust</h1>
            <p className="mt-4 text-lg text-white text-center">We are here to answer any questions you may have about our trust and services.</p>
          </div>
        </div>
      </section>

      <div className='mt-10'>
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
        Contact & <span className="underline underline-offset-8 decoration-blue-600 font-light">Registeration</span>
      </h1>
      <p className="text-gray-600 max-w-80 text-center mb-8 mx-auto">
        Join us as a volunteer and make a difference!
      </p>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:flex md:space-x-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-8 shadow-xl rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col justify-between mt-12 md:mt-0">
            <div className="bg-white p-8 shadow-xl rounded-xl mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Details</h2>
              <p className="text-gray-600 mb-6">
                Reach out to us through any of the following ways:
              </p>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-3 text-blue-500 text-xl" />
                  <span>Annai Educational Trust, Palani, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhoneAlt className="mr-3 text-blue-500 text-xl" />
                  <span>+91 9865826446</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-3 text-blue-500 text-xl" />
                  <span>info@annaieducationaltrust.org</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white p-8 shadow-xl rounded-xl">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Location</h2>
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.631993977541!2d77.51622437451344!3d10.450748865117585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de6360313ee1%3A0x420bd092b0aab17f!2sAnnai%20Educational%20Trust!5e0!3m2!1sen!2sin!4v1732617140667!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

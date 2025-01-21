import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import BannerImg from "../assets/slider3.jpg"
import DonateQr from "../assets/vcard.jpeg"
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FaAngleDown, FaAngellist, FaAngleUp } from 'react-icons/fa';


const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '', 
    amount: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://annai-backend.onrender.com/api/admin/addDonation', formData);
      if (response.status === 201) {
        alert('Thank you for your donation!');
        setSuccessMessage('Thank you for your donation!');
        setFormData({ name: '', mobileNo: '', amount: '', message: '' });
        window.location.reload();
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const faqs = [
    {
      question: 'What is Annai Educational Trust?',
      answer: 'Annai Educational Trust is a non-profit organization focused on empowering communities through education and healthcare initiatives.',
    },
    {
      question: 'How will my donation be used?',
      answer: 'Your donation supports various projects including scholarships, healthcare camps, and community development programs.',
    },
    {
      question: 'Is my donation tax-deductible?',
      answer: 'Yes, donations to Annai Educational Trust are eligible for tax deductions under Section 80G.',
    },
    {
      question: 'How can I get a receipt?',
      answer: 'A donation receipt will be sent to your mobileNo after processing your donation.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="donation-page py-10">
      <Helmet>
        <title>Donation - Annai Educational Trust</title>
        <meta name="description" content="Support Annai Educational Trust's mission by making a donation." />
      </Helmet>

      {/* Banner Section */}
      <section className="relative min-h-[50vh] flex justify-center items-center bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${BannerImg}")`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" ></div>
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Support Our Mission</h1>
            <p className="mt-4 text-lg text-white text-center">Your support makes a difference in the lives of many.</p>
          </div>
        </div>
      </section>

      <div className='mt-10'>
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">
        Donation <span className="underline underline-offset-8 decoration-blue-600 font-light">Form</span>
      </h1>
      <p className="text-gray-600 max-w-80 text-center mb-8 mx-auto">
        Join us as a volunteer and make a difference!
      </p>
      </div>

      {/* Donation Form Section */}
      <div className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-8 mt-5">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Make a Donation</h2>
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Donor Name"
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mobileNo" className="block text-gray-600 font-medium mb-2">Mobile Number</label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                aria-label="Mobile Number"
                required
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="amount" className="block text-gray-600 font-medium mb-2">Donation Amount ($)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                aria-label="Donation Amount"
                required
                min="1"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-600 font-medium mb-2">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition"
            >
              Donate Now
            </button>
          </form>
        </div>

        {/* Donation Info Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl text-center font-bold mb-4">Other Ways to Donate</h3>
          <div className="mb-6">
            <h4 className="font-semibold text-center">Donate via UPI</h4>
            <img src={DonateQr} alt="UPI QR Code" className="w-56 h-56 mx-auto my-4" />
          </div>
          <div className="mb-6 flex flex-col justify-center">

            <h4 className="font-semibold text-xl underline underline-offset-2 mb-2">Bank Transfer</h4>
            <p><span className="font-semibold">Bank Name:</span>Karur Vysya Bank</p>
            <p><span className="font-semibold">Account Number:</span> 1173155000070050</p>
            <p><span className="font-semibold">IFSC Code:</span>KVBL0001173</p>

          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Visit Us</h4>
            <iframe
              src="https://maps.google.com/maps?q=Palani&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center text-left font-semibold text-lg sm:text-xl text-gray-800 focus:outline-none"
          >
            <span>{faq.question}</span>
            <span className="text-blue-600">
              {activeFAQ === index ? <FaAngleUp size={20} /> : <FaAngleDown  size={20} />}
            </span>
          </button>
          <div
            className={`mt-2 text-gray-700 text-base sm:text-lg overflow-hidden transition-all duration-300 ${
              activeFAQ === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {activeFAQ === index && <p>{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Donation;

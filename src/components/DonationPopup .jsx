import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DonationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to toggle popup visibility
  const togglePopup = () => setIsOpen(!isOpen);

  // Function to navigate to the Donation page
  const navigateToDonation = () => {
    navigate("/donation"); // Navigate to the /donation route
    setIsOpen(false); // Close the popup after navigation
  };

  return (
    <>
      {/* Button to trigger popup */}
      <button
        onClick={togglePopup}
        className="fixed bottom-8 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105 animate-bounce z-[999]" >
        Donate Toggle
      </button>

      {/* Popup Card */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 relative max-w-md w-full">
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-2xl text-gray-600"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              Support Our Cause
            </h2>
            <p className="text-center mb-6">
              Your contribution helps us continue our mission. Every donation counts!
            </p>
            {/* Button to navigate to Donation page */}
            <button
              onClick={navigateToDonation}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full w-full"
            >
              Donate Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationPopup;

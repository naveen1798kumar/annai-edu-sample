import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Accessibility compliance

const VideoModal = ({ videoUrl, thumbnail, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="text-center py-8 px-6">
      <h3
        className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
        data-aos="fade-up"
      >
        {title}
      </h3>
      <div className="relative cursor-pointer" onClick={openModal} data-aos="zoom-in">
        <img
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
          className="rounded-lg shadow-lg w-full max-w-md mx-auto hover:opacity-90 transition duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div
          className="bg-white rounded-lg shadow-lg p-4 max-w-5xl w-full relative"
          style={{
            height: '80vh', // Set the height of the modal to 80% of the viewport height
          }}
        >
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-800 absolute top-4 right-4"
          >
            ✕
          </button>
          <div className="aspect-w-16 aspect-h-9 h-full">
            <iframe
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoModal;

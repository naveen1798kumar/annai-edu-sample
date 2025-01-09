import React, { useState, useEffect } from 'react';
import { useParams,  useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";

const slugify = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  

const EventImages = () => {
    const { eventId } = useParams(); // Get event ID from URL
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const fetchEventImages = async () => {
            try {
                const response = await axios.get(`https://annai-backend.onrender.com/api/admin/getEventImages/${eventId}`);
                setImages(response.data.images); // Images directly from API
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event images:', error);
                setLoading(false);
            }
        };

        fetchEventImages();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [eventId]);

    // Function to open the image modal
    const openModal = (imageUrl) => {
        setCurrentImage(imageUrl);
        setIsModalOpen(true);
    };

    // Function to close the image modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="w-[80%] min-h-screen container mx-auto p-6 mt-[100px]">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Event Images</h2>
            {loading ? (
                <p className='text-gray-600'>Loading images...</p>
            ) : images.length > 0 ? (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative group rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                        onClick={() => openModal(img)}>
                            <img
                                src={img} // Directly use the image URL
                                alt={`Event Image ${idx}`}
                                className="w-full h-64 object-cover rounded-lg group-hover:opacity-80 transition-opacity duration-200"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No images found for this event.</p>
            )}

            {/*  */}
            {/* Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-5"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={currentImage}
                            alt="Full Screen Image"
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        <div className='text-center lg:text-end my-4 mt-8'>
<button
          className=" text-blue-500 p-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold hover:font-bold "
          onClick={() => {
            navigate(`/gallery`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          &larr; Back to Gallery
        </button>
</div>

            
        </div>
    
    
    );
};

export default EventImages;

import React,  { useState, useEffect } from 'react'
import axios from 'axios';


function BlogEvents() {
    const [upComingEvents, setUpComingEvents] = useState([]);
    const [loading, setLoading] = useState(true);

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

  return (
    <>
    
      {/* Upcoming Events Section */}
      <section className="events py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300" data-aos="fade-up">
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6 animate__animated animate__fadeIn underline underline-offset-8 decoration-blue-600">Upcoming Events & Blogs</h2>
      <p className="text-lg text-gray-600">Stay updated with our latest community and educational events.</p>
    </div>

    {/* Event List */}
    <div className="w-full border-t border-gray-300 py-8">
      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Loading State */}
        {loading ? (
          <div className="col-span-full">
            <p className="text-center text-gray-500 animate-pulse">Loading events...</p>
          </div>
        ) : upComingEvents.length === 0 ? (
          /* No Events Found State */
          <div className="col-span-full">
            <p className="text-center text-gray-500">No events found. Stay tuned for updates!</p>
          </div>
        ) : (
          /* Event Cards */
          upComingEvents.map((upComingEvent) => (
            <div
              key={upComingEvent._id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Event Details */}
              <div className="p-6">
                {/* Event Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{upComingEvent.title}</h3>
                {/* Event Date */}
                <p className="text-gray-500 mb-4">
                  {new Date(upComingEvent.date).toLocaleDateString("en-GB", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  at{" "}
                  {new Date(upComingEvent.date).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                {/* Event Description */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {upComingEvent.description || "No additional details available for this event."}
                </p>
              </div>
              {/* Event Footer */}
              <div className="bg-gray-50 px-6 py-4 text-right">
                <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default BlogEvents
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
      <section className="events py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="my-4 text-lg mb-8">Check out our upcoming community and educational events.</p>
          {/* Event List */}
          <div className="w-full py-10 border-t border-gray-500">
            <div className="w-[80%] mx-auto h-full">
              {loading ? (
                <p className="text-center text-gray-500">Loading events...</p>
              ) : upComingEvents.length === 0 ? (
                <p className="text-center text-gray-500">No events found.</p>
              ) : (
                upComingEvents.map((upComingEvent) => (
                  <div key={upComingEvent._id} className="w-full flex mb-6 shadow-sm shadow-black rounded-md bg-gray-200">

                    <div className="w-full my-6 px-10 pr-20 text-justify flex justify-between items-center">
                      <div>
                        <p className="text-xl font-bold">{upComingEvent.title}</p>
                        <p className="font-semibold text-gray-500">
                          {new Date(upComingEvent.date).toLocaleDateString("en-GB")}{" "}
                          {new Date(upComingEvent.date).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </p>
                      </div>
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
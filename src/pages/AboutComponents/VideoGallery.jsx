import React from 'react';
import VideoModal from './VideoModal';

import Slide1 from "../../assets/slide_image_1.jpeg"
import Slide3 from "../../assets/slide_image_2.jpg"
import Slide2 from "../../assets/slide_image_3.jpg"

const VideoGallery = () => {
  const videos = [
    {
      videoUrl: 'https://www.youtube.com/embed/mtX616zNKtg',
      thumbnail: Slide1,
      title: 'Our Journey Video',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/RZAZPiwPlck',
      thumbnail: Slide2,
      title: 'Our Journey',
    },
  ];

  return (
    <>
    <div className='container mx-auto max-w-[80%]'>
     <h2
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6"
        data-aos="fade-right"
      >
        Watch our Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
       {videos.map((video, index) => (
         <VideoModal
           key={index}
           videoUrl={video.videoUrl}
           thumbnail={video.thumbnail}
           title={video.title}
         />
       ))}
     </div>
    </div>

    </>
  );
};

export default VideoGallery;

import React from 'react'
import BG from '../../assets/motherteresa.jpg';
import Slide1 from "../../assets/slide_image_1.jpeg";
import Slide3 from "../../assets/slide_image_2.jpg";
import Slide2 from "../../assets/slide_image_3.jpg";

function Profile() {
  return (
    <>
    <section className="bg-gray-400 w-full h-auto bg-cover bg-center min-h-screen"
    style={{
    backgroundImage: `url(${BG})`,
    backgroundAttachment: "fixed",
  }}  
  >
    <div className='w-full h-full py-8 md:py-16 px-4 md:px-6' >
    <div className="max-w-6xl mx-auto bg-white bg-opacity-60 p-4 md:p-8 rounded-lg shadow-md text-lg"
    data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6">Organization Profile</h2>
          <p className="text-lg leading-relaxed mb-4">
      Annai Educational Trust is a non-profit public charitable trust registered
      under the Indian Trust Act, founded in 2001. The organization is dedicated
      to serving neglected, uncared, and disadvantaged communities dependent on
      agriculture and forest resources for their livelihood. Annai Educational
      Trust aims to uplift marginalized communities without discrimination by
      providing sustainable livelihood opportunities, education, and skill
      development.
    </p>
    <p className="text-lg  leading-relaxed mb-4">
      The Trust focuses on empowering women and child welfare, self-help group
      formation, health care, environmental awareness, sanitation, rural women
      education, and mother and child care. Over the years, it has initiated
      numerous socio-economic activities, such as skill training, leadership
      development, and entrepreneurship programs, ensuring a positive impact on
      disadvantaged communities.
    </p>
    <ul className="list-disc list-inside leading-relaxed mb-4">
      <li>Sustainable livelihood security through eco-friendly technologies</li>
      <li>Empowerment of marginalized communities</li>
      <li>Skill-based training and income generation programs</li>
      <li>Health and hygiene awareness</li>
      <li>Rehabilitation and education support for drop-out children</li>
      <li>Capacity building for NGOs in semi-arid, drought-prone regions</li>
    </ul>
    <p className="text-lg  leading-relaxed">
      Annai Educational Trust remains committed to promoting health care,
      education, social inclusion, and agricultural livelihood programs,
      ensuring a sustainable future for the rural poor and marginalized.
    </p>
    </div>

    <div className="max-w-6xl mx-auto bg-white bg-opacity-80 my-8 p-8 text-center text-lg shadow-md rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-gray-800 mb-6">
            Annai Educational Trust has organized
            numerous impactful events:
          </h2>
          <ul className="list-disc list-inside text-left mx-auto">
            <li>Blood donation camps that have saved countless lives.</li>
            <li>Shelter initiatives for homeless individuals and families.</li>
            <li>Vocational training centers for skill development.</li>
            <li>
              Annai Paramedical - A program providing healthcare education and
              resources.
            </li>
          </ul>
        </div>
 </div>
  </section>

        {/* Three-Image Div Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {/* Card 1 */}
  <div className="relative rounded-xl bg-white bg-opacity-80 group shadow-lg overflow-hidden ">
    <div className='relative overflow-hidden'>
          <img
    src={Slide1} // Replace with your image
    alt="Card Image 1"
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-10"></div>
    </div>

  <div className="p-4 ">
    <h3 className="text-xl font-semibold text-gray-800">Card Title 1</h3>
  </div>
</div>


  {/* Card 2 */}
  <div className="relative rounded-xl bg-white bg-opacity-80 group shadow-lg overflow-hidden ">
    <div className='relative overflow-hidden'>
          <img
    src={Slide2} // Replace with your image
    alt="Card Image 1"
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-10"></div>
    </div>

  <div className="p-4 ">
    <h3 className="text-xl font-semibold text-gray-800">Card Title 1</h3>
  </div>
</div>

  {/* Card 3 */}
  <div className="relative rounded-xl bg-white bg-opacity-80 group shadow-lg overflow-hidden ">
    <div className='relative overflow-hidden'>
          <img
    src={Slide3} // Replace with your image
    alt="Card Image 1"
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-10"></div>
    </div>

  <div className="p-4 ">
    <h3 className="text-xl font-semibold text-gray-800">Card Title 1</h3>
  </div>
</div>
</div>

</>
  )
}

export default Profile
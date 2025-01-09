import React from 'react'
import impact1 from "../../assets/slide_impact_1.jpg"
import impact2 from "../../assets/slide_impact_2.jpg"
import impact3 from "../../assets/slide_impact_3.jpg"

function OurImpact() {
  return (
    <>
        {/* Our Mission/ Impact Section */}
<section className="bg-gradient-to-r from-blue-100 to-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6" data-aos="fade-right">Our Impact</h2>
    <div className="bg-white shadow-lg rounded-lg p-8">
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        At Annai Educational Trust, we are dedicated to addressing the urgent needs of the homeless and underserved in urban areas. Our mission revolves around providing a safe and nurturing environment for individuals who are most in need. We strive to ensure dignity, care, and support to help them rebuild their lives.
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
        <li><span className="font-bold">Shelter for Urban Homeless:</span> Offering 24/7 secured accommodation to those in need.</li>
        <li><span className="font-bold">Rescue and Rehabilitation Services:</span> Immediate rescue operations and holistic rehabilitation programs to ensure safety and well-being.</li>
        <li><span className="font-bold">First-Aid & Medical Services:</span> Timely medical care and first-aid services to address health emergencies.</li>
        <li><span className="font-bold">Nutritious Meals & Separate Beds for All:</span> Ensuring well-balanced meals and individual sleeping arrangements for dignity and comfort.</li>
        <li><span className="font-bold">Counseling Services:</span> Emotional and psychological support through expert counselors to foster mental well-being.</li>
        <li><span className="font-bold">Grooming Services:</span> Basic grooming and hygiene services to restore confidence and self-esteem.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-6">
        By addressing these essential aspects of care, we aim to empower individuals to overcome challenges and lead healthier, safer, and more dignified lives.
      </p>
    </div>

{/* Three-Image Div Card Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {/* Card 1 */}
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={impact1} // Replace with your image
      alt="Card Image 1"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
    <div className="absolute inset-y-0 right-[-100%] group-hover:right-0 bg-black bg-opacity-80 text-white p-4 flex items-center justify-center transition-all duration-500">
      <h3 className="text-lg font-bold">Our Responsibility</h3>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={impact2} // Replace with your image
      alt="Card Image 2"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
    <div className="absolute inset-y-0 right-[-100%] group-hover:right-0 bg-black bg-opacity-80 text-white p-4 flex items-center justify-center transition-all duration-500">
      <h3 className="text-lg font-bold">Our Impacts</h3>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={impact3} // Replace with your image
      alt="Card Image 3"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-80"></div>
    <div className="absolute inset-y-0 right-[-100%] group-hover:right-0 bg-black bg-opacity-80 text-white p-4 flex items-center justify-center transition-all duration-500">
      <h3 className="text-lg font-bold">Join our Impact</h3>
    </div>
  </div>
</div>

  </div>
</section>
</>
  )
}

export default OurImpact
import React from 'react';
import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';

const WhatWeDo = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  const categories = [
    {
      title: 'Social Welfare',
      description: 'Programs to support the homeless and vulnerable.',
      icon: '/icons/social-welfare.png',
      programs: [
        'Shelter for Urban Homeless Palani Inauguration',
        'Homeless Rescue Program',
        'Rehabilitation for Homeless People Program',
        'Beggar Free Palani Awareness Program',
        'Homeless Day Awareness Program',
      ],
    },
    {
      title: 'Healthcare',
      description: 'Free medical services, health check-ups, and awareness programs.',
      icon: '/icons/healthcare.png',
      programs: [
        'TB Awareness Program',
        'HIV/AIDS Awareness Program',
        'Suicidal Prevention Awareness Program',
        'First Aid Training Program',
        'Blood Donation Camp',
        'Monthly BP and Diabetic Screening Camp @ Shelter',
        'Cleft Lip and Palate Medical Camp',
      ],
    },
    {
      title: 'Education & Vocational Training',
      description: 'Skill development for sustainable livelihoods.',
      icon: '/icons/education.png',
      programs: [
        'Tailoring Program',
        'Beautician Program',
        'Internship Training Program for Social Work Students',
        'Menstrual Hygiene Program',
        'POCSO Awareness Program',
        'Girl Child Awareness Program',
        'Annai Paramedical Institute',
      ],
    },
    {
      title: 'Environmental & Wellness Initiatives',
      description: 'Sustainability efforts for a greener future.',
      icon: '/icons/environment.png',
      programs: ['Tree Plantation Program', 'Clean India Program', 'Yoga Program'],
    },
    {
      title: 'Blood Banks & Initiatives',
      description: 'Organising regular Blood camps and Awarnes.',
      icon: '/icons/awarness.png',
      programs: ['Blood Bank Program'],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      >
        <div className="bg-black bg-opacity-50 text-center text-white px-6 py-12 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">What We Do</h1>
          <p className="text-lg">
            Empowering lives through compassion and impactful programs.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore Our Programs
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Key Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            >
              <img
                src={category.icon}
                alt={category.title}
                className="h-16 w-16 mx-auto"
              />
              <h3 className="text-xl font-bold text-center mt-4">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                {category.description}
              </p>
              <button className="block bg-blue-600 text-white px-4 py-2 rounded-lg mx-auto mt-4">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Section */}
      {categories.map((category, index) => (
        <section
          key={index}
          className={`py-12 px-6 ${
            index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
          }`}
        >
          <h2
            className="text-2xl font-bold mb-6"
            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
          >
            {category.title}
          </h2>
          <p
            className="text-gray-600 mb-8"
            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
          >
            {category.description}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.programs.map((program, idx) => (
              <li
                key={idx}
                className="bg-white shadow-lg rounded-lg p-4"
                data-aos="fade-up"
              >
                <h3 className="text-lg font-bold text-blue-600">{program}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A short description of the program goes here, explaining its
                  purpose and impact.
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}

    </div>
  );
};

export default WhatWeDo;

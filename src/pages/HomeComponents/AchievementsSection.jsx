import CountUp from 'react-countup';
import { FaUsers, FaHandsHelping, FaAmbulance } from 'react-icons/fa'; // For icons

const AchievementsSection = () => {
  // Array of achievements data
  const achievements = [
    {
      id: 1,
      icon: <FaHandsHelping className="text-4xl text-blue-600 transition" />,
      count: 3000,
      title: 'Blood Donations',
      description:
        'Supporting life-saving blood donations in our community, contributing to critical healthcare needs.',
      aos: 'flip-up',
    },
    {
      id: 2,
      icon: <FaHandsHelping className="text-4xl text-blue-600 transition" />,
      count: 2000,
      title: 'Homeless Recue',
      description:
      'Providing support, shelter, and resources to homeless individuals in our community, restoring dignity and hope.',
      aos: 'flip-up',
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-blue-600 transition" />,
      count: 500,
      title: 'Nursing Graduates',
      description:
        'Empowering healthcare professionals since our inception, providing quality education and skill development.',
      aos: 'flip-left',
    },
    {
      id: 4,
      icon: <FaAmbulance className="text-4xl text-blue-600 transition" />,
      count: 200,
      title: 'Paramedical Students',
      description:
        'Training future healthcare experts for community service, enhancing medical response capabilities.',
      aos: 'flip-right',
    },
    {
      id: 5,
      icon: <FaHandsHelping className="text-4xl text-blue-600 transition" />,
      count: 150,
      title: 'Community Programs',
      description:
        'Engaging with the community through awareness programs, medical camps, and self-help initiatives.',
      aos: 'flip-left',
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 to-gray-100" data-aos="fade-up">
      <div className="container mx-auto text-center w-full md:max-w-[80%]">
        {/* Heading and Subtitle */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500  to-pink-500 bg-clip-text text-transparent mb-4">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Making a lasting impact in our community with dedicated services and initiatives.
        </p>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the achievements array to create the cards */}
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="impact-card group relative p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos={achievement.aos}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
              <div className="flex items-center space-x-4 mb-4">
                {achievement.icon}
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  <CountUp end={achievement.count} duration={2} />+ {achievement.title}
                </h3>
              </div>
              <p className="mt-4 text-left text-gray-600 group-hover:text-gray-800 transition">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

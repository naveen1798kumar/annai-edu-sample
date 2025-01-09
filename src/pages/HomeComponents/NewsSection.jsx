import React from 'react';
import Article1 from "../../assets/article_1.jpg"
import Article2 from "../../assets/article_2.jpg"
import Article3 from "../../assets/article_3.jpg"
import Article4 from "../../assets/article_4.jpg"

const NewsSection = () => {
  const articles = [
    {
      id: 1,
      title: 'Our Latest Product Launch',
      description: 'We successfully launched our new product, which has already received excellent feedback from users.',
      date: 'January 1, 2025',
      image: Article1,
    },
    {
      id: 2,
      title: 'Partnership Announcement',
      description: 'We are excited to announce our partnership with XYZ Corp to expand our services.',
      date: 'December 15, 2024',
      image: Article2,
    },
    {
      id: 3,
      title: 'Community Event Success',
      description: 'Our recent community event brought together over 500 attendees to share ideas and collaborate.',
      date: 'November 30, 2024',
      image: Article3,
    },
    {
      id: 4,
      title: 'Award Recognition',
      description: 'We were honored with the Best Innovation Award for 2024!',
      date: 'October 20, 2024',
      image: Article4,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white to-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-10">
          Latest News & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group relative rounded-lg overflow-hidden hover:shadow-xl transition-all  duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="group-hover:scale-105 w-full h-full object-cover transition-all  duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="absolute bottom-0 p-4 text-white">
                  {/* <h3 className="text-xl font-semibold">{article.title}</h3> */}
                  <p className="text-sm mt-2">{article.description}</p>
                  {/* <p className="text-xs mt-2 text-gray-300">{article.date}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

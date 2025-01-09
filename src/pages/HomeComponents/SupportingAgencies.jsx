import React from 'react';
import SupportImg1 from "../../assets/Supports/Supporters 1.png";
import SupportImg2 from "../../assets/Supports/Supporters 2.png";
import SupportImg3 from "../../assets/Supports/Supporters 3.png";

const SupportingAgencies = () => {
  const agencies = [
    { name: "VCVRT", logo: SupportImg1 },
    { name: "BSS", logo: SupportImg2 },
    { name: "SSA", logo: SupportImg1 },
    { name: "TECNO Park", logo: SupportImg2 },
    { name: "ITI", logo: "https://via.placeholder.com/150" },
    { name: "Palani Municipality", logo: SupportImg3 },
    { name: "DAY-NULM", logo: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-8">
        Our Brand Partners
      </h2>
      <div className="overflow-hidden">
        {/* Infinite Scroll Wrapper */}
        <div className="flex gap-6 animate-scroll">
          {agencies.concat(agencies).map((agency, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] h-[350px] bg-transparent rounded-lg p-4 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={agency.logo}
                alt={agency.name}
                className="w-full h-[200px] object-contain mb-4"
              />
              <p className="text-xl capitalize font-semibold text-gray-700 text-center">{agency.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingAgencies;

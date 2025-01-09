import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Img from "../../assets/slider2.jpg";
import ServiceImg1 from "../../assets/vocational-training.jpg";
import ServiceImg2 from "../../assets/shelter.jpg";
import ServiceImg3 from "../../assets/annai-paramedical.jpg";
import ServiceImg4 from "../../assets/blood-bank.jpg";
import ImpactCard from "./ImpactCard";

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const programs = [
    {
      image: ServiceImg1,
      title: "Vocational Training",
      description: "Providing skill-based training to empower the underprivileged.",
      link: "/services#vocational-training",
    },
    {
      image: ServiceImg2,
      title: "Shelter for Homeless",
      description: "Offering a safe haven for the homeless and needy.",
      link: "/services#shelter",
    },
    {
      image: ServiceImg3,
      title: "Annai Paramedical",
      description: "Dedicated to training the next generation of healthcare professionals.",
      link: "/services#annai-paramedical",
    },
    {
      image: ServiceImg4,
      title: "Blood Bank",
      description: "A life-saving initiative, ensuring a constant supply of blood.",
      link: "/services#blood-bank",
    },
  ];

  return (
    <section
      className="py-16 text-white relative bg-cover bg-fixed bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>

      <div className="container mx-auto max-w-screen-lg relative z-10 text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6 animate__animated animate__fadeIn underline underline-offset-8 decoration-blue-600">Our Other Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-5">
          {programs.map((program, index) => (
            <ImpactCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
              link={program.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

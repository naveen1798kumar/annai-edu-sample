import React from 'react';
import Image1 from "../../assets/training/tailoring.jpg"
import Image2 from "../../assets/training/school-dropout.jpg"
import Image3 from "../../assets/training/vocational-training.jpg"
import Image4 from "../../assets/training/environmental-awarness.jpg"
import Image5 from "../../assets/training/women-and-child.jpg"
import Image6 from "../../assets/training/child-edu.jpg"

const projects = [
  {
    id: 1,
    title: 'Tailoring Training',
    description: 'Conducted tailoring training with placement under the MORD-SGSY special project (SEAM II) during 2012-2013.',
    image: Image1,
  },
  {
    id: 2,
    title: 'School Drop-Out Rehabilitation',
    description: 'Mainstreaming school drop-out children with funding support from SSA, Govt. of India, in 2012.',
    image: Image2,
  },
  {
    id: 3,
    title: 'Vocational Training',
    description: 'Provided training in nursing, lab-technician, and computer skills, empowering youths for better employment (2011-2012).',
    image: Image3,
  },
  {
    id: 4,
    title: 'Environmental Awareness',
    description: 'Conducted awareness campaigns on environmental protection and waste management in rural areas.',
    image: Image4,
  },
  {
    id: 5,
    title: 'Women & Child Rights Advocacy',
    description: 'Advocated for women and child rights through workshops, seminars, and community-level engagements.',
    image: Image5,
  },
  {
    id: 6,
    title: 'Child Education',
    description: 'Supporting education for children in marginalized communities to ensure a brighter future.',
    image: Image6,
  },
];

function Projects() {
  return (
    <>
      {/* Projects */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 underline underline-offset-8 decoration-blue-600 mb-6" data-aos="fade-right">Our Projects</h2>

          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            Over the years, we have successfully implemented various initiatives aimed at empowering communities and improving lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="group-hover:scale-110 duration-300 w-full h-56 object-center object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 duration-300">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;

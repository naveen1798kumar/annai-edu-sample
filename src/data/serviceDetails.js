import ServiceImg1 from '../assets/vocational-training.jpg';
import ServiceImg2 from '../assets/shelter.jpg';
import ServiceImg3 from '../assets/annai-paramedical.jpg';
import ServiceImg4 from '../assets/blood-bank.jpg';

// vocational trainings
import beautician from "../assets/programs/vocational-training-beautician.jpg"
import tailoring from "../assets/programs/vocational-training-tailoring.jpg"
import internship from "../assets/programs/vocational-training-internship.jpg"
import childAwarness from "../assets/programs/vocational-training-child-awarness.jpg"
import paramedical from "../assets/programs/vocational-training-paramedical.jpg"
import training from "../assets/programs/vocational-hygein-training.jpg"

// paramedicl
import nursing from "../assets/programs/diploma-training-nursing.jpg"
import labTechnology from "../assets/programs/diploma-training-labassistant.jpg"
import pharmacy from "../assets/programs/diploma-training-pharmacy.jpg"
import xRay from "../assets/programs/vocational-training-tailoring.jpg"
import TB from "../assets/programs/diploma-training-hiv.jpg"
import AIDS from "../assets/programs/diploma-training-hiv.jpg"
import firstAid from "../assets/programs/diploma-training-first-aid.jpg"
import palate from "../assets/programs/vocational-training-tailoring.jpg"

// blood-bank
import bloodBank from "../assets/programs/blood-bank-awareness.jpg"

import vocationalBanner from "../assets/programs/service-banner-training.jpg"
import paramedicalBanner from "../assets/programs/service-banner-paramedical.jpg"
import rescueBanner from "../assets/programs/service-banner-homeless-rescue.jpg"
import bloodBankBanner from "../assets/programs/service-banner-bloodbank.jpg"

const serviceDetails = {
  vocationalTraining: {
    title: 'Vocational Training',
    subtitle: 'Empowering Lives Through Skill Development',
    description: 'Our vocational training programs empower individuals with essential skills in various trades, enabling them to secure sustainable employment. Courses include tailoring, computer skills, electrical work, and more, ensuring participants gain practical knowledge.',
    relatedPrograms: [
      {
        name: 'Tailoring Program',
        image: tailoring,
        detailedDescription: 'This program teaches participants the art of tailoring, including pattern making, stitching, and garment creation. Participants gain hands-on experience and can start their own tailoring businesses or secure employment in the fashion industry.'
      },
      {
        name: 'Beautician Program',
        image: beautician,
        detailedDescription: 'Our Beautician Program equips individuals with skills in makeup, skincare, and hairstyling. Graduates are prepared to work in salons or start their own beauty ventures.'
      },
      {
        name: 'Internship Training Program for Social Work Students',
        image: internship,
        detailedDescription: 'This program provides practical exposure to social work students, allowing them to understand the challenges faced by underprivileged communities and develop effective intervention strategies.'
      },
      {
        name: 'Menstrual Hygiene Program',
        image: training,
        detailedDescription: 'Focused on creating awareness about menstrual hygiene, this program educates women and girls on maintaining health and dignity during menstruation. It also distributes sanitary products to those in need.'
      },
      // {
      //   name: 'POCSO Awareness Program',
      //   image: '/images/pocso.jpg',
      //   detailedDescription: 'The POCSO (Protection of Children from Sexual Offenses) Awareness Program educates communities about child protection laws and helps prevent child abuse through workshops and campaigns.'
      // },
      {
        name: 'Girl Child Awareness Program',
        image: childAwarness,
        detailedDescription: 'This program promotes the importance of education and empowerment for girl children, aiming to reduce gender disparities and create equal opportunities for growth. (Protection of Children from Sexual Offenses) Awareness Program educates communities about child protection laws and helps prevent child abuse through workshops and campaigns'
      },
      {
        name: 'Annai Paramedical Institute',
        image: paramedical,
        detailedDescription: 'The institute offers specialized paramedical courses to train individuals in healthcare services, contributing to better community health outcomes.'
      },
    ],
    category: 'Education & Vocational Training',
    categoryDescription: 'Skill development for sustainable livelihoods.',
    categoryIcon: '/icons/environment.png',
    image: ServiceImg1,
    banner:vocationalBanner
  },

  /*************************************************************************/ 

  shelter: {
    title: 'Shelter for Homeless People',
    subtitle: 'A Safe Haven for Those in Need',
    description: 'We provide a safe haven for homeless individuals, offering not just shelter but also support services like food, clothing, and healthcare. Our mission is to restore dignity and hope to those in need.',
    relatedPrograms: [
      {
        name: 'Shelter for Urban Homeless Palani Inauguration',
        image: '/images/homeless-inauguration.jpg',
        detailedDescription: 'This event marked the inauguration of a dedicated shelter for urban homeless individuals in Palani, providing them with a safe space to live and access basic services.'
      },
      {
        name: 'Homeless Rescue Program',
        image: '/images/homeless-rescue.jpg',
        detailedDescription: 'The program focuses on rescuing homeless individuals from streets and unsafe environments, offering them immediate care and shelter.'
      },
      {
        name: 'Rehabilitation for Homeless People Program',
        image: '/images/rehabilitation.jpg',
        detailedDescription: 'This program helps homeless individuals reintegrate into society by providing vocational training, counseling, and job placement assistance.'
      },
      {
        name: 'Beggar Free Palani Awareness Program',
        image: '/images/beggar-free.jpg',
        detailedDescription: 'An initiative to raise awareness about eliminating begging by providing alternative livelihood opportunities and support for vulnerable individuals.'
      },
      {
        name: 'Homeless Day Awareness Program',
        image: '/images/homeless-day.jpg',
        detailedDescription: 'This program aims to highlight the plight of homeless individuals and encourage community participation in addressing homelessness.'
      },
    ],
    category: 'Social Welfare',
    categoryDescription: 'Programs to support the homeless and vulnerable.',
    categoryIcon: '/icons/social-welfare.png',
    image: ServiceImg2,
    banner:rescueBanner
  },

  /*****************************************************************/ 

  paramedical: {
    title: 'Annai Paramedical Institute',
    subtitle: 'Shaping the Future of Healthcare Professionals',
    description: 'Annai Paramedical Institute provides comprehensive healthcare training programs aimed at equipping students with the skills needed for a successful career in the medical field. Recognized by the VCVRT Educational Council and the Government of India, the institute has trained over 2000 students with a 100% employment success rate.',
    relatedPrograms: [
      {
        name: 'Diploma in Nursing Assistant (Nursing)',
        image: nursing,
        detailedDescription: 'A 2-year program that trains students in patient care, basic nursing procedures, and healthcare essentials, preparing them for roles in hospitals, clinics, and home healthcare.'
      },
      {
        name: 'Diploma in Medical Lab Technology (DMLT)',
        image: labTechnology,
        detailedDescription: 'A 2-year program focusing on laboratory techniques, clinical diagnostics, and pathology, enabling students to work as lab technicians in reputed medical labs.'
      },
      {
        name: 'Diploma in Pharmacy Assistant',
        image: pharmacy,
        detailedDescription: 'A 2-year course teaching students pharmaceutical operations, drug dispensing, and healthcare product management, providing opportunities in pharmacies and healthcare facilities.'
      },
      {
        name: 'X-Ray & ECG Technology',
        image: '/images/beggar-free.jpg',
        detailedDescription: 'A specialized 2-year program training students in diagnostic imaging, X-Ray, and ECG techniques to assist in healthcare diagnostics.'
      },
      {
        name: 'TB Awareness Program',
        image: TB,
        detailedDescription: 'This program educates communities about tuberculosis prevention, symptoms, and treatments to reduce its impact.'
      },
      {
        name: 'HIV/AIDS Awareness Program',
        image: AIDS,
        detailedDescription: 'A campaign focused on spreading awareness about HIV/AIDS, reducing stigma, and encouraging preventive measures.'
      },
      {
        name: 'First Aid Training Program',
        image: firstAid,
        detailedDescription: 'A hands-on program teaching essential first aid skills to handle medical emergencies effectively.'
      },
      { 
        name: 'Cleft Lip and Palate Medical Camp',
        image: '/images/beggar-free.jpg',
        detailedDescription: 'A medical camp providing free consultations and surgeries for individuals with cleft lip and palate conditions, improving their quality of life.'
      },
    ],
    category: 'Healthcare Training and Awareness',
    categoryDescription: 'Comprehensive training programs and health awareness initiatives to uplift communities.',
    categoryIcon: '/icons/healthcare.png',
    image: ServiceImg3,
    banner:paramedicalBanner
  },

  /*********************************************************************/ 
  
  bloodBank: {
    title: 'Blood Bank',
    subtitle: 'Saving Lives with Your Contribution',
    description: 'Our Blood Bank initiative is dedicated to saving lives by maintaining a steady supply of blood for emergencies. We organize regular blood donation camps and collaborate with hospitals to meet urgent blood requirements.',
    relatedPrograms: [
      {
        name: 'Blood Bank Program',
        image: bloodBank,
        detailedDescription: 'A comprehensive program ensuring efficient blood collection, storage, and distribution to save lives in emergencies.'
      },
    ],
    category: 'Blood Banks & Initiatives',
    categoryDescription: 'Organizing regular blood camps and awareness.',
    categoryIcon: '/icons/awarness.png',
    image: ServiceImg4,
    banner: bloodBankBanner,
  },
};

export default serviceDetails;

// src/data/categories.js

import ServiceImg1 from '../assets/vocational-training.jpg';
import ServiceImg2 from '../assets/shelter.jpg';
import ServiceImg3 from '../assets/annai-paramedical.jpg';
import ServiceImg4 from '../assets/blood-bank.jpg';

const categories = [
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
      image: ServiceImg1,
    },
    {
      title: 'Social Welfare for Homeless',
      description: 'Programs to support the homeless and vulnerable.',
      icon: '/icons/social-welfare.png',
      programs: [
        'Shelter for Urban Homeless Palani Inauguration',
        'Homeless Rescue Program',
        'Rehabilitation for Homeless People Program',
        'Beggar Free Palani Awareness Program',
        'Homeless Day Awareness Program',
      ],
      image: ServiceImg2,
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
      image: ServiceImg3,
    },
    {
      title: 'Environmental Initiatives',
      description: 'Sustainability efforts for a greener future.',
      icon: '/icons/environment.png',
      programs: ['Tree Plantation Program', 'Clean India Program'],
    },
    {
      title: 'Wellness Programs',
      description: 'Promoting physical and mental well-being.',
      icon: '/icons/wellness.png',
      programs: ['Yoga Program'],
      image: ServiceImg4,
    },
  ];
  
  export default categories;
  
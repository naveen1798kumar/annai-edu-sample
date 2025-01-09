import ServiceImg1 from '../assets/vocational-training.jpg';
import ServiceImg2 from '../assets/shelter.jpg';
import ServiceImg3 from '../assets/annai-paramedical.jpg';
import ServiceImg4 from '../assets/blood-bank.jpg';

const serviceDetails = {
  vocationalTraining: {
    title: 'Vocational Training',
    subtitle: 'Empowering Lives Through Skill Development',
    description: 'Our vocational training programs empower individuals with essential skills in various trades, enabling them to secure sustainable employment. Courses include tailoring, computer skills, electrical work, and more, ensuring participants gain practical knowledge.',
    relatedPrograms: [
      { name: 'Tailoring Program', image: '/images/tailoring.jpg' },
      { name: 'Beautician Program', image: '/images/beautician.jpg' },
      { name: 'Internship Training Program for Social Work Students', image: '/images/internship.jpg' },
      { name: 'Menstrual Hygiene Program', image: '/images/menstrual.jpg' },
      { name: 'POCSO Awareness Program', image: '/images/pocso.jpg' },
      { name: 'Girl Child Awareness Program', image: '/images/girlchild.jpg' },
      { name: 'Annai Paramedical Institute', image: '/images/paramedical.jpg' },
    ],
    category: 'Education & Vocational Training',
    categoryDescription: 'Skill development for sustainable livelihoods.',
    categoryIcon: '/icons/education.png',
    image: ServiceImg1,
  },
  shelter: {
    title: 'Shelter for Homeless People',
    subtitle: 'A Safe Haven for Those in Need',
    description: 'We provide a safe haven for homeless individuals, offering not just shelter but also support services like food, clothing, and healthcare. Our mission is to restore dignity and hope to those in need.',
    relatedPrograms: [
      'Shelter for Urban Homeless Palani Inauguration',
      'Homeless Rescue Program',
      'Rehabilitation for Homeless People Program',
      'Beggar Free Palani Awareness Program',
      'Homeless Day Awareness Program',
    ],
    category: 'Social Welfare',
    categoryDescription: 'Programs to support the homeless and vulnerable.',
    categoryIcon: '/icons/social-welfare.png',
    image: ServiceImg2,
  },
  paraMedical: {
    title: 'Annai Para Medical',
    subtitle: 'Supporting Community Healthcare',
    description: 'Our Para Medical services provide critical healthcare support in underprivileged areas. With trained professionals, we offer first aid, basic medical assistance, and health camps to promote community well-being.',
    relatedPrograms: [
      'TB Awareness Program',
      'HIV/AIDS Awareness Program',
      'Suicidal Prevention Awareness Program',
      'First Aid Training Program',
      'Blood Donation Camp',
      'Monthly BP and Diabetic Screening Camp @ Shelter',
      'Cleft Lip and Palate Medical Camp',
    ],
    category: 'Healthcare',
    categoryDescription: 'Free medical services, health check-ups, and awareness programs.',
    categoryIcon: '/icons/healthcare.png',
    image: ServiceImg3,
  },
  bloodBank: {
    title: 'Blood Bank',
    subtitle: 'Saving Lives with Your Contribution',
    description: 'Our Blood Bank initiative is dedicated to saving lives by maintaining a steady supply of blood for emergencies. We organize regular blood donation camps and collaborate with hospitals to meet urgent blood requirements.',
    relatedPrograms: ['Blood Bank Program'],
    category: 'Blood Banks & Initiatives',
    categoryDescription: 'Organising regular Blood camps and Awareness.',
    categoryIcon: '/icons/awarness.png',
    image: ServiceImg4,
  },
};

const categories = [
  {
    title: 'Education & Vocational Training',
    description: 'Skill development for sustainable livelihoods.',
    icon: 'fa-solid fa-graduation-cap', // Font Awesome icon class
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
    link: "#vocational"
  },
  {
    title: 'Social Welfare for Homeless',
    description: 'Programs to support the homeless and vulnerable.',
    icon: 'fa-solid fa-hands-helping', // Font Awesome icon class
    programs: [
      'Shelter for Urban Homeless Palani Inauguration',
      'Homeless Rescue Program',
      'Rehabilitation for Homeless People Program',
      'Beggar Free Palani Awareness Program',
      'Homeless Day Awareness Program',
    ],
    image: ServiceImg2,
    link: "#shelter"
  },
  {
    title: 'Para Medical Institution',
    description: 'Free medical services, health check-ups, and awareness programs.',
    icon: 'fa-solid fa-heartbeat', // Font Awesome icon class
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
    link: "#paramedical"
  },
  {
    title: 'Environmental Initiatives',
    description: 'Sustainability efforts for a greener future.',
    icon: 'fa-solid fa-leaf', // Font Awesome icon class
    programs: ['Tree Plantation Program', 'Clean India Program'],
  },
  {
    title: 'Wellness Programs',
    description: 'Promoting physical and mental well-being.',
    icon: 'fa-solid fa-spa', // Font Awesome icon class
    programs: ['Yoga Program'],
    image: ServiceImg4,
    link: "#blood-bank"
  },
];


export { serviceDetails, categories };

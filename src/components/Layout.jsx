import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import DonationPopup from './DonationPopup ';
// import GetInvolvedSection from '../pages/HomeComponents/GetInvolvedSection';
import BottomLinks from './BottomLinks';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <ToastContainer />
      <Header />
      <main className='custom-scrollbar::-webkit-scrollbar-thumb flex-grow h-auto pt-20  min-h-screen' data-aos="fade-up">
        <Outlet />
      </main>
      <BottomLinks />
      <Footer />
      {/* Including the ScrollToTopButton */}
      <ScrollToTopButton />
      <DonationPopup />
    </div>
  );
};

export default Layout;
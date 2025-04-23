import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import HomeSection from '../../Components/HomeSection';
import WhyChooseChatbot from '../../Components/DoctorChatbotFeatures';
import FeaturesSection from '../../Components/FeaturesSection';
import ContactForm from '../../Components/ContactForm';
import Testimonials from '../../Components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Navbar colour={'bg-[#BFDBFE]'} />
      <HomeSection />
      <WhyChooseChatbot />
      <FeaturesSection />
      <ContactForm />
      <Testimonials />
      <div className="overflow-x-hidden">
      <Footer />
      </div>
    </>
  );
}

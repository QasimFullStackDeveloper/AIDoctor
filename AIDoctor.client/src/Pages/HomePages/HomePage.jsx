import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import HomeSection from '../../Components/homePart1'
import WhyChooseChatbot from '../../Components/homePart2'
import FeaturesSection from '../../Components/homePart3'
import ContactForm from '../../Components/homePart4'
import Testimonials from '../../Components/homePart5'

export default function HomePage() {
  return (
    <>
    <Navbar colour={"bg-[#BFDBFE]"}/>
    <HomeSection/>
    <WhyChooseChatbot/>
    <FeaturesSection/>
    <ContactForm/>
    <Testimonials/>
    <Footer/>
    </>
)
}

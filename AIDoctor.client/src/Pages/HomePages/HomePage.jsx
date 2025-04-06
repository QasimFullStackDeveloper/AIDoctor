import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import HomeSection from '../../Components/HomePart1'
import WhyChooseChatbot from '../../Components/HomePart2'
import FeaturesSection from '../../Components/HomePart3'
import ContactForm from '../../Components/HomePart4'
import Testimonials from '../../Components/HomePart5'

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

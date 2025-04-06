import React from 'react'
import Navbar from '../../Components/Navbar'
import FeaturesSection from '../../Components/HomePart3'
import Footer from '../../Components/Footer'
import WhyChooseChatbot from '../../Components/HomePart2'
import Testimonials from '../../Components/HomePart5'
import HomeSection from '../../Components/HomePart1'
import ContactForm from '../../Components/homePart4'

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

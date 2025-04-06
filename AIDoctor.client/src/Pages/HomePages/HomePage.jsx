import React from 'react'
import Navbar from '../../Components/Navbar'
import HomeSection from '../../Components/homePart1'
import WhyChooseChatbot from '../../Components/homePart2'
import FeaturesSection from '../../Components/homePart3'
import ContactForm from '../../Components/homePart4'
import Testimonials from '../../Components/homePArt5'
import Footer from '../../Components/Footer'

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

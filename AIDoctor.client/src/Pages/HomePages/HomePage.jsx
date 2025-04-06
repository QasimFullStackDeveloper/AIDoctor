import React from 'react'
import Navbar from '../../Components/Navbar'
import FeaturesSection from '../../Components/homePart3'
import Footer from '../../Components/Footer'
import WhyChooseChatbot from '../../Components/homePart2'
import Testimonials from '../../Components/homePArt5'
import HomeSection from '../../Components/homePart1'
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

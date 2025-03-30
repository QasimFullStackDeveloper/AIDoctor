import React from 'react'
import Navbar from '../../Components/Navbar'
import HomeSection from '../../Components/homePart1'
import FeaturesSection from '../../Components/homePart3'
import Footer from '../../Components/Footer'
import WhyChooseChatbot from '../../Components/homePart2'
import ContactForm from '../../Components/homePart4'
import Testimonials from '../../Components/homePArt5'

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <HomeSection/>
    <WhyChooseChatbot/>
    <FeaturesSection/>
    <ContactForm/>
    <Testimonials/>
    <Footer/>
    </>
)
}

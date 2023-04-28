import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Pricing from '../components/Pricing'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Nav/>
            <Hero />
            <Stats />
            <Features />
            <Testimonials />
            <Faq />
            <Pricing />
            <GetStarted />
            <Footer />
        </>
    )
}

export default Home
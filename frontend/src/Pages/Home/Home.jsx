import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../Aboutme/AboutMe';

const Home = () => {
    return (
    <div className='font-Ubuntu font-medium'>
        <Navbar />
        <Hero />
        <AboutMe/>
    </div>
    )
}

export default Home

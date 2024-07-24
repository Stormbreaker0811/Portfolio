import React from 'react';
import { FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";

function Hero() {

  return (
    <div className='bg-hero hero min-h-screen font-Ubuntu font-medium'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold text-text-color'>Hello There!!</h1>
          <h2 className='text-3xl py-6 text-text-color'>I am Nimish Godbole</h2>
          <h4 className='text-3xl py-2 text-text-color'>I am a FullStack Developer</h4>
          <a className='btn btn-outline my-6' download=''>My Resume</a>
          <h2 className='text-xl'>Also you can find me on</h2>
          <div className='flex flex-1 social-icons my-[1rem] justify-center text-center items-center'>
            <a href="https://www.linkedin.com/in/nimish-godbole-3425b01b6" target='_blank' className='ml-[1rem] btn btn-info btn-outline text-text-color text-xl'><FaLinkedinIn /></a>
            <a href="mailto:nimishgodbole409@gmail.com" className='btn btn-accent btn-outline text-text-color text-xl mx-6'><SiGmail /></a>
            <a href="mailto:nimishgodbole409@gmail.com" className='btn btn-outline text-xl border-github-btn text-github-btn hover:border-github-btn hover:bg-github-btn hover:text-black'><SiGithub /></a>
          </div>
          <div className="my-work text-text-color font-Ubuntu font-medium flex">
            <a className=' p-6 justify-center text-center btn btn-block btn-outline text-text-color group border-2 px-6 py-3 my-3 flex items-center hover:bg-blue-800 cursor-pointer hover:border-blue-800 hover:text-text-color '>View My Work
            <span className='group-hover:rotate-90 duration-300'>
              <FaArrowRight />
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

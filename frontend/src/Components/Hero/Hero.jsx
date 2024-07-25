import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa6";
import { SiGithub, SiGmail } from "react-icons/si";
import Resume from '../../Assets/Resume/Nimish_Godbole_Resume.pdf';

function Hero() {

  const words = ['Hello There!!','नमस्कार !!', 'नमस्ते!!', 'Bonjour!!'];
  const careers = ['FullStack Developer', 'Freelancer', 'Software Developer', '']
  const [i,setI] = useState(0);
  const [j,setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const type = () =>{
      let word = words[i];
      if (isDeleting){
        setCurrentWord(word.substring(0,j-1));
        setJ(j-1);
        if(j === 0){
          setIsDeleting(false);
          setI((i+1) % words.length);
        }
      }
      else{
        setCurrentWord(word.substring(0,j+1));
        setJ(j+1);
        if(j === word.length){
          setIsDeleting(true)
        }
      }
    };

    const timeoutId = setTimeout(type,100);
    return () => clearTimeout(timeoutId);
  } , [j,isDeleting,i]);

  return (
    <div className='bg-hero hero min-h-screen font-Ubuntu font-medium border'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold text-text-color md:my-6 sm:my-10' id='typewriter'>{currentWord}</h1>
          <h2 className='text-3xl py-6 text-text-color'>I am Nimish Godbole</h2>
          <h4 className='text-3xl py-2 text-text-color'>I am a FullStack Developer</h4>
          <a className='btn btn-success btn-outline my-6 hover:text-text-color' href={Resume} download='Nimish Godbole resume.pdf'>My Resume</a>
          <h2 className='text-xl'>Also you can find me on</h2>
          <div className='flex flex-1 social-icons my-[1rem] justify-center text-center items-center'>
            <a href="https://www.linkedin.com/in/nimish-godbole-3425b01b6" target='_blank' className='btn btn-info btn-outline text-text-color text-xl'><FaLinkedinIn /></a>
            <a href="mailto:nimishgodbole409@gmail.com" className='btn btn-accent btn-outline text-text-color text-xl mx-6'><SiGmail /></a>
            <a href="https://github.com/Stormbreaker0811" target='_blank' className='btn btn-outline text-xl border-github-btn text-github-btn hover:border-github-btn hover:bg-github-btn hover:text-black'><SiGithub /></a>
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

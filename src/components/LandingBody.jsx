import React from 'react'
import { Button } from './ui/button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './LandingBody.css'
import AboutMe from './AboutMe';
import Experince from './Experince';
import Projects from './Projects';
import Contactpage from './Contactpage';
import { TypeAnimation } from 'react-type-animation';

function LandingBody({ loading }) {
  return (
    <>
      <div id='home' className={`pt-6 sm:pt-16   h-[100vh] w-full flex flex-col items-center`}  >
        <div className='flex  flex-col md:flex-row justify-center items-center pt-20 sm:pt-28'>
          <div className='w-1/2 flex justify-end items-end  '><img className='object-contain sm:w-[650px]  p-0 sm:p-20 rounded-full w-[900px]' src="./file.png" alt="" /></div>

          {/* sidehero section */}
          <div className=' w-1/2 flex flex-col justify-center items-center sm:items-start mt-4 sm:mt-0 items-c' >
            <span className='flex flex-col gap-1'>
              <h2 className='sm:text-2xl text-xl sm:text-start text-center text-gray-600'>Hello, I'm</h2>
              <h2 className='font-bold text-4xl sm:text-7xl sm:text-start text-center'>Sameet Pisal</h2>




              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Data Science Enthusiast',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Frontend Developer',
                  1000,
                  'Backend Developer',
                  1000,

                ]}
                wrapper="span"
                speed={45}
                style={{ fontSize: '2em', display: 'inline-block' }}
                className='font-semibold text-2xl pt-2 sm:pt-0 sm:text-3xl sm:text-start text-center text-gray-700'
                repeat={Infinity}
              />


            </span>

            <div className='flex  gap-12 pt-5'>
              <Button variant='outline' className='rounded-3xl p-6 sm:p-6 border-black hover:bg-black hover:text-white'> Download CV</Button>
              <Button className='rounded-3xl p-6 sm:p-6  hover:bg-white hover:text-black hover:border border-gray-950'>Contact Info</Button>
            </div>
            <div className='flex gap-12 pl-4 sm:pl-10 mt-8 items-center'>
              <a href="https://github.com/Sameet728?tab=repositories" target='_blank'> <FaGithub className='text-3xl cursor-pointer hover:scale-125 transition-all' /></a>
              <a href="https://www.linkedin.com/in/sameet-pisal-2a597b217/" target='_blank'> <FaLinkedin className='text-3xl cursor-pointer hover:scale-125 transition-all' /></a>
              <a href="mailto:sameetpisal@gmail.com" target='_blank'> <IoMdMail className='text-3xl cursor-pointer hover:scale-125 transition-all' /></a>
            </div>
          </div>
        </div>


      </div >
      <AboutMe />
      <Experince />
      <Projects />
      <Contactpage />
    </>

  )
}

export default LandingBody
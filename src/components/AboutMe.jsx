import React from 'react'

function AboutMe({darkmode}) {
  return (
    <>
      <div id='about' className={`${darkmode ? "bg-gray-950 text-gray-50":""} sm:h-[90vh] pt-20 pl-2 pr-2 sm:pl-20 sm:pr-20`}>
        <div className='flex flex-col items-center gap-2'>
          <h2 id='animation' className='text-1/2xl text-gray-500'>Get To Know More</h2>
          <h2 id='animation' className='text-4xl font-semibold'>About Me</h2>
        </div>
        <div className='flex mt-16 sm:mt-28 sm:gap-12 justify-center items-center'>
          <div className='hidden sm:block w-1/4'>
            <img src="./about-pic.png" className='rounded-3xl' alt="" />
          </div>
          <div className='sm:w-3/4 flex gap-5 flex-col'>
            <div className='border rounded-2xl  hover:scale-105 transition-all'>
              <h2 id='animation' className='text-2xl font-semibold p-5 '><span className='text-2xl'>🎓</span> Education</h2>
              <div className='flex flex-col gap-8 pt-8 pb-8'>
                <div>
                  <h2 id='animation' className='text-xl pl-5 pr-5 sm:pl-10 font-semibold'> <span className='text-red-500'>2012-2023 - </span><span className='text-xl'>🏫</span>Primary & Secondary Education <span className='text-red-500'>[1st to 10th SSC] - </span>   <span className='text-xl text-gray-500'>Shrimant Shivajiraje English Medium School Phaltan</span> </h2>
                
                </div>
                <div>
                  <h2 id='animation' className='text-xl pl-5 pr-5 sm:pl-10 font-semibold'> <span className='text-red-500'>2022-2024 - </span><span className='text-xl'>🏛️</span>Junior College  <span className='text-red-500'>[12th HSC] - </span> <span className='text-xl text-gray-500'>Shri Siddheshwar Public School & Junior College</span> </h2>
                 
                </div>
                <div>
                  <h2 id='animation' className='text-xl pl-5 pr-5 sm:pl-10 font-semibold'> <span className='text-red-500'>2024-Present - </span><span className='text-xl'>👨🏻‍🎓</span>Senior college <span className='text-red-500'>[B.Tech Computer Science (Data Science)] - </span><span className='text-xl text-gray-500'>MIT Academy of Engineering,Pune</span> </h2>
                 
                </div>
              </div>
            </div>
            <div id='animation' className='border rounded-2xl p-6 hover:scale-105 transition-all'>
            I am a MERN full-stack developer currently pursuing a B.Tech in Computer Science with a focus on Data Science at MIT Pune. My journey in technology began with a passion for coding, which has evolved into a deep expertise in full-stack development using MongoDB, Express, React, and Node.js.

With a strong foundation in computer science principles and data science, I am driven by the challenge of solving complex problems and creating impactful solutions. My academic experience at MIT Pune has further honed my skills in these areas, preparing me for a dynamic and evolving tech landscape.

In my projects, I strive to integrate innovative technologies and best practices to deliver high-quality applications. I am excited about the opportunities that lie ahead in the tech industry and am eager to contribute my skills and knowledge to meaningful and transformative projects.
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default AboutMe
import React from 'react'
import { Button } from './ui/button'

function Projects() {
  return (
    <>
    <div id='projects' className='pt-20 mb-16 sm:mt-10 sm:h-[90vh] pl-4 pr-4 sm:pl-20 sm:pr-20'>
    <div className='flex flex-col items-center gap-2'>
          <h2 className='text-1/2xl text-gray-500'>Browse My Recent</h2>
          <h2 className='text-4xl font-semibold'>Projects</h2>
        </div>
        <div className='grid sm:gap-10 gap-5 grid-cols-2 sm:grid-cols-4 mt-20'>
          <div className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img src="./12xp-instagram-videoSixteenByNineJumbo1600-v2.jpg" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 className='text-black text-2xl font-bold'>Instagram Clone</h2>
            <div className='flex justify-center items-center sm:gap-24 gap-5'>
           <a href="https://instagram-clone-7akg.onrender.com" target='_blank'> <Button>View Live</Button></a> 
            <a href="https://github.com/Sameet728/Instagram_Clone" target='_blank'> <img src="./github.png" alt=""  className='w-[40px] cursor-pointer'/></a> 
              
            </div>
          </div>
          <div className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img src="./aitrip.png" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 className='text-black text-2xl font-bold'>Ai Trip Planner</h2>
            <div className='flex justify-center items-center sm:gap-24 gap-5'>
            <a href="https://ai-trips-rose.vercel.app/" target='_blank'> <Button>View Live</Button></a> 
            <a href="https://github.com/Sameet728/Ai-Trips" target='_blank'> <img src="./github.png" alt=""  className='w-[40px] cursor-pointer'/></a> 
              
            </div>
          </div>
          <div className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img src="./airbnb.png" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 className='text-black text-2xl font-bold'>AirBNB Clone</h2>
            <div className='flex justify-center items-center sm:gap-24 gap-5'>
            <a href="https://airbnb-1rcz.onrender.com" target='_blank'> <Button>View Live</Button></a> 
            <a href="https://github.com/Sameet728/Project" target='_blank'> <img src="./github.png" alt=""  className='w-[40px] cursor-pointer'/></a> 
              
            </div>
          </div>
          <div className='hover:scale-105 transition-all rounded-2xl flex gap-4 justify-center items-center flex-col text-white border border-gray-500 p-4 sm:p-10'>
            <img src="./simon.png" alt=""  className='w-[300px] rounded-xl  '/>
            <h2 className='text-black text-2xl font-bold'>Simon Game</h2>
            <div className='flex justify-center items-center sm:gap-24 gap-5'>
            <a href="https://sameet728.github.io/SimonGame/" target='_blank'> <Button>View Live</Button></a> 
            <a href="https://github.com/Sameet728/SimonGame" target='_blank'> <img src="./github.png" alt=""  className='w-[40px] cursor-pointer'/></a> 
              
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Projects
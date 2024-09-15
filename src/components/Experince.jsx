import React from 'react'
import { FaGithub } from "react-icons/fa";

function Experince({darkmode}) {
  return (
    <>
    <div id='experience' className= {` ${darkmode ? "bg-gray-950 text-gray-50":""}  pt-20 sm:mt-0 sm:h-[90vh]   sm:pl-20 sm:pr-20`}>
    <div className='flex flex-col items-center gap-2 sm:pt-'>
          <h2 id='animation' className='text-1/2xl text-gray-500'>Explore My</h2>
          <h2 id='animation' className='text-4xl font-semibold'>Experience</h2>
        </div>
      <div className='flex flex-col justify-center items-center'>
    
      <div id='animation' className='border border-gray-400 rounded-3xl m-6 sm:m-12 sm:p-3  sm:pl-8 sm:pr-8'>
        <h2  className={`${darkmode ? "text-white" : ""} text-2xl text-center font-semibold text-gray-600 mt-8 mb-3 sm:mt-5`}>Frontend Development</h2>
          <div className='flex flex-wrap justify-center items-center sm:p-10 p-6 gap-14 sm:gap-28'> 

            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./html-5 (1).png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>HTML</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Experienced</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./css-3.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>CSS</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Experienced</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./js.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>JavaScript</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Intermediate</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./react.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>React</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Intermediate</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-4 hover:scale-110 transition-all '><img src="./tailwind.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>Tailwind CSS</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Intermediate</h2></div>

          </div>
         
        </div>
        {/* gehruhferhferfejf */}
        <div id='animation' className=' border border-gray-400 rounded-3xl m-6 sm:m-12 sm:p-3  sm:pl-8 sm:pr-8'>
        <h2 className={` ${darkmode ? "text-white" : "" } text-2xl text-center font-semibold text-gray-600 mt-6 mb-4 `}>Backend Development</h2>
          <div className='flex flex-wrap justify-center items-center sm:p-10 p-6 gap-14 sm:gap-28'> 

            <div  className='flex  flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./nodejs.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>Node.js</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Experienced</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./expressjs.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>Express.js</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Experienced</h2></div>
            <div className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./images.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>MongoDB (NoSQL)</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Intermediate</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><img src="./mysql.png" alt=""  className='w-[50px]'/>
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>MySQL (SQL)</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Intermediate</h2></div>
            <div  className='flex flex-col justify-center cursor-pointer items-center gap-2 hover:scale-110 transition-all'><FaGithub className='text-4xl cursor-pointer hover:scale-125 transition-all' />
            <h2  className={`font-bold text-gray-800 ${darkmode ? "text-white" : ""}`}>Git</h2>
            <h2  className={` text-gray-700 ${darkmode ? "text-white" : ""}`}>Intermediate</h2></div>
          </div>
         
        </div>
        </div>
    </div>
    </>
    
  )
}

export default Experince
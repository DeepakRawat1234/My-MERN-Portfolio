import react from 'react'
import { TypeAnimation } from 'react-type-animation';
import {useState} from 'react'
const Hero = ({ userData }) => {
  return (
    <div id="home" className=" flex flex-col lg:flex-row py-10 mb-30 px-3 h-fit lg:h-auto 2xl:py-20 2xl:mb-20
  text-white">

      {/* Image Section — order-1 on small (shows first), order-2 on large (shows second) */}
      {/* Image Section */}
<div className="relative w-full lg:w-1/2 order-1 lg:order-2 py-6 px-4 lg:px-10">

  {/* Wrapper with position: relative — badges anchor to THIS */}
  <div className="relative mt-10">

    {/* Top Right Badge */}
    <div className="absolute -top-5 -right-3 bg-[#1a2a2e] text-purple-500 text-sm px-6 border border-gray-600 font-bold animate-pulse py-2 rounded-xl shadow-lg z-10">
      <h1>Code</h1>
    </div>

    {/* Image Box */}
    <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-600">
      <img
        className="w-full h-auto transition-transform duration-500 hover:scale-110"
        src="https://lrwlwawfgrsaekydfhgs.supabase.co/storage/v1/object/public/Project's%20Assests/pexels-paras-4218883.jpg"
        alt="Hero"
      />
    </div>

    {/* Bottom Left Badge */}
    <div className="absolute -bottom-6 -left-5 bg-[#1a2a2e] text-purple-500 text-sm px-6 border border-gray-600 font-bold animate-pulse py-2 rounded-xl shadow-lg z-10">
      Code Magic = True
    </div>

  </div>
</div>

      {/* Text Section — order-2 on small (shows second), order-1 on large (shows first) */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 p-2 px-5 ">

        <button className="border-2 text-sm border-blue-600/20 rounded-2xl text-white px-4 py-2">
          <i className="fa-solid text-md fa-ranking-star text-blue-400 me-2 sm:mt-2"></i>
          Available for opportunities
        </button>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 leading-tight">
          Hi, I'm{" "}
          <span className="block sm:inline text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            {userData.name}
          </span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl">
          <i className="fa-solid fa-code text-purple-600"></i>{" "}
          {userData.jobRole}
        </h2>

        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          {userData.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-gradient-to-r lg:w-1/2 sm:w-full from-[#9255e0] to-blue-700 text-white px-7 py-3 rounded-lg cursor-pointer">
            View Projects{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>

          
            <button className="bg-gray-800 lg:w-1/2 text-white sm:w-full px-10 py-3 rounded-lg border border-gray-600 cursor-pointer">
              <a  href={userData.resume} target="_main">Download CV </a>
              <i className="fa-solid fa-download"></i>
            </button>
          
        </div>

      </div>
    </div>
  );
};

export default Hero;
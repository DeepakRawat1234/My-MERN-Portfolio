import react from "react";
const Footer=({userData})=>{
    return (
       <div
  className="bg-[#23233a]/100 border-t border-gray-600 
  backdrop-blur-xl w-full px-4 sm:px-6 lg:px-10 py-8
  flex flex-col lg:flex-row items-center justify-between gap-8"
>
  
  {/* Left Section */}
  <div className="w-full lg:w-1/3 text-center lg:text-left">
    <h1 className="text-2xl sm:text-3xl text-[#9b05fa] font-Bubblegum font-bold">
      {userData?.name}
    </h1>

    <h2 className="font-Bubblegum text-sm sm:text-base text-gray-400">
      {userData?.jobRole}
    </h2>
  </div>

  {/* Center Social Icons */}
  <div
    className="flex items-center justify-center 
    w-full lg:w-1/3 gap-4 flex-wrap"
  >
    <a
      href={userData?.linkedin}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-blue-500/20
      hover:border-blue-400/40 hover:text-blue-400
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-linkedin text-xl sm:text-2xl"></i>
    </a>

    <a
      href={userData?.instagram}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-pink-500/20
      hover:border-pink-400/40 hover:text-pink-400
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-instagram text-xl sm:text-2xl"></i>
    </a>

    <a
      href={userData?.github}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-gray-400/20
      hover:border-gray-300/40 hover:text-gray-300
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-github text-xl sm:text-2xl"></i>
    </a>

    <a
      href={userData?.twitter}
      target="_blank"
      rel="noreferrer"
      className="w-10 h-10 rounded-2xl bg-[#2d2d4d]
      border border-white/10 flex items-center justify-center
      hover:-translate-y-1 hover:bg-sky-500/20
      hover:border-sky-400/40 hover:text-sky-400
      transition-all duration-300 shadow-lg"
    >
      <i className="fa-brands fa-x-twitter text-xl sm:text-2xl"></i>
    </a>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/3 text-center lg:text-right">
    <h1 className="text-lg sm:text-xl text-gray-300 font-Bubblegum font-bold">
      Made with 💖 by {userData?.name}
    </h1>

    <h2 className="font-Bubblegum text-sm sm:text-base text-gray-400">
      © 2026 All rights reserved.
    </h2>
  </div>
</div>
    )
}
export default Footer;
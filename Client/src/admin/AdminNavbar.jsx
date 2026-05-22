import React from "react";
import {useNavigate} from "react-router-dom"
const AdminNavbar = () => {
    const navigate=useNavigate();
  return (
    <nav className="bg-gradient-to-r from-[#0e0226] to-[#1a0b3d] border-b border-[#2f1f57] px-4 sm:px-6 lg:px-10 py-4 shadow-lg">
      
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        
        {/* Left Section */}
        <div className="flex items-center gap-4">
          
          {/* Icon */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl shadow-md">
            <i className="fa-solid fa-gear text-xl sm:text-2xl text-white"></i>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Admin Dashboard
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm">
              Manage your portfolio content
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          
          {/* View Portfolio */}
          <button className="w-full sm:w-auto border border-gray-500 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 px-5 py-2.5 rounded-xl font-medium cursor-pointer text-sm text-white" onClick={()=>navigate("/")}>
            <i className="fa-regular fa-eye me-2"></i>
            View Portfolio
          </button>

          {/* Logout */}
          <button className="w-full sm:w-auto bg-red-500/10 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-5 py-2.5 rounded-xl font-semibold cursor-pointer text-sm text-red-400">
            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default AdminNavbar;
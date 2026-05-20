import react from "react";
const Certificate=({certificates})=>{
    console.log(certificates)
    return (
        <div className="mt-20 text-center pb-20 pt-10" id="certificates">

      {/* TITLE */}
      <h1 className="text-white font-bold mb-2 md:text-5xl text-2xl">
        Certifications 
 <span className="text-[#05dfeb]"> & Achievements</span>
      </h1>
       <p className="text-gray-400 md:text-2xl text-md text mb-10 font-Bubblegum">
Recognized credentials from industry leaders
      </p>
<div className="w-full px-4 sm:px-6 lg:px-10 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
    
    {certificates?.data?.map((item) => (
      <div
        key={item._id}
        className="bg-[#1b1830] border border-[#322b52] rounded-3xl 
                   overflow-hidden shadow-xl hover:shadow-purple-500/20
                   hover:-translate-y-2 transition-all duration-300
                   flex flex-col h-full group"
      >

        {/* Image */}
        <div className="relative overflow-hidden h-[220px]">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Issuer */}
          <div className="absolute top-4 left-4">
            <span
              className="bg-purple-600/80 backdrop-blur-md text-white text-xs 
                         px-4 py-1 rounded-full border border-white/20"
            >
              <i className="fa-solid fa-building-columns mr-2"></i>
              {item.issuer}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">

          {/* Title */}
          <h1
            className="text-xl sm:text-2xl font-bold text-white leading-snug 
                       mb-4 line-clamp-2 min-h-[64px]"
          >
            {item.title}
          </h1>

          {/* Short Desc */}
          <p
            className="text-gray-400 text-sm leading-6  
                       line-clamp-3 min-h-[72px]"
          >
            {item.short_description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-5 min-h-[70px]">
            {item.skills?.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-[#2a2445] text-gray-300 px-2 py-1 
                           rounded-lg border border-[#40355f]
                           hover:border-purple-500 transition-all duration-300"
              >
                <i className="fa-solid fa-code mr-2 text-purple-400"></i>
                {skill}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-gray-500 text-sm leading-6 line-clamp-4 
                       flex-grow"
          >
            {item.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 mt-8">

            {/* Credential Button */}
            <a
              href={item.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2
                         bg-gradient-to-r from-purple-600 to-pink-500
                         hover:from-purple-700 hover:to-pink-600
                         text-white py-3 rounded-xl font-semibold
                         transition-all duration-300"
            >
              <i className="fa-solid fa-certificate"></i>
              View Credential
            </a>

           
          </div>

        </div>
      </div>
    ))}

  </div>
</div>
      
        </div>
    )
}
export default Certificate;
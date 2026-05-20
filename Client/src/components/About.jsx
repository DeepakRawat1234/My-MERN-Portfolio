import react from "react";
const About=({userData})=>{
    const sortedEducation = [...(userData?.education) ||[]].sort(
  (a, b) => Number(b.endYear) - Number(a.endYear)
);
return(
    <div id="about" className="w-full pb-10 flex flex-col lg:flex-row pb-5 px-5 pt-4 gap-6 lg:gap-10 lg:items-stretch">

  {/* Left box — Profile */}
  <div className="w-full lg:w-[40%] bg-[#2a2840] hover:bg-[#211e4f] 
    text-center items-center flex flex-col rounded-3xl 
    p-5 md:p-8 transition-all duration-500
    shadow-lg hover:shadow-[0_0_25px_rgba(28,169,230,0.4)] 
    border-2 border-gray-700 hover:-translate-y-2
    lg:h-auto">

    {/* Profile Image */}
    <div className="relative mt-2">
      <img
        src={userData?.profilePic?.[0]}
        alt="profile"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full 
          object-cover border-4 border-[#1ca9e6]
          shadow-[0_0_20px_rgba(28,169,230,0.5)]"
      />
      <div className="absolute inset-0 rounded-full bg-[#1ca9e6] opacity-20 blur-2xl -z-10"></div>
    </div>

    {/* Name */}
    <h1 className="text-white text-2xl md:text-3xl Font-Fontdiner mt-3 font-semibold tracking-wide">
      {userData?.name}
    </h1>

    {/* Role */}
    <h3 className="text-sm md:text-lg font-Bubblegum text-[#1ca9e6] mt-1 tracking-wider">
      {userData?.jobRole}
    </h3>

    {/* Divider */}
    <div className="w-16 h-[2px] bg-[#1ca9e6] opacity-40 rounded-full my-3"></div>

    {/* Bio */}
    <p className="text-start text-gray-300 leading-7 text-md md:text-base">
      {userData?.bio}
    </p>
  </div>

  {/* Right box — Journey */}
  <div className="w-full lg:w-[60%] bg-[#2a2840] flex flex-col rounded-3xl 
    p-5 md:p-8 transition-all duration-500 shadow-lg border-2 border-gray-700
    overflow-y-auto scrollbar-thin scrollbar-thumb-[#1ca9e6]/30 
    scrollbar-track-transparent
    lg:max-h-none max-h-[600px]">

    {/* Header */}
    <div className="flex items-center gap-3 mb-8">
      <div className="flex flex-col gap-[3px]">
        <span className="w-6 h-[3px] bg-[#ac07e8] rounded-full"></span>
        <span className="w-4 h-[3px] bg-[#1ca9e6] rounded-full"></span>
        <span className="w-2 h-[3px] bg-[#ac07e8] rounded-full"></span>
      </div>
      <h1 className="text-2xl text-white font-bold tracking-tight">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1ca9e6] to-[#ac07e8]">Journey</span>
      </h1>
    </div>

    {/* Timeline */}
    <div className="relative flex flex-col gap-0">

      {/* Vertical Line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-[2px] 
        bg-gradient-to-b from-[#1ca9e6] via-[#ac07e8]/60 to-transparent 
        rounded-full z-0" />

      {sortedEducation.map((data, index) => (
        <div key={index} className="relative flex gap-5 pb-7 group">

          {/* Timeline Dot */}
          <div className="relative z-10 flex-shrink-0 mt-1 hidden md:block">
            <div className="w-10 h-10 rounded-full bg-[#1a1830] border-2 border-[#1ca9e6] 
              flex items-center justify-center
              shadow-[0_0_12px_rgba(28,169,230,0.4)]
              group-hover:shadow-[0_0_20px_rgba(28,169,230,0.7)]
              group-hover:border-[#ac07e8] transition-all duration-500">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1ca9e6] 
                group-hover:bg-[#ac07e8] transition-colors duration-500" />
            </div>
          </div>

          {/* Card */}
          <div className="flex-1 bg-[#1e1c35] border border-white/5 rounded-2xl 
            p-4 sm:p-5
            group-hover:border-[#1ca9e6]/25 group-hover:bg-[#242240]
            group-hover:shadow-[0_4px_24px_rgba(28,169,230,0.08)]
            transition-all duration-500">

            {/* Year + Institute Row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-semibold text-[#1babcc] 
                bg-[#0d3f4f] border border-[#1ca9e6]/40 
                px-3 py-1 rounded-full tracking-wider uppercase">
                {data?.endYear}
              </span>
              <span className="text-xs text-gray-500">•</span>
              <p className="text-xs sm:text-sm text-gray-400   max-w-[200px] lg:max-w-[300px]">
                {data?.institute}
              </p>
            </div>

            {/* Degree */}
            <h2 className="text-sm sm:text-base font-semibold text-white mb-2 
              group-hover:text-[#e0f4ff] transition-colors duration-300">
              {data?.degree}
            </h2>

            {/* Description */}
            {data?.description && (
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed 
                border-t border-white/5 pt-2 mt-2">
                {data?.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>

</div>
)
}
export default About;
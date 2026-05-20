import react from "react"
const Skills=({skills})=>{
    const frontendSkills = skills?.filter(
  (item) => item.category === "Frontend"
);

const programmingSkill=skills?.filter(
    (item)=>item.category==="Programming"
)
const backendSkills = skills?.filter(
  (item) => item.category === "Backend"
);

const databaseSkills = skills?.filter(
  (item) => item.category === "Database"
);

const toolsSkills = skills?.filter(
  (item) => item.category === "Tools"
);
return(
   <div id="skills" className="pt-30 p-5 px-10 text-center">
  <h1 className="text-white font-bold mb-2 md:text-5xl text-3xl">
    Skills & <span className="text-[#05dfeb]">Expertise</span>
  </h1>
  <p className="text-gray-400 text-2xl mb-10 font-Bubblegum">
    A comprehensive toolkit for building modern web applications
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6">

    {/* FRONTEND */}
    <div className="p-4 bg-[#1f1b35] border border-[#3a2f5c] rounded-2xl">
      <h1 className="text-lg text-white font-bold mb-4 text-start">
        <i className="fa-solid fa-web-awesome me-3 text-[#0dd3de]"></i>
        Frontend
      </h1>
      <div className="space-y-3">
        {frontendSkills?.map((item) => (
          <div key={item._id} className="bg-[#2a2147] px-3 py-2.5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-5 h-8" />
                <h2 className="text-white font-semibold text-sm">{item.name}</h2>
              </div>
              <span className="text-[#0dd3de] font-bold text-sm">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#1a1630] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0dd3de] rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* BACKEND */}
    <div className="p-4 bg-[#1f1b35] border border-[#3a2f5c] rounded-2xl text-start">
      <h1 className="text-lg text-white font-bold mb-4">
        <i className="fa-solid fa-truck-fast text-[#eb05c0] me-3"></i>
        Backend
      </h1>
      <div className="space-y-3">
        {backendSkills?.map((item) => (
          <div key={item._id} className="bg-[#2a2147] px-3 py-2.5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-5 h-8" />
                <h2 className="text-white font-semibold text-sm">{item.name}</h2>
              </div>
              <span className="text-[#0dd3de] font-bold text-sm">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#1a1630] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0dd3de] rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* DATABASE */}
    <div className="p-4 bg-[#1f1b35] border border-[#3a2f5c] rounded-2xl text-start">
      <h1 className="text-lg text-white font-bold mb-4">
        <i className="fa-solid fa-database me-3 text-[#eb05c0]"></i>
        Database
      </h1>
      <div className="space-y-3">
        {databaseSkills?.map((item) => (
          <div key={item._id} className="bg-[#2a2147] px-3 py-2.5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-5 h-8" />
                <h2 className="text-white font-semibold text-sm">{item.name}</h2>
              </div>
              <span className="text-[#0dd3de] font-bold text-sm">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#1a1630] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0dd3de] rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* TOOLS */}
    <div className="p-4 bg-[#1f1b35] border border-[#3a2f5c] rounded-2xl text-start">
      <h1 className="text-lg text-white font-bold mb-4">
        <i className="fa-brands fa-buffer me-3 text-[#ebc905]"></i>
        Tools
      </h1>
      <div className="space-y-3">
        {toolsSkills?.map((item) => (
          <div key={item._id} className="bg-[#2a2147] px-3 py-2.5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-5 h-8" />
                <h2 className="text-white font-semibold text-sm">{item.name}</h2>
              </div>
              <span className="text-[#0dd3de] font-bold text-sm">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#1a1630] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0dd3de] rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* PROGRAMMING */}
    <div className="p-4 bg-[#1f1b35] border border-[#3a2f5c] rounded-2xl text-start md:col-span-2">
      <h1 className="text-lg text-white font-bold mb-4">
        <i className="fa-solid fa-code me-3 text-[#0dd3de]"></i>
        Programming
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {programmingSkill?.map((item) => (
          <div key={item._id} className="bg-[#2a2147] px-3 py-2.5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-8 h-8" alt={item.name} />
                <h2 className="text-white font-semibold text-sm">{item.name}</h2>
              </div>
              <span className="text-[#0dd3de] font-bold text-sm">{item.percentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#1a1630] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0dd3de] rounded-full transition-all duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
  <div className="pt-10 px-5 md:px-10 text-center">
  <h1 className="text-white font-bold mb-2 text-3xl md:text-2xl">
    Technologies I <span className="text-[#05dfeb]">Work With</span>
  </h1>
  <p className="text-gray-400 text-lg md:text-xl mb-8 font-Bubblegum">
    Tools and technologies I use to bring ideas to life
  </p>

  <div className="bg-[#1f1b35] border border-[#3a2f5c] rounded-2xl p-4 md:p-6">
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {skills?.map((item) => (
        <div
          key={item._id}
          className="flex flex-col items-center gap-2 bg-[#2a2147] hover:bg-[#332860] transition-all duration-300 px-3 py-3 md:px-5 md:py-4 rounded-xl cursor-pointer group w-16 md:w-20"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-gray-300 text-[10px] md:text-xs font-medium truncate w-full text-center">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
)
}
export default Skills;
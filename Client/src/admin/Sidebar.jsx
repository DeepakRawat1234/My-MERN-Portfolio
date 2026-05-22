import React from "react";

const Sidebar = ({ active, setActive }) => {
  const menuItems = [
    {
      title: "Profile",
      icon: "fa-user",
    },
    {
      title: "Timeline",
      icon: "fa-clock-rotate-left",
    },
    {
      title: "Skills",
      icon: "fa-code",
    },
    {
      title: "Projects",
      icon: "fa-diagram-project",
    },
    {
      title: "Certifications",
      icon: "fa-award",
    },
  ];

  return (
    <aside className="w-full sm:w-[290px] min-h-screen bg-gradient-to-b from-[#08021d] via-[#0c0328] to-[#14063f] border-r border-[#24164f] p-5 flex flex-col">
      
      {/* Logo / Heading */}
      <div className="mb-10">
        
     
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-3">
        
        {menuItems.map((item, index) => {
          const isActive = active === item.title;

          return (
            <button
              key={index}
              onClick={() => setActive(item.title)}
              className={`
                relative overflow-hidden group flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 cursor-pointer border

                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent shadow-lg "
                    : "bg-[#171529]/80 border-[#2e225d] hover:border-blue-500/40 hover:bg-[#1d1835]"
                }
              `}
            >
              
             

              {/* Icon */}
              <div
                className={`
                  w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300

                  ${
                    isActive
                      ? "bg-white/20"
                      : "bg-[#22164f] group-hover:bg-blue-500/20"
                  }
                `}
              >
                <i
                  className={`fa-solid ${item.icon} text-white text-sm`}
                ></i>
              </div>

              {/* Text */}
              <div className="flex flex-col items-start">
                <span className="text-white font-semibold text-sm sm:text-base tracking-wide">
                  {item.title}
                </span>

                <span
                  className={`
                    text-xs transition-all duration-300

                    ${
                      isActive
                        ? "text-blue-100"
                        : "text-gray-500 group-hover:text-gray-300"
                    }
                  `}
                >
                  Manage {item.title.toLowerCase()}
                </span>
              </div>
            </button>
          );
        })}
      </div>

     
    </aside>
  );
};

export default Sidebar;
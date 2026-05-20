import react from "react";
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
 const Projects = () => {
  const navigate=useNavigate();
  const [type, setType] = useState("All");
  const [projects, setProjects] = useState([]);

  const filters = ["All", "Full Stack", "Frontend", "Backend", "Others"];

  useEffect(() => {
    fetchProject(type);
  }, [type]);

  const fetchProject = async (type) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/projects?category=${type}`
      );

      const data = await res.json();

      setProjects(data.data || []); // ✅ safe fallback
    } catch (error) {
      console.log("error:", error);
      setProjects([]); // safety
    }
  };
  const getProject=async(id)=>{
    console.log(`id hitted with ${id}`);
  }

  return (
    <div className="mt-20 text-center pb-20" id="projects">

      {/* TITLE */}
      <h1 className="text-white font-bold mb-2 md:text-5xl text-3xl">
        Featured <span className="text-[#05dfeb]">Projects</span>
      </h1>

      <p className="text-gray-400 text-2xl mb-10 font-Bubblegum">
        Showcasing my best work and innovative solutions
      </p>

      {/* FILTERS */}
      <div className="flex w-full justify-center gap-3 items-center pb-6 flex-wrap">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setType(item)}
            className={`btn rounded-xl cursor-pointer px-7 text-sm py-2 border border-gray-400 text-white transition ${
              type === item
                ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-none"
                : "bg-[#171a26]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* EMPTY STATE */}
      {projects.length === 0 ? (
        <div className="text-gray-400 py-20">
          <h2 className="text-2xl font-bold text-white">
            No Projects Yet 🚀
          </h2>
          <p className="mt-2">Try selecting another category</p>
        </div>
      ) : (
        /* GRID */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 lg:mt-20">

          {projects.map((project) => (
            <div key={project._id} className="group relative "  onClick={() => navigate(`/project/${project._id}`)}>

              {/* CARD */}
              <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">

                {/* Featured */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                    <span className="text-xs font-semibold text-white">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden bg-black/30">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition" />
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-4 text-white">

                  <h3 className="text-lg md:text-xl font-bold group-hover:text-purple-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* CATEGORY */}
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {project.category}
                    </span>

                    <span className="text-xs px-2 py-1 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30">
                      {project.status}
                    </span>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-1 rounded-md bg-white/10 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 pt-2">

                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex-1 text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm"
                    >
                      Code
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="flex-1 text-center px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/30 transition text-sm"
                      >
                        Live
                      </a>
                    )}</div>
<button
  onClick={() => getProject(project._id)}
  className="w-full mt-4 flex items-center justify-center gap-2
             bg-gradient-to-r from-purple-600 to-pink-500
             hover:from-purple-700 hover:to-pink-600
             text-white font-semibold py-2 rounded-xl
             shadow-lg transition-all duration-300 hover:scale-[1.02]"
>
  <i className="fa-solid fa-arrow-up-right-from-square"></i>
  More Details
</button>
                  
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition rounded-3xl pointer-events-none" />

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
};
export default Projects;
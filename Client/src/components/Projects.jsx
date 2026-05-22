import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {

  const navigate = useNavigate();

  const [type, setType] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const filters = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "MERN",
    "UI/UX",
  ];

  useEffect(() => {
    fetchProject(type);
  }, [type]);

  // Fetch Projects
  const fetchProject = async (category) => {

    try {

      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/api/projects?category=${category}`
      );

      const data = await res.json();

      setProjects(data.data || []);

    } catch (error) {

      console.log("Error:", error);
      setProjects([]);

    } finally {

      setLoading(false);

    }
  };

  // Navigate to details
  const getProject = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div
      className="mt-20 text-center pb-20 px-5 lg:px-10"
      id="projects"
    >

      {/* TITLE */}
      <div className="mb-12">

        <h1 className="text-white font-bold mb-4 text-4xl md:text-6xl leading-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-2xl font-Bubblegum">
          Showcasing my best work and innovative solutions
        </p>

      </div>

      {/* FILTERS */}
      <div className="flex justify-center items-center gap-3 flex-wrap mb-14">

        {filters.map((item) => (

          <button
            key={item}
            onClick={() => setType(item)}
            className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 border cursor-pointer
              
              ${
                type === item
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 border-transparent text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] scale-105"
                  : "bg-[#171a26] border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white"
              }
            `}
          >
            {item}
          </button>

        ))}

      </div>

      {/* LOADING */}
      {loading ? (

        <div className="py-24">

          <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="text-gray-400 mt-5">
            Loading Projects...
          </p>

        </div>

      ) : projects.length === 0 ? (

        /* EMPTY STATE */
        <div className="text-gray-400 py-24 bg-[#151821] rounded-3xl border border-dashed border-gray-700">

          <div className="text-6xl mb-5">
            🚀
          </div>

          <h2 className="text-3xl font-bold text-white">
            No Projects Found
          </h2>

          <p className="mt-3 text-gray-500">
            Try selecting another category
          </p>

        </div>

      ) : (

        /* PROJECT GRID */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => {

            // Handle tech stack safely
            const techStack = Array.isArray(project.techStack)
              ? project.techStack
              : typeof project.techStack === "string"
              ? project.techStack.split(",")
              : [];

            return (

              <div
                key={project._id}
                onClick={() => navigate(`/project/${project._id}`)}
                className="group cursor-pointer"
              >

                {/* CARD */}
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">

                  {/* FEATURED BADGE */}
                  {project.featured && (

                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">

                      <span className="text-xs font-semibold text-white">
                        ⭐ Featured
                      </span>

                    </div>
                  )}

                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden bg-black">

                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6 text-left text-white space-y-5">

                    {/* TITLE */}
                    <div>

                      <h2 className="text-2xl font-bold group-hover:text-purple-400 transition-colors duration-300">

                        {project.title}

                      </h2>

                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">

                      {project.shortDescription}

                    </p>

                    {/* CATEGORY + STATUS */}
                    <div className="flex flex-wrap gap-2">

                      <span className="px-3 py-1 text-xs rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300">

                        {project.category}

                      </span>

                      <span className="px-3 py-1 text-xs rounded-xl bg-green-500/20 border border-green-500/30 text-green-300">

                        {project.status}

                      </span>

                    </div>

                    {/* TECH STACK */}
                    <div className="flex flex-wrap gap-2">

                      {techStack.slice(0, 4).map((tech, index) => (

                        <span
                          key={index}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-white/10 border border-white/10 text-gray-300 hover:bg-purple-500/20 transition"
                        >
                          {tech.trim()}
                        </span>

                      ))}

                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-3 pt-2">

                      {/* CODE */}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                      >
                        <i className="fa-brands fa-github me-2"></i>
                        Code
                      </a>

                      {/* LIVE */}
                      {project.liveLink && (

                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-sm font-medium"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                          Live
                        </a>
                      )}

                    </div>

                    {/* DETAILS BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        getProject(project._id);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02] font-semibold shadow-lg"
                    >
                      <i className="fa-solid fa-eye"></i>

                      View Details
                    </button>

                  </div>

                  {/* HOVER GLOW */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>

                </div>

              </div>
            );
          })}

        </div>
      )}
    </div>
  );
};

export default Projects;
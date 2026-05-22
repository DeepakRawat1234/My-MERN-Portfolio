import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutProject = () => {

  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchProject = async () => {

      try {

        if (!id) return;

        const res = await fetch(
          `http://localhost:5000/api/projects/${id}`
        );

        const resData = await res.json();

        setData(resData.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProject();

  }, [id]);

  // Loading
  if (!data) {

    return (

      <div className="min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center gap-4">

        <div className="w-10 h-10 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin" />

        <span className="text-cyan-400/60 text-xs tracking-widest uppercase font-mono">

          Loading...

        </span>

      </div>
    );
  }

  // Handle String / Array
  const techStack = Array.isArray(data.techStack)
    ? data.techStack
    : typeof data.techStack === "string"
    ? data.techStack.split(",")
    : [];

  const features = Array.isArray(data.features)
    ? data.features
    : typeof data.features === "string"
    ? data.features.split(",")
    : [];

  return (

    <section className="relative min-h-screen pt-20 bg-[#0b0b14] text-white overflow-hidden">

      {/* BG EFFECTS */}
      <div className="pointer-events-none fixed inset-0 z-0">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />

      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 pb-28">

        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">

          {/* LEFT */}
          <div>

            {/* CATEGORY */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-[11px] uppercase tracking-[0.18em] font-mono mb-6">

              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>

              {data.category || "Project"}

            </span>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight bg-gradient-to-br from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent mb-6">

              {data.title}

            </h1>

            {/* DESCRIPTION */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">

              {data.shortDescription}

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">

              {/* GITHUB */}
              {data.githubLink && (

                <a
                  href={data.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
                >
                  <i className="fa-brands fa-github"></i>

                  GitHub
                </a>
              )}

              {/* LIVE */}
              {data.liveLink && (

                <a
                  href={data.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-[#0b0b14] font-semibold hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>

                  Live Demo
                </a>
              )}

              {/* VIDEO */}
              {data.videoDemo && (

                <a
                  href={data.videoDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-pink-400/40 hover:text-pink-400 transition-all duration-300"
                >
                  <i className="fa-solid fa-play text-xs"></i>

                  Watch Demo
                </a>
              )}

            </div>

            {/* META */}
            <div className="flex flex-wrap gap-3">

              {/* STATUS */}
              {data.status && (

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-mono">

                  <i className="fa-solid fa-folder text-[11px]"></i>

                  {data.status}

                </div>
              )}

              {/* DATE */}
              {data.createdAt && (

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 text-xs font-mono">

                  <i className="fa-regular fa-calendar text-[11px]"></i>

                  {new Date(data.createdAt).toDateString()}

                </div>
              )}

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[30px] bg-gradient-to-br from-cyan-500/20 to-violet-600/10 blur-2xl"></div>

            <div className="relative p-[1.5px] rounded-[28px] bg-gradient-to-br from-cyan-400/40 via-violet-500/20 to-white/5">

              <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full rounded-[26px] aspect-video object-cover"
              />

            </div>

          </div>

        </div>

        {/* OVERVIEW */}
        {data.fullDescription && (

          <div className="mb-20 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10">

            <p className="flex items-center gap-2 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-mono mb-3">

              <span className="w-5 h-px bg-cyan-400/60"></span>

              Overview

            </p>

            <h2 className="text-3xl font-bold mb-5">
              Project Overview
            </h2>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">

              {data.fullDescription}

            </p>

          </div>
        )}

        {/* TECH STACK */}
        {techStack.length > 0 && (

          <div className="mb-20">

            <p className="flex items-center gap-2 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-mono mb-3">

              <span className="w-5 h-px bg-cyan-400/60"></span>

              Built With

            </p>

            <h2 className="text-3xl font-bold mb-6">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">

              {techStack.map((tech, index) => (

                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-cyan-500/[0.08] border border-cyan-400/20 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition-all duration-300"
                >
                  {tech.trim()}
                </span>

              ))}

            </div>

          </div>
        )}

        {/* FEATURES */}
        {features.length > 0 && (

          <div>

            <p className="flex items-center gap-2 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-mono mb-3">

              <span className="w-5 h-px bg-cyan-400/60"></span>

              Capabilities

            </p>

            <h2 className="text-3xl font-bold mb-8">
              Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-400/25 hover:bg-cyan-500/[0.04] transition-all duration-300"
                >

                  <div className="flex items-start gap-4">

                    <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 mt-0.5">

                      <i className="fa-solid fa-check text-cyan-400 text-[11px]"></i>

                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">

                      {item.trim()}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default AboutProject;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AboutProject = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        if (!id) return;
        const res = await fetch(`http://localhost:5000/api/projects/${id}`);
        const resData = await res.json();
        setData(resData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, [id]);

  if (!data) {
    return (
      <div className=" min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin" />
        <span className="text-cyan-400/60 text-xs tracking-widest uppercase font-mono">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen pt-20 bg-[#0b0b14] text-white overflow-hidden">

      {/* ── BG EFFECTS ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 pb-28">

        {/* ── HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

          {/* LEFT */}
          <div className="flex flex-col">

            {/* Category Badge */}
            <span className="self-start flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-[11px] font-mono tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
              {data.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5 bg-gradient-to-br from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent">
              {data.title}
            </h1>

            {/* Short Description */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
              {data.shortDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={data.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <i className="fa-brands fa-github text-base" />
                GitHub
              </a>

              <a
                href={data.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-[#0b0b14] text-sm font-bold shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.55)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                Live Demo
              </a>

              <a
                href={data.videoDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-pink-400 hover:border-pink-400/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <i className="fa-solid fa-play text-xs" />
                Watch Demo
              </a>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-500 text-xs font-mono">
                <i className="fa-solid fa-folder text-slate-600 text-[11px]" />
                {data.status}
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-500 text-xs font-mono">
                <i className="fa-regular fa-calendar text-slate-600 text-[11px]" />
                {new Date(data.createdAt).toDateString()}
              </div>
            </div>
          </div>

          {/* RIGHT — Thumbnail */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-cyan-500/20 to-violet-600/15 blur-2xl" />
            <div className="relative p-[1.5px] rounded-[24px] bg-gradient-to-br from-cyan-400/40 via-violet-500/20 to-white/5">
              <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full rounded-[23px] aspect-video object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border border-cyan-400/25 bg-cyan-400/5" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full border border-violet-400/25 bg-violet-400/5" />
          </div>
        </div>

        {/* ── OVERVIEW ── */}
        <div className="relative mb-20 p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <p className="flex items-center gap-2.5 text-cyan-400 text-[10px] font-mono tracking-[0.18em] uppercase mb-2">
            <span className="block w-5 h-px bg-cyan-400/60" />
            Overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mb-4">
            Project Overview
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            {data.fullDescription}
          </p>
        </div>

        {/* ── TECH STACK ── */}
        <div className="mb-20">
          <p className="flex items-center gap-2.5 text-cyan-400 text-[10px] font-mono tracking-[0.18em] uppercase mb-2">
            <span className="block w-5 h-px bg-cyan-400/60" />
            Built With
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {data.techStack?.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/[0.08] border border-cyan-400/20 hover:bg-cyan-500/15 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── FEATURES ── */}
        <div>
          <p className="flex items-center gap-2.5 text-cyan-400 text-[10px] font-mono tracking-[0.18em] uppercase mb-2">
            <span className="block w-5 h-px bg-cyan-400/60" />
            Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 mb-6">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.features?.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-cyan-500/[0.05] hover:border-cyan-400/25 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="shrink-0 w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mt-0.5 group-hover:bg-cyan-400/15 transition-colors">
                  <i className="fa-solid fa-check text-cyan-400 text-[11px]" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProject;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = ({userPassword}) => {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const password=userPassword.password;
    const navigate= useNavigate();
  const goToLogin = () => {

    navigate("/login", {
      state: password,
    });
}
    return (
        <div>

            <nav className="bg-[#1a1a2e] text-white p-4 px-6 fixed  w-full top-0 left-0 z-50">

                {/* Top Navbar */}
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="Font-Fontdiner items-center">
                        <h1 className="text-2xl font-bold">
                            Deepak <span className="text-[#29a8c2]">Rawat</span>
                        </h1>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-6 items-center font-Bubblegum ">

                        <a
                            href="#home"
                            onClick={() => setActive("home")}
                            className={active === "home" ? "text-[#29a8c2]" : "text-white"}
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={() => setActive("about")}
                            className={active === "about" ? "text-[#29a8c2]" : "text-white"}
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            onClick={() => setActive("skills")}
                            className={active === "skills" ? "text-[#29a8c2]" : "text-white"}
                        >
                            Skills
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setActive("projects")}
                            className={active === "projects" ? "text-[#29a8c2]" : "text-white"}
                        >
                            Projects
                        </a>

                        <a
                            href="#certificates"
                            onClick={() => setActive("certificates")}
                            className={active === "certificates" ? "text-[#29a8c2]" : "text-white"}
                        >
                            Certificates
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setActive("contact")}
                            className={active === "contact" ? "text-[#29a8c2]" : "text-white"}
                        >
                            Contact
                        </a>

                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex gap-4 items-center">

                        <h1 className="p-1 bg-gray-700 rounded-lg px-2" onClick={goToLogin}>
                            <i className="fa-solid fa-gear text-blue-400"></i>
                        </h1>

                        <button className="bg-gradient-to-r from-[#9255e0] to-blue-700 text-white px-6 py-2 rounded-lg">
                            Hire Me
                        </button>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                </div>

                {/* Mobile Menu */}
                {
                    open && (

                        <div className="flex flex-col mt-6 gap-4 md:hidden">

                            <a
                                href="#home"
                                onClick={() => {
                                    setActive("home");
                                    setOpen(false);
                                }}
                                className={`w-full bg-[#1d1d44] p-3 rounded-lg ${active === "home" ? "text-[#29a8c2]" : "text-white"
                                    }`}
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                onClick={() => {
                                    setActive("about");
                                    setOpen(false);
                                }}
                                className={`w-full bg-[#1d1d44] p-3 rounded-lg ${active === "about" ? "text-[#29a8c2]" : "text-white"
                                    }`}
                            >
                                About
                            </a>

                            <a
                                href="#skills"
                                onClick={() => {
                                    setActive("skills");
                                    setOpen(false);
                                }}
                                className={`w-full bg-[#1d1d44] p-3 rounded-lg ${active === "skills" ? "text-[#29a8c2]" : "text-white"
                                    }`}
                            >
                                Skills
                            </a>

                            <a
                                href="#projects"
                                onClick={() => {
                                    setActive("projects");
                                    setOpen(false);
                                }}
                                className={`w-full bg-[#1d1d44] p-3 rounded-lg ${active === "projects" ? "text-[#29a8c2]" : "text-white"
                                    }`}
                            >
                                Projects
                            </a>

                            <a
                                href="#certificates"
                                onClick={() => {
                                    setActive("certificates");
                                    setOpen(false);
                                }}
                                className={`w-full bg-[#1d1d44] p-3 rounded-lg ${active === "certificates" ? "text-[#29a8c2]" : "text-white"
                                    }`}
                            >
                                Certificates
                            </a>

                            <a
                                href="#contact"
                                onClick={() => {
                                    setActive("contact");
                                    setOpen(false);
                                }}
                                className={`w-full bg-[#1d1d44] p-3 rounded-lg ${active === "contact" ? "text-[#29a8c2]" : "text-white"
                                    }`}
                            >
                                Contact
                            </a>

                            <button className="bg-gradient-to-r from-[#9255e0] to-blue-700 text-white px-6 py-3 rounded-lg w-full">
                                Hire Me
                            </button>

                        </div>
                    )
                }

            </nav>

        </div>
    );
}

export default Navbar;
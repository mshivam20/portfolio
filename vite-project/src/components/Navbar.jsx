import React, { useState } from "react";
import "./main.css";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import profile from "../assets/profile.png";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="h-14 ">
            <div className="nav  w-full h-14 text-amber-50  font-bold fixed flex justify-between items-center px-4 border-b border-blue-300 ">
                <div className="flex justify-center items-center"><img src={profile} alt="" className="w-8 rounded-full m-2" /><h1>Shivam Murkute</h1></div>
                <div className="flex pr-4 items-center">
                    <a href="https://github.com/mshivam20" className="mr-4"><FaGithub className="text-white text-3xl hover:text-gray-300" /></a>
                    <a href="https://www.linkedin.com/in/shivam-murkute-a89934336?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="mr-4"><FaLinkedin className="text-white text-3xl hover:text-blue-400" /></a>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl"><FaBars /></button>
                </div>
            </div>

            <div className={`${isMenuOpen ? "translate-x-0" : "translate-x-full"} nav justify-self-end fixed top-0 right-0 w-64 h-screen z-50 bg-[#1B263B] transition-transform duration-300`}>
                <button className="text-white p-4 text-3xl float-right" onClick={() => setIsMenuOpen(!isMenuOpen)}><FaTimes /></button>
                <div className="text-white flex flex-col p-4 ">
                    <a href="#home" className="mt-3 font-semibold">Home</a>
                    <a href="#about" className="mt-3 font-semibold">About</a>
                    <a href="#skills" className="mt-3 font-semibold">Skills</a>
                    <a href="#projects" className="mt-3 font-semibold">Projects</a>
                    <a href="#contact" className="mt-3 font-semibold">Contact</a>
                </div>
            </div>

        </nav>
    )
}
export default Navbar;
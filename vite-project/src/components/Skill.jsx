import React from "react";
import "./main.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiPostgresql, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";



function Skill() {
    return (
        <div id="skills" className="skills text-white min-h-screen w-full max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-white text-4xl font-bold py-4 text-center md:text-left md:ml-20">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20">
                <div className="skill w-full h-auto min-h-50 hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out rounded-xl pb-4">
                    <p className="p-4 font-semibold text-center md:text-left">FRONTEND</p>
                    <div className="flex items-center justify-around flex-wrap p-3 gap-y-4">
                        <span className="flex flex-col items-center justify-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><FaHtml5 className="text-[#E34F26] text-4xl" /></div><label className="font-semibold mt-1">html</label></span>
                        <span className="flex flex-col items-center justify-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><FaCss3Alt className="text-[#1572B6] text-4xl" /></div><label className="font-semibold mt-1">css</label></span>
                        <span className="flex flex-col items-center justify-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><SiTailwindcss className="text-[#06B6D4] text-4xl" /></div><label className="font-semibold mt-1">tailwind</label></span>
                        <span className="flex flex-col items-center justify-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><SiJavascript className="text-[#F7DF1E] bg-black text-4xl" /></div><label className="font-semibold mt-1">javaScript</label></span>
                        <span className="flex flex-col items-center justify-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><FaReact className="text-[#61DAFB] text-4xl" /></div><label className="font-semibold mt-1">react</label></span>
                    </div>

                </div>
                <div className="skill w-full h-auto min-h-50 hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out rounded-xl pb-4">
                    <p className="p-4 font-semibold text-center md:text-left">BACKEND</p>
                    <div className="flex items-center justify-center p-3 gap-6">
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><FaNodeJs className="text-[#339933] text-4xl" /></div><label className="font-semibold mt-1">nodejs</label></span>
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><SiExpress className="text-black text-4xl" /></div><label className="font-semibold mt-1">express</label></span>
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><SiPostgresql className="text-[#4169E1] text-4xl" /></div><label className="font-semibold mt-1">postgres</label></span>
                    </div>
                </div>
                <div className="skill w-full h-auto min-h-50 hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out rounded-xl pb-4 flex flex-col justify-between">
                    <p className="p-4 font-semibold text-center md:text-left">TOOLS</p>
                    <div className="flex items-center justify-center p-3 gap-6 mb-4">
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><FaGitAlt className="text-[#F05032] text-4xl" /></div><label className="font-semibold mt-1">git</label></span>
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><SiPostman className="text-[#FF6C37] text-4xl" /></div><label className="font-semibold mt-1">postman</label></span>
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><VscVscode className="text-[#007ACC] text-4xl" /></div><label className="font-semibold mt-1">vscode</label></span>
                    </div>
                </div>
                <div className="skill w-full h-auto min-h-50 hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out rounded-xl pb-4 flex flex-col justify-between">
                    <p className="p-4 font-semibold text-center md:text-left">LANGS</p>
                    <div className="flex items-center justify-center p-3 gap-6 mb-4">
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><SiJavascript className="text-[#F7DF1E] bg-black text-4xl" /></div><label className="font-semibold mt-1">javaScript</label></span>
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><GrMysql className="text-[#4479A1] text-4xl" /></div><label className="font-semibold mt-1">sql</label></span>
                        <span className="flex flex-col items-center"><div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-gray-600 transition-all duration-300 ease-in-out cursor-pointer"><FaPython className="text-[#3776AB] text-4xl" /></div><label className="font-semibold mt-1">python</label></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;
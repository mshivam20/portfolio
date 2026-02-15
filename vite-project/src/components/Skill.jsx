import React from "react";
import "./main.css";
import express from "../assets/express.png";
import node from "../assets/nodejs.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import git from "../assets/git.png";
import postman from "../assets/postman.png";
import vscode from "../assets/vs.png";
import tailwind from "../assets/tailwindcss.png";
import postgress from "../assets/postgress.png";
import sql from "../assets/sql.png";
import python from "../assets/python.png";



function Skill(){
    return(
        <div id="skills" className="skills text-white h-screen w-160 ml-45 ">
            <h1 className="text-white text-4xl font-bold py-4">Skills</h1>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="w-100 h-50 bg-[rgba(10,19,65,0.36)] hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out rounded-xl" >
                    <p className="p-4 font-semibold"> FRONTEND</p>
                    <div className="flex items-center justify-between p-3">
                    <span className="flex flex-col items-center"><img src={html} alt="" className="w-14 bg-white  rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out "/><label htmlFor="html">html</label></span>
                    <span className="flex flex-col items-center"><img src={css} alt="" className="w-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out"/><label htmlFor="css">css</label></span>
                    <span className="flex flex-col items-center"><img src={tailwind} alt=""  className="w-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out"/><label htmlFor="tailwind">tailwind</label></span>
                    <span className="flex flex-col items-center"><img src={js} alt="" className="w-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out "/><label htmlFor="js">javaScript</label></span>
                    <span className="flex flex-col items-center"><img src={react} alt="" className="w-15 h-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out"/><label htmlFor="react">react</label></span>
                    </div>
 
                </div>
                <div className="w-100 h-50 bg-[rgba(10,19,65,0.36)] hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out ml-20 rounded-xl"><p className="p-4 font-semibold">BACKEND</p>
                <div className="flex items-center justify-center p-3">
                    <span className="flex flex-col items-center"><img src={node} alt="" className="w-14 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="nodejs">nodejs</label></span>
                    <span className="flex flex-col items-center"><img src={express} alt="" className="w-14 h-15 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="express">express</label></span>
                    <span className="flex flex-col items-center"><img src={postgress} alt="" className="w-14 bg-white ml-4 rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="postgres">postgres</label></span>
                </div>
                </div>
                <div className="w-100 h-50 bg-[rgba(10,19,65,0.36)] hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out rounded-xl"><p className="p-4 font-semibold">TOOLS</p>
                <div className="flex items-center justify-center p-3">
                    <span className="flex flex-col items-center"><img src={git} alt="" className="w-14 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="git">git</label></span>
                    <span className="flex flex-col items-center"><img src={postman} alt="" className="w-14 h-15 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="postman">postman</label></span>
                    <span className="flex flex-col items-center"><img src={vscode} alt="" className="w-14 h-15 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="vscode">vscode</label></span>
                </div></div>
                <div className="w-100 h-50 bg-[rgba(10,19,65,0.36)] hover:bg-[rgb(89,80,164)] transition-all duration-300 ease-in-out ml-20 rounded-xl"><p className="p-4 font-semibold">LANGS</p>
                <div className="flex items-center justify-center p-3">
                    <span className="flex flex-col items-center"><img src={js} alt="" className="w-14 bg-white ml-4 rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="js">javaScript</label></span>
                    <span className="flex flex-col items-center"><img src={sql} alt="" className="w-14 h-15 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="sql">sql</label></span>
                    <span className="flex flex-col items-center"><img src={python} alt="" className="w-14 h-15 ml-4 bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out" /><label htmlFor="python">python</label></span>
                </div>
                </div>
                </div>
        </div>
    )
}
export default Skill;
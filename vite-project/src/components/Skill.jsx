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
        <div id="skills" className="skills text-white h-screen w-160 ml-70 ">
                <div className="w-100 h-50 bg-blue-950 " >
                    <p>FRONTEND</p>
                    <div className="flex items-center justify-between p-3">
                    <span className="flex flex-col items-center"><img src={html} alt="" className="w-14 bg-white  rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out "/><label htmlFor="html">html</label></span>
                    <span className="flex flex-col items-center"><img src={css} alt="" className="w-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out"/><label htmlFor="css">css</label></span>
                    <span className="flex flex-col items-center"><img src={tailwind} alt=""  className="w-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out"/><label htmlFor="tailwind">tailwind</label></span>
                    <span className="flex flex-col items-center"><img src={js} alt="" className="w-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out "/><label htmlFor="js">javaScript</label></span>
                    <span className="flex flex-col items-center"><img src={react} alt="" className="w-15 h-14  bg-white rounded-xl hover:w-17 hover:shadow-gray-600 transition-all duration-300 ease-in-out"/><label htmlFor="react">react</label></span>
                    </div>
 
                </div>
                <div><p>BACKEND</p>
                <div className="flex">
                    <span className="flex flex-col"><img src={node} alt="" className="w-15 ml-4 bg-white" /><label htmlFor="nodejs">nodejs</label></span>
                    <span className="flex flex-col"><img src={express} alt="" className="w-15 h-15 ml-4 bg-white" /><label htmlFor="express">express</label></span>
                    <span className="flex flex-col"><img src={postgress} alt="" className="w-15 bg-white ml-4" /><label htmlFor="postgres">postgres</label></span>
                </div>
                </div>
                <div><p>TOOLS</p>
                <div className="flex">
                    <span className="flex flex-col"><img src={git} alt="" className="w-15 ml-4 bg-white" /><label htmlFor="git">git</label></span>
                    <span className="flex flex-col"><img src={postman} alt="" className="w-15 h-15 ml-4 bg-white" /><label htmlFor="postman">postman</label></span>
                    <span className="flex flex-col"><img src={vscode} alt="" className="w-15 h-15 ml-4 bg-white" /><label htmlFor="vscode">vscode</label></span>
                </div></div>
                <div><p>LANGS</p>
                <div className="flex">
                    <span className="flex flex-col"><img src={js} alt="" className="w-15 bg-white ml-4" /><label htmlFor="js">javaScript</label></span>
                    <span className="flex flex-col"><img src={sql} alt="" className="w-15 h-15 ml-4 bg-white" /><label htmlFor="sql">sql</label></span>
                    <span className="flex flex-col"><img src={python} alt="" className="w-15 h-15 ml-4 bg-white" /><label htmlFor="python">python</label></span>
                </div>
                </div>
        </div>
    )
}
export default Skill;
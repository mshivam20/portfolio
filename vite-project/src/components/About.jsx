import React from "react";

function About(){
    return(
        <div id="about" className="about h-screen w-150 ml-70 mt-45">
            <div className="flex flex-col   h-full">
            <h1 className="text-white text-4xl font-bold">about me</h1>
            <div className="mt-5">
                <p className="text-justify text-white">I’m Shivam, a passionate Frontend Developer and Engineering student who enjoys building modern, responsive web applications. I specialize in React and love creating clean UI with smooth user experiences.</p>
                <h1 className="text-white text-3xl font-bold mt-5">education</h1>
                <p className="text-justify text-white mt-5">B.Tech in Computer Engineering <br />
Bharati Vidyapeeth College of Engineering, Lavale, Pune <br />
2024 – 2028 <br />

Currently in my second year, focusing on core computer science fundamentals, problem-solving, and modern web development technologies.</p>
            </div>
            </div>
        </div>
    )
}
export default About;
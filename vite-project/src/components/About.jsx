import React from "react";
import "./main.css";

function About(){
    return(
        <div id="about" className="about h-fit w-200 ml-50 mt-50  text-white p-10 mb-15 rounded-2xl">
            <div className="flex flex-col   h-full">
            <h1 className=" text-4xl font-bold">About Me</h1>
            <div className="mt-5">
                <p className="text-justify ">I’m Shivam, a passionate Frontend Developer and Computer Engineering student who enjoys building modern, responsive, and user-friendly web applications. I specialize in React and focus on creating clean, intuitive UI with smooth user experiences. I enjoy transforming ideas into interactive digital products and continuously improving my skills in modern web technologies and best development practices.</p>
                <h1 className=" text-3xl font-bold mt-5">Education</h1><br />
                <p className="">- B.Tech in Computer Engineering </p><br />
<p>- Bharati Vidyapeeth College of Engineering, Lavale, Pune</p> <br />
<p>- 2024 – 2028</p> <br />

<p>- Currently in my second year, focusing on core computer science fundamentals, problem-solving, and modern web development technologies. Alongside my academic studies, I actively work on frontend projects to strengthen my practical development skills.</p>
            </div>
            </div>
        </div>
    )
}
export default About;
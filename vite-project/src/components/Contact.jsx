import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/email.png";
import instagram from "../assets/instagram.png";

function Contact(){
    return(
        <div id="contact" className="py-10 w-fit ml-60 mt-30">
            <h1 className="text-white text-4xl font-bold ml">Contact Me</h1>
            <div className="p-5 flex items-center justify-center gap-10">
            <div className="github w-35 h-40 bg-gray-900 flex flex-col items-center justify-center space-y-3 rounded-2xl  hover:bg-linear-to-tr from-[#161b22] via-[#24292e] to-[#6e5494]"><a href="https://github.com/mshivam20"><img src={github} alt="GitHub" className="bg-white w-15 rounded-2xl" /></a><a href="https://github.com/mshivam20"><h2 className="text-white  text-lg font-bold">GitHub</h2></a></div>
            <div className="linkedin  w-35 h-40 bg-gray-900 flex flex-col items-center justify-center space-y-3 rounded-2xl hover:bg-linear-to-tr from-[#0077b5] to-[#004182]"><a href="https://www.linkedin.com/in/shivam-murkute-a89934336?utm_source=share_via&utm_content=profile&utm_medium=member_android"><img src={linkedin} alt="LinkedIn" className="bg-white w-15 rounded-2xl" /></a><a href="https://linkedin.com/in/mshivam20"><h2 className="text-white  text-lg font-bold">LinkedIn</h2></a></div>
            <div className="email  w-35 h-40 bg-gray-900 flex flex-col items-center justify-center space-y-3 rounded-2xl hover:bg-linear-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC04]"><a href="mailto:murkuteshivam1@gmail.com"><img src={mail} alt=""  className="bg-white w-15 rounded-2xl"/></a><a href="mailto:murkuteshivam1@gmail.com"><h2 className="text-white text-lg font-bold ">Email</h2></a></div>
                <div className="instagram  w-35 h-40 bg-gray-900 flex flex-col items-center justify-center space-y-3  rounded-2xl hover:bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"><a href="https://www.instagram.com/shivam_murkute2006?igsh=MTgzY3BkMWo2bnp6cQ=="><img src={instagram} alt="Instagram" className="bg-white w-15 rounded-2xl"/></a><a href="https://www.instagram.com/shivam_murkute2006?igsh=MTgzY3BkMWo2bnp6cQ=="><h2 className="text-white text-lg font-bold">Instagram</h2></a></div>
                </div>
        </div>
    )
}

export default Contact;
import React,{useState} from "react";
import "./main.css";


function Navbar(){
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    return(
        <nav className="h-14 "> 
        <div className="bg-[rgb(10,18,28)]  w-full h-14 text-amber-50  font-bold fixed flex justify-between items-center px-4 border-b border-blue-300 ">
            <h1>Shivam Murkute</h1>
            <div className="flex pr-4 ">
                <a href=""><img src="./src/assets/github.png" alt=""  className="w-6 bg-white rounded-4xl mr-4"/></a>
                <a href=""><img src="./src/assets/linkedin.png" alt="" className="w-6 mr-4"/></a>
                <button onClick={()=>setIsMenuOpen(!isMenuOpen)} >menu</button>
            </div>
        </div>
            
            <div className={`${isMenuOpen ? "translate-x-0" : "translate-x-96"} nav justify-self-end fixed top-0 right-0 w-50 h-screen  bg-[#1B263B] transition-transform duration-300`}>
               <button className="text-white font-semibold p-4" onClick={()=>setIsMenuOpen(!isMenuOpen)}>close</button>
               <div className="text-white flex flex-col p-4 ">
                <a href="#home" className="mt-3 font-semibold">Home</a>
                <a href="#about" className="mt-3 font-semibold">About</a>
                <a href="#projects" className="mt-3 font-semibold">Projects</a>
                <a href="#contact" className="mt-3 font-semibold">Contact</a>
               </div>
            </div>

        </nav>
    )
}
export default Navbar;
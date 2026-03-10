import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import ProjectCarousel from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <ProjectCarousel />
        <Contact />
        <footer className="text-gray-400 text-center py-6 border-t border-gray-800 mt-10">
            <p>&copy; {new Date().getFullYear()} All rights reserved by Shivam Murkute</p>
        </footer>
    </React.StrictMode>
);


import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <About />
        <Skill />
    </React.StrictMode>
);


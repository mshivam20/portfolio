import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
import Home from "./components/Home.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
    </React.StrictMode>
);


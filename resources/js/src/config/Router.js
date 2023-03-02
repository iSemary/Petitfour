import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Connect from "../Pages/Connect";
import Projects from "../Pages/Projects";

function Router() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/connect" element={<Connect />} />
            </Routes>
        </div>
    );
}

export default Router;

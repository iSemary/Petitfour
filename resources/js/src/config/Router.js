import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Connect from "../Pages/Connect";
import Projects from "../Pages/Projects";
import Project from "../Pages/Project";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";

function Router() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:name" element={<Project />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<Blog />} />
            </Routes>
        </div>
    );
}

export default Router;

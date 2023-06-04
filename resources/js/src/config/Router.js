import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Skill from "../Pages/Skill";
import Connect from "../Pages/Connect";
import Projects from "../Pages/Projects";
import Project from "../Pages/Project";
import Blog from "../Pages/Blog";
import Blogs from "../Pages/Blogs";

function Router(props) {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home config={props.config} />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/skills/:name" element={<Skill />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:name" element={<Project />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<Blog />} />
                <Route path="/connect" element={<Connect config={props.config?.config?.system} />} />
            </Routes>
        </div>
    );
}

export default Router;

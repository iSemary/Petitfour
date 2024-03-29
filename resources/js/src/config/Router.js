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
import NotFound from "../Pages/NotFound";
import ScrollToTop from "../Pages/Utilities/ScrollToTop"

function Router(props) {
    return (
        <div className="content">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home config={props.config} theme={props.theme} />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/skills/:name" element={<Skill />} />
                <Route path="/projects" element={<Projects categories={props.config?.categories} />} />
                <Route path="/projects/:name" element={<Project/>} />
                <Route path="/blogs" element={<Blogs categories={props.config?.categories} />} />
                <Route path="/blogs/:slug" element={<Blog />} />
                <Route path="/connect" element={<Connect config={props.config?.config?.system} theme={props.theme} />} />

                <Route path="*" element={<NotFound image={props.config?.config?.system?.not_found_image}/>} />
            </Routes>
        </div>
    );
}

export default Router;

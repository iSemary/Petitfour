import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";

function Router() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </div>
    );
}

export default Router;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";

function Router() {
    return (
        <div className="content">
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default Router;

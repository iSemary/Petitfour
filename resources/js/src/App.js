import React from "react";
import Router from "./config/Router";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.css";
function App() {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;

import React, { useEffect } from "react";
import Router from "./config/Router";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./assets/styles/style.css";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
import { getConfig } from "./actions/configSlice";

function App() {
    AOS.init();
    const config = useSelector((state) => state.config.data);
    const dispatch = useDispatch();
    let theme = localStorage.getItem("theme") === "true";

    // Make the header blur glass effect 
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        const headerElement = document.querySelector('.main-nav');
        if (scrollPosition > 65) {
            headerElement.classList.add("glass-header");
        } else {
            headerElement.classList.remove("glass-header");
        }
    });

    useEffect(() => {
        if (theme) document.body.classList.add("pharaoh-mode");
        dispatch(getConfig());
    }, [dispatch]);
    return (
        <>
            <Header
                theme={theme}
                logo={config?.config?.system?.logo}
                theme_logo={config?.config?.system?.theme_logo}
                resume={config?.config?.user?.resume}
            />
            <div className="overlay-background"></div>
            <Router config={config} theme={theme} />
            <Footer
                socialLinks={config?.social_links}
                userInfo={config?.config?.user}
            />
        </>
    );
}

export default App;

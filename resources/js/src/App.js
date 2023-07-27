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
import ScrollToDown from "./Pages/Utilities/ScrollToDown";

function App() {
    AOS.init();
    const config = useSelector((state) => state.config.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConfig());
        const theme = localStorage.getItem("theme") === "true";
        if (theme) document.body.classList.add("pharaoh-mode");
    }, [dispatch]);
    return (
        <>
            <Header
                logo={config?.config?.system?.logo}
                theme_logo={config?.config?.system?.theme_logo}
                resume={config?.config?.user?.resume}
            />
            <ScrollToDown />
            <Router config={config} />

            <Footer
                socialLinks={config?.social_links}
                userInfo={config?.config?.user}
            />
        </>
    );
}

export default App;

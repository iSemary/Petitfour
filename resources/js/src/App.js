import React, { useEffect, useState } from "react";
import Router from "./config/Router";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./assets/styles/style.css";
import AxiosConfig from "./config/AxiosConfig";
import AOS from "aos";
import SideAlert from "./Pages/Components/Partials/SideAlert";

function App() {
    AOS.init();

    const [config, setConfig] = useState([]);
    const [loading, setLoading] = useState(true);

    const mode = localStorage.getItem("mode")
        ? localStorage.getItem("mode")
        : "dark";

    const getData = () => {
        AxiosConfig.get(`/home`)
            .then((response) => {
                if (response.data.success) {
                    setConfig(response.data.data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header
                logo={config?.config?.system?.logo}
                theme_logo={config?.config?.system?.theme_logo}
            />
            <Router config={config} />

            {/* <SideAlert /> */}

            <Footer
                socialLinks={config?.social_links}
                userInfo={config?.config?.user}
            />
        </>
    );
}

export default App;

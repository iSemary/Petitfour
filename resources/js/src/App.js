import React, { useEffect, useState } from "react";
import Router from "./config/Router";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./assets/styles/style.css";
import AxiosConfig from "./config/AxiosConfig";

function App() {
    const [config, setConfig] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <Footer
                socialLinks={config?.social_links}
                userInfo={config?.config?.user}
            />
        </>
    );
}

export default App;

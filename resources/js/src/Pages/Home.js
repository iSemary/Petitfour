import { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TransitionSound from "../assets/sounds/moon-night-transition-sound-effect.mp3";

import Features from "./Components/Features";
import HighlightedSkills from "./Components/HighlightedSkills";
import TopProjects from "./Components/TopProjects";
import LatestExperience from "./Components/LatestExperience";
import SideSkills from "./Components/SideSkills";
import LatestBlogs from "./Components/LatestBlogs";
import AxiosConfig from "../config/AxiosConfig";
import SwitchButton from "./Components/Partials/SwitchButton";

function Home(props) {
    const [isPlayingTransition, setIsPlayingTransition] = useState(false);
    const transitionRef = useRef(null);
    const positionTitleRef = useRef(null);
    const theme = localStorage.getItem("theme") === "true";

    const startFlashing = (e) => {};

    const switchTheme = (e) => {
        localStorage.setItem("theme", String(!theme));
        // Count user theme request for analytics uses
        countUserThemeRequest();

        setIsPlayingTransition(true);
        startFlashing();
    };

    const countUserThemeRequest = (e) => {
        const requestDetails = {
            theme_type: localStorage.getItem("theme"),
            device_type: navigator.platform,
            device_details: navigator.userAgent,
            view_type: document
                .querySelector('meta[name="view-type"]')
                .getAttribute("content"),
        };

        AxiosConfig.post(`/count-theme`, requestDetails).catch((error) => {
            console.log(error);
        });
    };

    const handleTransitionEnded = (e) => {
        setIsPlayingTransition(false);
    };

    const animateHackText = (reference) => {
        const letters = "ABMNOPQRSTUVWXYZ&~$[+%+`@*@%+?$^";
        let interval = null;
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            reference.current.innerText = reference.current.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return reference.current.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= reference.current.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 20);
    };

    return (
        <>
            {isPlayingTransition && <div className="flash-effect"></div>}

            <div className="main-background-cover">
                <Container className="top-content">
                    <Row>
                        <Col md={6}>
                            <div className="top-home-details">
                                <h1>
                                    <span>
                                        {
                                            props?.config?.config?.user
                                                ?.first_name
                                        }
                                    </span>
                                    <br />
                                    <span className="gradient-text">
                                        {props?.config?.config?.user?.last_name}
                                    </span>
                                </h1>
                                <h4
                                    ref={positionTitleRef}
                                    data-value={
                                        props?.config?.config?.user?.position
                                    }
                                    className="text-hack-animation width-fit-content"
                                    onMouseOver={() =>
                                        animateHackText(positionTitleRef)
                                    }
                                >
                                    {props?.config?.config?.user?.position}
                                </h4>
                                <p>{props?.config?.config?.user?.slogan}</p>
                            </div>
                            <div className="top-home-buttons">
                                <Row>
                                    <Col md={6}>

                                        <SwitchButton onClick={(e) => switchTheme()} />
                                        
                                        {/* <button
                                            className="btn btn-primary btn-switch-theme"
                                            onClick={(e) => switchTheme()}
                                            type="button"
                                        >
                                            {theme
                                                ? " Switch original theme"
                                                : " Switch moon night"}
                                        </button> */}
                                    </Col>
                                    <Col md={6}></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>{/* Gif Graph  */}</Col>
                    </Row>
                </Container>
            </div>
            {/* <Container> */}
            <Features features={props?.config.features} />
            <HighlightedSkills
                highlightedSkills={props?.config.highlighted_skills}
            />
            <TopProjects topProjects={props?.config.top_projects} />
            <LatestExperience
                latestExperience={props?.config?.latest_experience}
            />
            <SideSkills sideSkills={props?.config.side_skills} />
            <LatestBlogs latestBlogs={props?.config?.latest_blogs} />
            {/* </Container> */}

            {isPlayingTransition && (
                <audio
                    autoPlay
                    ref={transitionRef}
                    src={TransitionSound}
                    type="audio/mp3"
                    onEnded={handleTransitionEnded}
                ></audio>
            )}
        </>
    );
}

export default Home;

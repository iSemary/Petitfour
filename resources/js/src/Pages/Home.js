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

function Home(props) {
    const [isPlayingTransition, setIsPlayingTransition] = useState(false);
    const transitionRef = useRef(null);
    const theme = localStorage.getItem("theme") === "true";

    const startFlashing = (e) => {
        
    }

    const switchTheme = (e) => {
        localStorage.setItem("theme", String(!theme));
        setIsPlayingTransition(true);
        startFlashing();
    };

    const handleTransitionEnded = (e) => {
        setIsPlayingTransition(false);
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
                                    {props?.config?.config?.user?.first_name}
                                    <br />
                                    {props?.config?.config?.user?.last_name}
                                </h1>
                                <h4>{props?.config?.config?.user?.position}</h4>
                                <p>{props?.config?.config?.user?.slogan}</p>
                            </div>
                            <div className="top-home-buttons">
                                <Row>
                                    <Col md={6}>
                                        <button
                                            className="btn btn-primary btn-switch-theme"
                                            onClick={(e) => switchTheme()}
                                            type="button"
                                        >
                                            {theme
                                                ? " Switch original theme"
                                                : " Switch moon night"}
                                        </button>
                                    </Col>
                                    <Col md={6}></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>{/* Gif Graph  */}</Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Features features={props?.config?.features} />
                <HighlightedSkills
                    highlightedSkills={props?.config?.highlighted_skills}
                />
                <TopProjects topProjects={props?.config?.top_projects} />
                <LatestExperience
                    latestExperience={props?.config?.latest_experience}
                />
                <SideSkills sideSkills={props?.config?.side_skills} />
                <LatestBlogs latestBlogs={props?.config?.latest_blogs} />
            </Container>

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

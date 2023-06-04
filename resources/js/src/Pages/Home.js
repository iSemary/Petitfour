import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Aim from "./Components/Aim";
import MiniSkills from "./Components/MiniSkills";
import MiniProjects from "./Components/MiniProjects";
import GithubRepos from "./Components/GithubRepos";
import SideSkills from "./Components/SideSkills";

function Home(props) {
    return (
        <>
            <div className="main-background-cover">
                <Container className="top-content">
                    <Row>
                        <Col md={6}>
                            <h1>
                                {props?.config?.config?.user?.first_name}
                                <br />
                                {props?.config?.config?.user?.last_name}
                            </h1>
                            <p>{props?.config?.config?.user?.slogan}</p>
                        </Col>
                        <Col md={6}>{/* Gif Graph  */}</Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Aim />
                <MiniSkills
                    highlightedSkills={props?.config?.highlighted_skills}
                />
                <MiniProjects />
                <GithubRepos />
                <SideSkills />
                {/* <LinkedInTestimonal/> */}
            </Container>
        </>
    );
}

export default Home;

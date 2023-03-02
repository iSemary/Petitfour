import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Aim from "./Components/Aim";
import MiniSkills from "./Components/MiniSkills";
import MiniProjects from "./Components/MiniProjects";
import GithubRepos from "./Components/GithubRepos";
import SideSkills from "./Components/SideSkills";

function Home() {
    return (
        <>
            <div class="main-background-cover">
                <Container className="top-content">
                    <Row>
                        <Col md={6}>
                            <h1>Full Stack Engineer</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into ele
                            </p>
                        </Col>
                        <Col md={6}>{/* Gif Graph  */}</Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Aim />
                <MiniSkills />
                <MiniProjects />
                <GithubRepos />
                <SideSkills />
            </Container>
        </>
    );
}

export default Home;

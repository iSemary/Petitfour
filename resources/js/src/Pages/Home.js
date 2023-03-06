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
                                I specialize in creating fast and responsive web
                                applications that deliver seamless user
                                experiences. With my expertise in both front-end
                                and back-end development, I'm able to build
                                robust solutions that meet the unique needs of
                                each project. From the initial concept to the
                                final product, I'm dedicated to delivering
                                high-quality work that exceeds expectations.
                                Let's work together to bring your vision to
                                life.
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

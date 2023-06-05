import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Features from "./Components/Features";
import HighlightedSkills from "./Components/HighlightedSkills";
import TopProjects from "./Components/TopProjects";
import LatestExperience from "./Components/LatestExperience";
import SideSkills from "./Components/SideSkills";
import LatestBlogs from "./Components/LatestBlogs";

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
                <Features features={props?.config?.features} />
                <HighlightedSkills
                    highlightedSkills={props?.config?.highlighted_skills}
                />
                <TopProjects topProjects={props?.config?.top_projects} />
                <LatestExperience
                    latestExperience={props?.config?.latest_experience}
                />
                <SideSkills />
                <LatestBlogs latestBlogs={props?.config?.latest_blogs} />
            </Container>
        </>
    );
}

export default Home;

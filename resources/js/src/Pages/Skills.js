import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import react from "../assets/images/icons/react.png";
import vue from "../assets/images/icons/vue.png";
import jquery from "../assets/images/icons/jquery.png";
import SkillLoader from "./Loaders/SkillLoader";


let SkillsSection = null;


function Skills() {
    return (
        <>
            <Container>
                <SkillLoader/>
                <Row>
                    <Col md={12}>
                        <Row>
                            {SkillsSection}
                            <Col md={6}>
                                <div className="major-skills">
                                    <div>
                                        <div>
                                            <img
                                                alt=""
                                                src={react}
                                                width="50px"
                                                height="50px"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                alt=""
                                                src={vue}
                                                width="50px"
                                                height="50px"
                                            />
                                        </div>
                                        <div>
                                            <img
                                                alt=""
                                                src={jquery}
                                                width="50px"
                                                height="50px"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h4>Front End Skills</h4>
                                <h5>Bref of it</h5>
                                <p>
                                    In publishing and graphic design, Lorem
                                    ipsum is a placeholder text commonly used to
                                    demonstrate the visual form of a document or
                                    a typeface without relying on meaningful
                                    content. Lorem ipsum may be used as a
                                    placeholder before final copy is available.
                                </p>
                                SMALL LIST OF FRONT END ICONS
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Skills;

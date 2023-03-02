import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/navbar";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Container className="main-footer">
            <Row className="w-100">
                <Col md={6}>
                    <Col md={12} className="ps-5 pt-1 main-logo">
                        <Link to="/">
                            <span>abdelrahman</span>
                            <span>.</span>
                            <span>online</span>
                        </Link>
                    </Col>
                </Col>
                <Col md={6} className="nav-links">
                    <Row className="links">
                        <Col md={1}>
                            <Link to="/">Hi</Link>
                        </Col>
                        <Col md={1}>
                            {" "}
                            <Link to="/skills">Skills</Link>
                        </Col>
                        <Col md={1}>
                            {" "}
                            <Link to="/projects">Projects</Link>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col md={6}>
                                    <Row>
                                        <Col title="Normal Mode" md={4}>N</Col>
                                        <Col title="Pharos" md={4}>P</Col>
                                        <Col title="Coding" md={4}>C</Col>
                                    </Row>{" "}
                                </Col>
                                <Col md={6}>
                                    <Link to="/connect">Let's connect</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

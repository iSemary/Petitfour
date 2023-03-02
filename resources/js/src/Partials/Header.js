import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/navbar";
import { Link } from "react-router-dom";
import IMG_CODE from "../assets/images/icons/code.png";
import IMG_PHARAOH from "../assets/images/icons/pharaoh.png";
import IMG_DEFAULT from "../assets/images/icons/default.png";

const changeMode = (e) => {};

function Header() {
    return (
        <Navbar className="main-nav">
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
                            <Link to="/">Home</Link>
                        </Col>
                        <Col md={1}>
                            <Link to="/skills">Skills</Link>
                        </Col>
                        <Col md={1}>
                            <Link to="/projects">Projects</Link>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col md={6}>
                                    <Row>
                                        <Col title="Default Mode" md={4}>
                                            <button
                                                data-type="default"
                                                type="button"
                                                onClick={(e) => changeMode(e)}
                                                className="transparent-button"
                                            >
                                                <img
                                                    src={IMG_DEFAULT}
                                                    alt="Default Icon"
                                                    className="mode-icon"
                                                />
                                            </button>
                                        </Col>
                                        <Col title="Pharaoh Mode" md={4}>
                                            <button
                                                data-type="pharaoh"
                                                type="button"
                                                onClick={(e) => changeMode(e)}
                                                className="transparent-button"
                                            >
                                                <img
                                                    src={IMG_PHARAOH}
                                                    alt="Pharos Icon"
                                                    className="mode-icon"
                                                />
                                            </button>
                                        </Col>
                                        <Col title="Code Mode" md={4}>
                                            <button
                                                data-type="code"
                                                type="button"
                                                onClick={(e) => changeMode(e)}
                                                className="transparent-button"
                                            >
                                                <img
                                                    src={IMG_CODE}
                                                    alt="Coding Icon"
                                                    className="mode-icon"
                                                />
                                            </button>
                                        </Col>
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
        </Navbar>
    );
}

export default Header;

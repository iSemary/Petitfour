import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import IMG_CODE from "../assets/images/icons/code.png";
// import IMG_PHARAOH from "../assets/images/icons/pharaoh.png";
// import IMG_DEFAULT from "../assets/images/icons/default.png";
import { RiRadioButtonLine } from "react-icons/ri";
const changeMode = (e) => {};

function Header() {
    const location = useLocation();

    return (
        <Navbar
            className={
                "main-nav bg-main w-100 " +
                (location.pathname === "/" ? "position-absolute" : "nav-pages")
            }
        >
            <Row className="w-100">
                <Col md={3}>
                    <Col md={12} className="ps-5 pt-1 main-logo">
                        <Link to="/" className="no-link">
                            <span>abdelrahman</span>
                            <span>
                                <RiRadioButtonLine />
                            </span>
                            <span>online</span>
                        </Link>
                    </Col>
                </Col>
                <Col md={9} className="nav-links">
                    <div className="links">
                        <div>
                            <Link to="/" className="no-link">
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link to="/skills" className="no-link">
                                Skills
                            </Link>
                        </div>
                        <div>
                            <Link to="/projects" className="no-link">
                                Projects
                            </Link>
                        </div>
                        <div>
                            <Link to="/blogs" className="no-link">
                                Blogs
                            </Link>
                        </div>
                        <div>
                            <Link to="/connect" className="no-link">
                                Connect
                            </Link>
                        </div>
                        {/* <Col md={9}>
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
                                    <Link to="/connect" className="no-link">
                                        Let's connect
                                    </Link>
                                </Col>
                            </Row>
                        </Col> */}
                    </div>
                </Col>
            </Row>
        </Navbar>
    );
}

export default Header;

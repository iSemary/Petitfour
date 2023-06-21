import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Navbar } from "react-bootstrap";
import { Link, useMatch } from "react-router-dom";

function Header(props) {
    return (
        <Navbar
            className={
                "main-nav w-100 " +
                (useMatch("/") ? "position-absolute" : "nav-pages")
            }
        >
            <Container>
                <Row className="w-100">
                    <Col md={3}>
                        <Col md={12} className="pt-1 main-logo">
                            <Link to="/" className="no-link">
                                <img
                                    src={props.logo}
                                    alt="Main logo"
                                    className="header-logo"
                                />
                            </Link>
                        </Col>
                    </Col>
                    <Col md={9} className="nav-links">
                        <div className="row links w-100 justify-content-end">
                            <div className="col-2">
                                <Link
                                    to="/"
                                    className={
                                        "no-link " +
                                        (useMatch("/") ? "active" : "")
                                    }
                                >
                                    Home
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link
                                    to="/skills"
                                    className={
                                        "no-link " +
                                        (useMatch("/skills") ? "active" : "")
                                    }
                                >
                                    Skills
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link
                                    to="/projects"
                                    className={
                                        "no-link " +
                                        (useMatch("/projects") ? "active" : "")
                                    }
                                >
                                    Projects
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link
                                    to="/blogs"
                                    className={
                                        "no-link " +
                                        (useMatch("/blogs") ? "active" : "")
                                    }
                                >
                                    Blogs
                                </Link>
                            </div>
                            <div className="col-2">
                                <Link
                                    to="/connect"
                                    className={
                                        "no-link " +
                                        (useMatch("/connect") ? "active" : "")
                                    }
                                >
                                    Connect
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;

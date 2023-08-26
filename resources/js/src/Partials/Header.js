import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Navbar } from "react-bootstrap";
import { Link, useMatch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Header(props) {
    const navRef = useRef(null);
    const linksRef = useRef(null);
    const checkBoxRef = useRef(null);

    const [headerMenu, setHeaderMenu] = useState(null);
    const [logoLoading, setLogoLoading] = useState(true);
    const handleOpenHeader = () => {
        setHeaderMenu(!headerMenu);
    };
    const handleCloseMenu = () => {
        if (headerMenu != null) {
            setHeaderMenu(false);
            checkBoxRef.current.checked = false;
        }
    };
    useEffect(() => {
        if (headerMenu != null) {
            if (headerMenu) {
                document.getElementsByTagName("body")[0].style.overflow =
                    "hidden";

                navRef.current.style.setProperty(
                    "display",
                    "block",
                    "important"
                );
                navRef.current.style.setProperty(
                    "animation",
                    "slideFromLeft 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
                );

                setTimeout(() => {
                    const links = linksRef.current.getElementsByTagName("div");
                    Array.from(links).forEach((link, index) => {
                        link.style.setProperty("display", "block", "important");
                        link.style.setProperty(
                            "animation",
                            `slideFromLeft ${(index + 1) * 0.2}s ease-in`
                        );
                    });
                }, 500);
            } else {
                document.getElementsByTagName("body")[0].style.overflow =
                    "auto";

                navRef.current.style.setProperty(
                    "animation",
                    "slideToLeft 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
                );
                setTimeout(() => {
                    navRef.current.style.setProperty(
                        "display",
                        "none",
                        "important"
                    );
                }, 500);
            }
        }
    }, [headerMenu]);

    return (
        <Navbar
            className={
                "main-nav w-100 " +
                (useMatch("/") ? "" : "nav-pages")
            }
        >
            <Container>
                <Row className="w-100 nav-row">
                    <Col md={3} sm={3} xs={3} className="main-logo">
                        <Link to="/" className="no-link">
                            {logoLoading && <div className="logo-loader-container"><div className="logo-loader"></div><div className="logo-loader"></div></div>}
                            <img
                                src={props.theme ? props.theme_logo : props.logo}
                                data-theme-logo={props.theme_logo}
                                alt="Main logo"
                                id="siteLogo"
                                style={logoLoading ? { display: "none" } : {}}
                                onLoad={() => setLogoLoading(false)}
                                className="header-logo"
                            />
                        </Link>
                    </Col>
                    <Col md={9} className="nav-links" ref={navRef}>
                        <div
                            className="links w-100 justify-content-end"
                            ref={linksRef}
                        >
                            <div>
                                <Link
                                    onClick={() => handleCloseMenu()}
                                    to="/"
                                    className={
                                        "no-link " +
                                        (useMatch("/") && " active")
                                    }
                                >
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link
                                    onClick={() => handleCloseMenu()}
                                    to="/skills"
                                    className={
                                        "no-link " +
                                        (useMatch("/skills") && " active")
                                    }
                                >
                                    Skills
                                </Link>
                            </div>
                            <div>
                                <Link
                                    onClick={() => handleCloseMenu()}
                                    to="/projects"
                                    className={
                                        "no-link " +
                                        (useMatch("/projects") && " active")
                                    }
                                >
                                    Projects
                                </Link>
                            </div>
                            <div>
                                <Link
                                    onClick={() => handleCloseMenu()}
                                    to="/blogs"
                                    className={
                                        "no-link " +
                                        (useMatch("/blogs") && " active")
                                    }
                                >
                                    Blogs
                                </Link>
                            </div>
                            <div>
                                <Link
                                    onClick={() => handleCloseMenu()}
                                    to="/connect"
                                    className={
                                        "no-link " +
                                        (useMatch("/connect") && " active")
                                    }
                                >
                                    Connect
                                </Link>
                            </div>
                            <div>
                                <a
                                    href={props?.resume}
                                    className="no-link bordered-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col sm={9} xs={9} className="nav-icon">
                        <div className="menu-burger-icon">
                            <label className="check-icon" htmlFor="check">
                                <input
                                    id="check"
                                    type="checkbox"
                                    onChange={() => handleOpenHeader()}
                                    ref={checkBoxRef}
                                />
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;

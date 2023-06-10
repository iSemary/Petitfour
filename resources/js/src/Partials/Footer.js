import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsLinkedin, BsMailbox2, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsStackOverflow } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer(props) {
    const linkIcons = [null, <BsLinkedin />, <SiGithub />, <BsStackOverflow />, <ImBehance2 />, <MdEmail/>, <BsFacebook />, <BsInstagram />, <BsTwitter/>];

    return (
        <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 social-links">
                <Container className="text-center text-md-start mt-5">
                    <div className="me-5 d-none d-lg-block"></div>
                    <div className="social-icons">
                        {props.socialLinks?.map((socialLink, index) => (
                            <a
                                href={socialLink.url}
                                className={"me-4 text-reset social-link social-link-"+socialLink.type}
                                target="_blank"
                                key={index}
                                rel="noreferrer"
                            >
                                {linkIcons[socialLink.type]}
                            </a>
                        ))}
                    </div>
                </Container>
            </section>
            <section className="">
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-3 justify-content-between mb-4">
                        <Col md="4" lg="4" xl="4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <CgProfile />{" "}
                                {props.userInfo?.first_name +
                                    " " +
                                    props.userInfo?.last_name}
                            </h6>
                            <p>{props.userInfo?.bio}</p>
                        </Col>
                        <Col md="3" lg="4" xl="2">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Quick links
                            </h6>
                            <p>
                                <Link className="text-reset" to="projects">
                                    Projects
                                </Link>
                            </p>
                            <p>
                                <Link className="text-reset" to="skills">
                                    Skills
                                </Link>
                            </p>
                            <p>
                                <Link className="text-reset" to="blogs">
                                    Blogs
                                </Link>
                            </p>
                            <p>
                                <Link className="text-reset" to="connect">
                                    Connect
                                </Link>
                            </p>
                        </Col>
                        <Col
                            md={4}
                            lg={4}
                            xl={4}
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <FaGlobeAfrica />
                                &nbsp;&nbsp;
                                {props.userInfo?.city +
                                    ", " +
                                    props.userInfo?.country}
                            </p>
                            <p>
                                <a
                                    href={"mailto:" + props.userInfo?.email}
                                    rel="noreferrer"
                                    className="text-reset"
                                >
                                    <BsMailbox2 />
                                    &nbsp;&nbsp;{props.userInfo?.email}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={
                                        "tel:" +
                                        props.userInfo?.country_code +
                                        props.userInfo?.phone_number
                                    }
                                    rel="noreferrer"
                                    className="text-reset"
                                >
                                    <FiPhoneCall />
                                    &nbsp;&nbsp;(+{props.userInfo?.country_code}
                                    ) {props.userInfo?.phone_number}
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div
                className="p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                Designed with love by
                <a
                    className="text-reset fw-bold"
                    href="https://www.abdelrahman.online"
                >
                    &nbsp;
                    {`${props.userInfo?.first_name} ${props.userInfo?.last_name}`}
                </a>
                &nbsp;&copy; {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;

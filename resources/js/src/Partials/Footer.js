import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsStackOverflow } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaGlobeAfrica } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
    return (
        <footer
            bgColor="light"
            className="text-center text-lg-start text-muted"
        >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" className="me-4 text-reset">
                        <BsLinkedin />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <SiGithub />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <BsStackOverflow />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <ImBehance2 />
                    </a>
                </div>
            </section>

            <section className="">
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-3">
                        <Col md="4" lg="5" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <CgProfile /> Abdelrahman Samir Mostafa
                            </h6>
                            <p>Bref on me</p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Help
                                </a>
                            </p>
                        </Col>
                        <Col
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p>
                                <FaGlobeAfrica /> Cairo, Egypt
                            </p>
                            <p>
                                <BsMailbox2 /> abdelrahmansamirmostafa@gmail.com
                            </p>
                            <p>
                                <FiPhoneCall /> (+20) 102 701 2337
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://ootstrap.com/">
                    ootstrap.com
                </a>
            </div>
        </footer>
    );
}

export default Footer;

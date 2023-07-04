import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    BsLinkedin,
    BsMailbox2,
    BsFacebook,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { BsStackOverflow } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link, useMatch } from "react-router-dom";
import HandwrittenLetters from "../Pages/Utilities/HandwrittenLetters";
import { ImProfile } from "react-icons/im";
import styleVariables from "../assets/styles/variables/variables.module.scss";
import TrianglePattern from "../Pages/Patterns/TrianglePattern";
import CirclePattern from "../Pages/Patterns/CirclePattern";

function Footer(props) {
    const linkIcons = [
        null,
        <BsLinkedin />,
        <SiGithub />,
        <BsStackOverflow />,
        <ImBehance2 />,
        <MdEmail />,
        <BsFacebook />,
        <BsInstagram />,
        <BsTwitter />,
    ];

    const letters = [
        "M13.48,106.12c2.5-4,16.87-30.23,20.16-36.29,16.76-30.95,72.9-83.75,68.82-60.65-3.59,20.3-21,43.89-26.14,99.78",
        "M12.69,71.82c-1.15.46-2.32.83-3.49,1.23s-2.37.68-3.6,1a13.78,13.78,0,0,1-1.95.37,5.27,5.27,0,0,1-1.38,0,2.84,2.84,0,0,1-1-.35,2.87,2.87,0,0,1-.6-.5,3.57,3.57,0,0,1-.3-.38,2.8,2.8,0,0,1-.3-.7A3.26,3.26,0,0,1,0,71.59,3.12,3.12,0,0,1,.11,71a3.22,3.22,0,0,1,.21-.51,2.94,2.94,0,0,1,.23-.36c.09-.12.19-.23.29-.34L1,69.64l.08-.07a3.19,3.19,0,0,1,.33-.25,3.75,3.75,0,0,1,.41-.26c.87-.5,1.41-.74,2-1s1.19-.53,1.78-.77A111.7,111.7,0,0,1,19.71,62.9a173.55,173.55,0,0,1,28.73-4.45,151.15,151.15,0,0,1,29.22.6A94.45,94.45,0,0,1,92.17,62a50.17,50.17,0,0,1,13.62,6l.07,0a.34.34,0,0,1,.09.48.34.34,0,0,1-.39.13,72.29,72.29,0,0,0-13.89-2.94c-4.71-.61-9.46-.93-14.21-1.08a271.55,271.55,0,0,0-28.52.79q-14.23,1-28.39,3c-4.71.7-9.42,1.46-14,2.5a23.63,23.63,0,0,0-3.34.94c-.1,0-.25.14-.2.1a.34.34,0,0,0,0-.31A.72.72,0,0,0,3,71.53s-.08,0-.06,0l.06,0a3.91,3.91,0,0,0,.8.09c.58,0,1.17,0,1.76,0,2.36-.07,4.74-.27,7.11-.48a.34.34,0,0,1,.37.31.36.36,0,0,1-.21.35Z",
        "M133.68,8.73c-.82,3.44-3.82,8.7-8.1,18.19-7.74,17.22-7.14,19.83-9.35,25.31-6.32,15.65-12.7,30.56-10.72,36.33.28.79,5.53-15.17,13-24,7-8.24,16.31-11.56,20-5.32.15.25.5,8.77-.34,11.69-1.4,4.9-3.91,6.93-8.35,12.59-3.41,4.35-10.88,10.67-12.77,11.22-8,2.33-5.51-20.17,33.31-26.47",
        "M197.52,12c-2.36,6-14.72,33.62-16,36.6-9.49,22.11-16,37.56-22.36,35.92-1.89-.49-3-2.3-3.84-3.84-4.43-7.83,1-21.68,7.44-22.56,2.18-.3,4.31.91,6,2.4a25.05,25.05,0,0,1,3.81,4.32c3.82,5.33.72,14.29.89,19.39.2,6.31,3.28,8.31,5.35,9.17,1.91.79,6-2.08,15.12-15.84",
        "M253.92,11.28Q220,81.63,231.84,90.48c4.33,3.22,9.14-8.72,20.68-22,3.53-4.06,5.7-13.25,10.68-17.17",
        "M199.23,74.92c1.51-1.87,3.49-.74,6.91-3.31,5.68-4.29,5.37-14.49,2.18-14.73-2-.15-6.11,2.35-11.72,10.64,0,0-12.65,39.36,29.9,7.4",
        "M262.76,51c-8.48,29.69-12.34,37.09-11.84,37.4,1,.61,7.43-15.3,22.76-29.1,7-6.32,15.25-6.34,16.68-4.46",
        "M326.4,70.56c-2.65,6.14-8.69,14.73-13,14.44-6.77-.46-6.39-12-8.08-10.6A63.54,63.54,0,0,0,296,83.72c-2.44,3.13-7.32,5.1-5.56-3.8.34-1.69.61-6.13,2.07-9.86,2.18-5.6,6.09-10.77,8.68-12.24,1.77-1,7.28-3.15,8.89-.93.66.92,1.8,2.44,1.83,4,.05,2.66-1.19,5.4.41,5.35",
        "M354.92,7.19c-23.78,58-31.6,79.78-30.2,80.41,1.71.76,16.81-30.28,22.08-28.32,4.06,1.5-1.8,21.09,4.08,23.76,4.31,1.95,10.17-5.41,13.2-8.64,10-10.65,15.44-22.8,16.08-22.56.48.17-16.85,39.37-13.56,40.8,2.3,1,21.73-33.92,25.78-32.32,2.76,1.08-2.47,18.34.74,19.6,3.69,1.44,13.83-20,18.24-18.48,4.24,1.48-1.64,22.49,3.84,25,3.11,1.4,8.53-3.78,12.84-8.69",
        "M451.36,71.48c5.49-18.5-2.07-21.61-13.6-8.66-1.65,1.85-2.4,4-4.23,6.53-4.21,5.77-2.15,14.92.63,15.61,3.78.93,7.84-11,12-10,3.84.92,2.5,11.33,6.35,12.71,7,2.5,26.75-37,28.49-36.11S466.2,89.1,468,90c1.56.77,14.86-26.15,20.64-24.24,4.42,1.45.4,18.38,5.76,20.64,4.2,1.76,11.8-6.44,18.48-15.12",
    ];

    return (
        <footer className={"pt-4 text-center text-lg-start position-relative " +  (useMatch("/") && " home-footer")}>
            <section className="d-flex justify-content-center justify-content-lg-between pb-2 social-links">
                <Container className="footer-container text-center text-md-start">
                    <Row>
                        <Col md={6}>
                            <div className="footer-name-container">
                                {/* Draw your own first name */}
                                {/* I used adobe illustrator to create the svg, font name is : Sweet Romance */}

                                <HandwrittenLetters letters={letters} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="social-icons text-right">
                                {props?.socialLinks?.map(
                                    (socialLink, index) => (
                                        <a
                                            href={socialLink.url}
                                            key={index}
                                            rel="noreferrer noopener"
                                            className={
                                                "ms-4 text-reset social-link social-link-" +
                                                socialLink.type
                                            }
                                            target="_blank"
                                        >
                                            {linkIcons[socialLink.type]}
                                        </a>
                                    )
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className="text-center text-md-start mt-5">
                    <Row className="mt-3 justify-content-between footer-details mb-4">
                        <Col
                            md="4"
                            lg="4"
                            xl="4"
                            sm={12}
                            className="user-profile"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                <CgProfile />{" "}
                                {props.userInfo?.first_name +
                                    " " +
                                    props.userInfo?.last_name}
                            </h6>
                            <p>{props.userInfo?.bio}</p>
                        </Col>
                        <Col md="3" lg="4" xl="2" sm={12} className="pages-map">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Quick links
                            </h6>
                            <Link
                                className="text-reset d-block mb-2"
                                to="projects"
                            >
                                Projects
                            </Link>
                            <Link
                                className="text-reset d-block mb-2"
                                to="skills"
                            >
                                Skills
                            </Link>
                            <Link
                                className="text-reset d-block mb-2"
                                to="blogs"
                            >
                                Blogs
                            </Link>
                            <Link
                                className="text-reset d-block mb-2"
                                to="connect"
                            >
                                Connect
                            </Link>
                        </Col>
                        <Col md={4} lg={4} xl={4} sm={12} className="user-info">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <div className="d-block mb-2">
                                <FaGlobeAfrica />
                                &nbsp;&nbsp;
                                {props.userInfo?.city +
                                    ", " +
                                    props.userInfo?.country}
                            </div>
                            <div
                                className="text-reset cursor-pointer d-block mb-2"
                                onClick={(e) => {
                                    window.location.href =
                                        "mailto:" + props.userInfo?.email;
                                }}
                            >
                                <BsMailbox2 />
                                &nbsp;&nbsp;{props.userInfo?.email}
                            </div>
                            <div
                                className="text-reset d-block mb-2 cursor-pointer"
                                onClick={(e) => {
                                    window.location.href =
                                        "tel:" +
                                        +props.userInfo?.country_code +
                                        props.userInfo?.phone_number;
                                }}
                            >
                                <FiPhoneCall />
                                &nbsp;&nbsp;(+{
                                    props.userInfo?.country_code
                                }) {props.userInfo?.phone_number}
                            </div>

                            <div className="d-block mb-2">
                                <a
                                    href={props.userInfo?.resume}
                                    className="text-reset"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                >
                                    <ImProfile />
                                    &nbsp;&nbsp;Resume
                                </a>
                            </div>
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
                    href={"https://www.abdelrahman.online"}
                    className="text-reset fw-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    &nbsp;Abdelrahman Samir
                </a>
                &nbsp;&copy; {new Date().getFullYear()}
            </div>

            {/* SVGs Designs */}
            <div className="footer-svg-container">
                <TrianglePattern
                    color={styleVariables.primaryBlue}
                    top="75%"
                    rotate="20"
                    right="90%"
                    width="17"
                />
                <TrianglePattern
                    color={styleVariables.primaryColor}
                    top="45%"
                    rotate="45"
                    right="60%"
                    width="15"
                />

                <TrianglePattern
                    color={styleVariables.primaryWhite}
                    top="40%"
                    rotate="60"
                    right="15%"
                    width="15"
                />
                <TrianglePattern
                    color={styleVariables.secondaryTextColor}
                    top="80%"
                    rotate="55"
                    right="30%"
                    width="17"
                />

                <CirclePattern
                    color={styleVariables.secondaryTextColor}
                    top="37%"
                    rotate="20"
                    right="85%"
                    width="10"
                />
                <CirclePattern
                    color={styleVariables.primaryWhite}
                    top="80%"
                    rotate="45"
                    right="65%"
                    width="15"
                />

                <CirclePattern
                    color={styleVariables.primaryColor}
                    top="50%"
                    rotate="60"
                    right="40%"
                    width="15"
                />
                <CirclePattern
                    color={styleVariables.primaryBlue}
                    top="70%"
                    rotate="45"
                    right="10%"
                    width="10"
                />
            </div>
        </footer>
    );
}

export default Footer;

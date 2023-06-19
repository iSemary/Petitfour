import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BiNavigation } from "react-icons/bi";

import AOS from "aos";
import CircleLoader from "../Loaders/CircleLoader";
import { Container } from "react-bootstrap";

AOS.init();

function HighlightedSkills({ highlightedSkills }) {
    return (
        <div className="bg-home-odd">
            <Container>
                <h3 className="text-center home-title">
                    Highlighted <span>Skills</span>
                </h3>
                <Row className="justify-content-center">
                    {highlightedSkills ? (
                        highlightedSkills.map((skill, index) => (
                            <Col md={1} data-aos="fade-right" key={index}>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip id="button-tooltip-2">
                                            {skill.name}
                                        </Tooltip>
                                    }
                                >
                                    {({ ref, ...triggerHandler }) => (
                                        <Link
                                            className="no-link"
                                            to={`skills/${skill.name
                                                .split(" ")
                                                .join("-")
                                                .toLowerCase()}`}
                                        >
                                            <img
                                                {...triggerHandler}
                                                ref={ref}
                                                alt={`Skill ${skill.name}`}
                                                src={skill.icon}
                                                width="50px"
                                                height="50px"
                                            />
                                        </Link>
                                    )}
                                </OverlayTrigger>
                            </Col>
                        ))
                    ) : (
                        <>
                            <Col md={1} data-aos="fade-right">
                                <CircleLoader size={25} />
                            </Col>
                            <Col md={1} data-aos="fade-right">
                                <CircleLoader size={25} />
                            </Col>
                            <Col md={1} data-aos="fade-right">
                                <CircleLoader size={25} />
                            </Col>
                        </>
                    )}
                </Row>
                <div className="mt-4">
                    <Link to="skills" className="discover-more-btn">
                        <span className="discover-circle" aria-hidden="true">
                            <span>
                                <BiNavigation className="discover-icon" />
                            </span>
                        </span>
                        <span className="discover-button-text">
                            Discover More
                        </span>
                    </Link>
                </div>
            </Container>
        </div>
    );
}
export default HighlightedSkills;

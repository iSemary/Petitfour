import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BiNavigation } from "react-icons/bi";

import CircleLoader from "../Loaders/CircleLoader";
import { Container } from "react-bootstrap";
import CirclesPattern from "../Patterns/CirclesPattern";
import styleVariables from "../../assets/styles/variables/variables.module.scss";


function HighlightedSkills({ highlightedSkills }) {
    return (
        <div className="bg-home-odd highlighted-skills-section">
            <Container>
                <h3 className="text-center home-title">
                    Highlighted <span>Skills</span>
                </h3>
                <Row className="justify-content-center my-5">
                    {highlightedSkills ? (
                        highlightedSkills.map((skill, index) => (
                            <Col md={1} className="mb-sm-1" data-aos="fade-right" key={index}>
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
                                                className="smooth-hover"
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

            <CirclesPattern fill={styleVariables.primaryColor} stroke={styleVariables.primaryWhite} top="5%" left="2%" height="60px" width="60px" />
        </div>
    );
}
export default HighlightedSkills;

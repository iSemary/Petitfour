import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

import css from "../../assets/images/icons/css.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BiNavigation } from "react-icons/bi";

import AOS from "aos";

AOS.init();

function HighlightedSkills(props) {
    let highlightedSkills = "";

    if (
        props.highlightedSkills &&
        Object.keys(props.highlightedSkills).length > 0
    ) {
        highlightedSkills = props.highlightedSkills.map((skill, index) => {
            return (
                <>
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
                                    to={`skills/${skill.name}`}
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
                </>
            );
        });
    }

    return (
        <>
            <div className="text-center">
                <h3 className="text-center">Highlighted Skills</h3>
                <Row className="justify-content-center">
                    {highlightedSkills}
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
            </div>
        </>
    );
}
export default HighlightedSkills;

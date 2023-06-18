import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";

function SkillsListTemplate({ skill, imgClass, colClass }) {
    return (
        <>
            <Col className={colClass}>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="button-tooltip-2">{skill.name}</Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link
                            to={`/skills/${skill.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                        >
                            <img
                                {...triggerHandler}
                                ref={ref}
                                className={imgClass}
                                alt={skill.name + " skill"}
                                src={skill.icon}
                                width="25px"
                                height="25px"
                            />
                        </Link>
                    )}
                </OverlayTrigger>
            </Col>
        </>
    );
}

export default SkillsListTemplate;

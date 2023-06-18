import React from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";

function SkillsMajorTemplate({ skill, index }) {
    return (
        <>
            <div className={"col-" + (index <= 1 ? "6" : "12 mt-15")}>
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
                                alt={skill.name + " skill"}
                                src={skill.icon}
                                width="50px"
                                height="50px"
                            />
                        </Link>
                    )}
                </OverlayTrigger>
            </div>
        </>
    );
}

export default SkillsMajorTemplate;

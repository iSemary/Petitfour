import React, { useState } from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import SquareLoader from "../../Loaders/SquareLoader";

function SkillsListTemplate({ skill, imgClass, colClass, allowNavigate = true }) {
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <>
            <div className={colClass}>
                <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip>{skill.name}</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link
                            to={allowNavigate ? (`/skills/${skill.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`) : "#"}
                                aria-label={skill.name}
                                className={allowNavigate ? "" : "help-cursor"}
                        >
                            {/* Show image loader until the image is totally loaded */}
                            {imageLoading && (
                                <SquareLoader
                                    width={30}
                                    height={30}
                                    radius={15}
                                    speed={1}
                                />
                            )}
                            {/* Hide / Show image based on the status of the image (Loaded or not) */}
                            <img
                                {...triggerHandler}
                                ref={ref}
                                className={ "smooth-hover " + imgClass}
                                style={imageLoading ? { display: "none" } : {}}
                                alt={skill.name + " skill"}
                                src={skill.icon}
                                onLoad={() => setImageLoading(false)}
                                width="25px"
                                height="25px"
                            />
                        </Link>
                    )}
                </OverlayTrigger>
            </div>
        </>
    );
}

export default SkillsListTemplate;

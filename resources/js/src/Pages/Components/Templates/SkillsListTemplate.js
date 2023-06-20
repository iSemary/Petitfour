import React, { useState } from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import SquareLoader from "../../Loaders/SquareLoader";

function SkillsListTemplate({ skill, imgClass, colClass }) {
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
                            to={`/skills/${skill.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                        >
                            {/* Show image loader until the image is totally loaded */}
                            {imageLoading && (
                                <SquareLoader
                                    width={25}
                                    height={25}
                                    radius={15}
                                    speed={1}
                                />
                            )}
                            {/* Hide / Show image based on the status of the image (Loaded or not) */}
                            <img
                                {...triggerHandler}
                                ref={ref}
                                className={imgClass}
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

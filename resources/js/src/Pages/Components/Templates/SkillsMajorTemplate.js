import React, { useState } from "react";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import SquareLoader from "../../Loaders/SquareLoader";

function SkillsMajorTemplate({ skill, index }) {
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <>
            <div className={"col-" + (index <= 1 ? "6" : "12 mt-15")}>
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
                            aria-label={skill.name}
                        >
                            {/* Show image loader until the image is totally loaded */}
                            {imageLoading && (
                                <SquareLoader
                                    width={50}
                                    height={50}
                                    radius={50}
                                    speed={1}
                                />
                            )}
                            {/* Hide / Show image based on the status of the image (Loaded or not) */}

                            <img
                                {...triggerHandler}
                                style={imageLoading ? { display: "none" } : {}}
                                ref={ref}
                                alt={skill.name + " skill"}
                                src={skill.icon}
                                onLoad={() => setImageLoading(false)}
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

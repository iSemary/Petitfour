import React from "react";
import ExperienceTemplate from "./Templates/ExperienceTemplate";

function LatestExperience(props) {
    return (
        <>
            <div className="home-experiences my-5">
                {props?.latestExperience?.map((experience, index) => {
                    return (
                        <ExperienceTemplate
                            experience={experience}
                            index={index}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
}
export default LatestExperience;

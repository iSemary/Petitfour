import React from "react";
import ExperienceTemplate from "./Templates/ExperienceTemplate";
import { Container } from "react-bootstrap";

function LatestExperience(props) {
    return (
        <div className="bg-home-odd">
            <Container>
                <div className="home-experiences">
                    <h3 className="text-center home-title">
                        Latest <span>Experience</span>
                    </h3>
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
            </Container>
        </div>
    );
}
export default LatestExperience;

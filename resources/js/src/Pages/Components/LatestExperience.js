import React from "react";
import ExperienceTemplate from "./Templates/ExperienceTemplate";
import { Container } from "react-bootstrap";
import DotsPattern from "../Patterns/DotsPattern";

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
            <DotsPattern color="#fff" bottom="5%" right="2%" height="60px" width="60px" />
        </div>
    );
}
export default LatestExperience;

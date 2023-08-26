import React from "react";
import ExperienceTemplate from "./Templates/ExperienceTemplate";
import { Container } from "react-bootstrap";
import DotsPattern from "../Patterns/DotsPattern";
import styleVariables from "../../assets/styles/variables/variables.module.scss";

function LatestExperience(props) {
    return (
        <div className="bg-home-odd">
            <DotsPattern color={styleVariables.primaryWhite} bottom="5%" right="90%" height="60px" width="60px" />
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

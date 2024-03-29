import React from "react";
import ExperienceTemplate from "./Templates/ExperienceTemplate";
import { Container } from "react-bootstrap";
import DotsPattern from "../Patterns/DotsPattern";
import styleVariables from "../../assets/styles/variables/variables.module.scss";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
function LatestExperience(props) {
    return (
        <div className="bg-home-odd latest-experience-section">
            <DotsPattern
                color={styleVariables.primaryWhite}
                bottom="5%"
                right="90%"
                height="60px"
                width="60px"
            />
            <Container className="latest-experience-container">
                <div className="home-experiences">
                    <h3 className="text-center home-title latest-experience-title">
                        Latest <span>Experience</span>
                    </h3>
                    <div className="all-home-experiences">
                    {props?.latestExperience?.map((experience, index) => {
                        return (
                            <ExperienceTemplate
                                experience={experience}
                                index={index}
                                key={index}
                                totals={(props.latestExperience).length}
                            />
                        );
                    })}
                    </div>
                    <div className="more-experience" data-aos={"fade-" + ((props?.latestExperience)?.length % 2 ? "left" : "right")}>
                        <div className="more-projects-content">
                            <h5>
                                <AiOutlineFundProjectionScreen className="me-1" />{""}+
                                {props.totalProjects}{" online and open-source projects"}
                            </h5>
                            <div className="more-experience-h-line">
                                <div className="h-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default LatestExperience;

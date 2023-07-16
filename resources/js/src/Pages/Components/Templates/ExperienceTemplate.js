import React from "react";
import SkillsListTemplate from "./SkillsListTemplate";
import { IoMdArrowDropright } from "react-icons/io";

function ExperienceTemplate({ experience, index }) {
    const MAX_EXPERIENCE_SKILLS = 10;
    return (
        <div
            className={"experience experience-" + (index % 2 ? "even" : "odd")}
            data-aos={"fade-" + (index % 2 ? "left" : "right")}
        >
            <div className="experience-details">
                <div className="experience-info">
                    <h5 className="experience-title">
                        {experience.company_name}
                    </h5>
                    <p className="experience-description">
                        {experience.summary}
                        <br />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: experience.content,
                            }}
                        ></div>
                    </p>

                    <div className="experience-skills">
                        {experience.skills ? (
                            <div className="row justify-content-start m-0">
                                {experience.skills
                                    .slice(0, MAX_EXPERIENCE_SKILLS)
                                    .map((experienceSkill, index) => (
                                        <SkillsListTemplate
                                            skill={experienceSkill}
                                            imgClass="experience-skill-icon"
                                            colClass="me-0 p-0 col-1"
                                            key={index}
                                        />
                                    ))}
                                {experience.skills.length >
                                    MAX_EXPERIENCE_SKILLS && (
                                    <div
                                        key={MAX_EXPERIENCE_SKILLS}
                                        className="more-skills-icon md-3"
                                    >
                                        +
                                        {experience.skills.length -
                                            MAX_EXPERIENCE_SKILLS}{" "}
                                    </div>
                                )}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="experience-date">
                    <div>
                        <span>{experience.start_date}</span>
                        <span>
                            <IoMdArrowDropright />
                        </span>
                        <span>{experience.end_date}</span>
                    </div>
                </div>
            </div>
            <div className="experience-h-line">
                <div className="h-line"></div>
            </div>
            <div className="experience-image">
                <div className="experience-company-logo">
                    <img
                        src={experience.company_logo}
                        alt={experience.company_name + " logo"}
                    />
                    <div className="experience-v-line">
                        <div className="v-line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceTemplate;

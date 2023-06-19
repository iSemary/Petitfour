import React from "react";
function ExperienceTemplate({ experience, index }) {
    return (
        <>
            <div
                className={
                    "experience experience-" + (index % 2 ? "even" : "odd")
                }
            >
                <div className="experience-details">
                    <div className="experience-info">
                        <h5 className="experience-title">
                            {experience.company_name}
                        </h5>
                        <p className="experience-description">
                            {experience.summary}
                        </p>
                    </div>
                    <div className="experience-date">
                        {experience.start_date} - {experience.end_date}
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
        </>
    );
}

export default ExperienceTemplate;

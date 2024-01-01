import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SkillsListTemplate from "./SkillsListTemplate";
import SquareLoader from "../../Loaders/SquareLoader";

function ProjectTemplate({ project, animate, containerClass = '', index = 0 }) {
    const [imageLoading, setImageLoading] = useState(true);
    const MAX_PROJECT_SKILLS = 4;

    return (
        <Col sm={12} md={6} lg={4} data-aos-offset={(index*100)} data-aos={animate} className={containerClass + " project-box"}>
            <Link
                className="no-link"
                aria-label={project.name}
                to={`/projects/${project.slug}`}
            >
                <h5 className="project-title">{project.name}</h5>

                <div className="project-image-container">
                    {/* Show image loader until the image is totally loaded */}
                    {imageLoading && (
                        <SquareLoader width={200} height={200} radius={0} />
                    )}
                    {/* Hide / Show image based on the status of the image (Loaded or not) */}
                    {
                        <img
                            variant="top"
                            style={imageLoading ? { display: "none" } : {}}
                            className="project-image shiny-item"
                            onLoad={() => setImageLoading(false)}
                            src={project.project_mocked_image}
                            alt={`Top Project ${project.name}`}
                            height="195px"
                            width="330px"
                        />
                    }
                </div>

                <p className="project-description">{project.description}</p>
            </Link>
            {project.skills && project.skills.length > 0 ? (
                <Row className="justify-content-center mt-2">
                    {project.skills
                        .slice(0, MAX_PROJECT_SKILLS)
                        .map((projectSkill, index) => (
                            <SkillsListTemplate
                                skill={projectSkill}
                                imgClass="project-skill-icon"
                                colClass="me-2 p-0 col-1"
                                key={index}
                            />
                        ))}
                    {project.skills &&
                        project.skills.length > MAX_PROJECT_SKILLS && (
                            <Col
                                md={3}
                                key={MAX_PROJECT_SKILLS}
                                className="more-skills-icon"
                            >
                                +{project.skills.length - MAX_PROJECT_SKILLS}{" "}
                            </Col>
                        )}
                </Row>
            ) : (
                ""
            )}
        </Col>
    );
}

export default ProjectTemplate;

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SkillsListTemplate from "./SkillsListTemplate";
import SquareLoader from "../../Loaders/SquareLoader";

function ProjectTemplate({ project, col, animate }) {
    const [imageLoading, setImageLoading] = useState(true);
    const MAX_PROJECT_SKILLS = 4;

    return (
        <Col md={col} data-aos={animate}>
            <Link
                className="no-link"
                to={`/projects/${project.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
            >
                <h3 className="project-title">{project.name}</h3>

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
                        />
                    }
                </div>

                <p className="project-description">{project.description}</p>
            </Link>
            {project.skills && project.skills.length > 0 ? (
                <Row className="justify-content-center">
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

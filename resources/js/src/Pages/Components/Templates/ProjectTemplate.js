import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiCode } from "react-icons/hi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ProjectTemplate({ project, col, animate }) {
    const MAX_PROJECT_SKILLS = 4;

    return (
        <Col md={col} data-aos={animate}>
            <Link className="no-link" to={`/projects/${project.name}`}>
                <h3 className="project-title">{project.name}</h3>
                <img
                    alt={`Top Project ${project.name}`}
                    src={project.project_mocked_image}
                    className="project-image shiny-item"
                />
                <p className="project-description">{project.description}</p>
            </Link>
            {project.skills ? (
                <Row>
                    {project.skills
                        .slice(0, MAX_PROJECT_SKILLS)
                        .map((projectSkill, index) => {
                            return (
                                <Col md={2} key={index}>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id="button-tooltip-2">
                                                {projectSkill.name}
                                            </Tooltip>
                                        }
                                    >
                                        {({ ref, ...triggerHandler }) => (
                                            <Link
                                                className="no-link"
                                                to={`skills/${projectSkill.name}`}
                                            >
                                                <img
                                                    {...triggerHandler}
                                                    ref={ref}
                                                    src={projectSkill.icon}
                                                    className="project-skill-icon"
                                                    alt={index}
                                                />
                                            </Link>
                                        )}
                                    </OverlayTrigger>
                                </Col>
                            );
                        })}
                    {project.skills.length > MAX_PROJECT_SKILLS && (
                        <Col md={2} key={MAX_PROJECT_SKILLS}>
                            <HiCode size={20} />
                            {"+" +
                                (project.skills.length - MAX_PROJECT_SKILLS) +
                                " Skills"}
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

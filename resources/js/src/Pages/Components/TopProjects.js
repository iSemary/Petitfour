import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

import css from "../../assets/images/icons/css.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BiNavigation } from "react-icons/bi";

import AOS from "aos";

AOS.init();

function TopProjects(props) {
    let topProjects = "";

    const MAX_PROJECT_SKILLS = 4;

    if (props.topProjects && Object.keys(props.topProjects).length > 0) {
        topProjects = props.topProjects.map((project, index) => {
            return (
                <>
                    <Col md={4} data-aos="fade-right" key={index}>
                        <Link
                            className="no-link"
                            to={`projects/${project.name}`}
                        >
                            <h6 className="project-title">{project.name}</h6>
                            <img
                                alt={`Top Project ${project.name}`}
                                src={project.project_mocked_image}
                                className="project-image shiny-item"
                            />
                            <p className="project-description">
                                {project.description}
                            </p>
                        </Link>
                        {project.skills ? (
                            <Row>
                                {project.skills
                                    .slice(0, MAX_PROJECT_SKILLS)
                                    .map((projectSkill, index) => {
                                        return (
                                            <Col md={2} key={index}>
                                                <Link
                                                    className="no-link"
                                                    to={`skills/${projectSkill.name}`}
                                                >
                                                    <img
                                                        src={projectSkill.icon}
                                                        className="project-skill-icon"
                                                        alt={index}
                                                    />
                                                </Link>
                                            </Col>
                                        );
                                    })}
                                {project.skills.length > MAX_PROJECT_SKILLS && (
                                    <Col md={2} key={MAX_PROJECT_SKILLS}>
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
                </>
            );
        });
    }

    return (
        <>
            <div className="text-center">
                <h3 className="text-center">Top Projects</h3>
                <Row className="justify-content-center">{topProjects}</Row>
                <div className="mt-4">
                    <Link to="projects" className="discover-more-btn">
                        <span className="discover-circle" aria-hidden="true">
                            <span>
                                <BiNavigation className="discover-icon" />
                            </span>
                        </span>
                        <span className="discover-button-text">
                            Discover More
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default TopProjects;

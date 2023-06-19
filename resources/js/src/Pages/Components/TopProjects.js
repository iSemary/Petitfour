import React from "react";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { BiNavigation } from "react-icons/bi";

import AOS from "aos";
import ProjectTemplate from "./Templates/ProjectTemplate";
import { Col, Container } from "react-bootstrap";
import ProjectLoader from "../Loaders/ProjectLoader";

AOS.init();

function TopProjects({ topProjects }) {
    return (
        <>
            <div className="bg-home-even">
                <Container>
                    <h3 className="text-center home-title">
                        Top <span>Projects</span>
                    </h3>
                    <Row className="justify-content-center">
                        {topProjects ? (
                            topProjects.map((project, index) => (
                                <ProjectTemplate
                                    project={project}
                                    col={4}
                                    animate={"fade-right"}
                                    key={index}
                                />
                            ))
                        ) : (
                            <>
                                <Col md={4}>
                                    <ProjectLoader />
                                </Col>
                                <Col md={4}>
                                    <ProjectLoader />
                                </Col>
                                <Col md={4}>
                                    <ProjectLoader />
                                </Col>
                            </>
                        )}
                    </Row>
                    <div className="mt-4">
                        <Link to="projects" className="discover-more-btn">
                            <span
                                className="discover-circle"
                                aria-hidden="true"
                            >
                                <span>
                                    <BiNavigation className="discover-icon" />
                                </span>
                            </span>
                            <span className="discover-button-text">
                                Discover More
                            </span>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default TopProjects;

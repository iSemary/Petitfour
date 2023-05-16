import React, { useState } from "react";
import Project from "./Project";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projectsData } from "../data/projectsData";

function Projects() {

    const [visibleProjects, setVisibleProjects] = useState(6);

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
    };

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Projects</h1>
            <Row>
                {projectsData.slice(0, visibleProjects).map((project) => (
                    <Col key={project.id} md={4} className="mb-4">
                        <Project project={project} />
                    </Col>
                ))}
            </Row>
            {visibleProjects < projectsData.length && (
                <div className="d-flex justify-content-center mt-5">
                    <Button onClick={loadMoreProjects}>Load More</Button>
                </div>
            )}
        </Container>
    );
};

export default Projects;

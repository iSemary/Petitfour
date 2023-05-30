import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Project() {
    const { name } = useParams();
    const [project, setProject] = useState(null);
    const [projectSkills, setProjectSkills] = useState(null);
    const [projectImages, setProjectImages] = useState(null);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/projects/${name}`)
            .then((response) => {
                if (response.data.success) {
                    setProject(response.data.data);
                    setProjectSkills(response.data.data.skills);
                    setProjectImages(response.data.data.images);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <div className="project-page">
                <Row>
                    <Col>
                        <h1 className="project-title">{project.name}</h1>
                        <hr />
                        <p className="project-description">
                            {project.description}
                        </p>
                        <hr />
                        <div className="project-content">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: project.content,
                                }}
                            ></div>
                        </div>
                        <p className="project-date">
                            Start Date: {project.start_date}
                        </p>
                        <p className="project-date">
                            End Date: {project.end_date}
                        </p>
                        <p>Type: {project.type}</p>
                        <p>repository_link: {project.repository_link}</p>
                        <p>tags: {project.tags}</p>
                        <hr />
                        {
                            <div className="project-skills">
                                {projectSkills.map((projectSkill, key) => (
                                    <span
                                        key={key}
                                        className="badge badge-skill"
                                    >
                                        {projectSkill.name}
                                    </span>
                                ))}
                            </div>
                        }
                        {
                            <div className="project-images">
                                {projectImages.map((projectImage, key) => (
                                    <>
                                        <img
                                            key={key + 1}
                                            src={
                                                projectImage.project_image.image
                                            }
                                            alt={"Project Image" + key + 1}
                                            className="project-item-image"
                                        />
                                        <img
                                            key={key + 2}
                                            src={
                                                projectImage.project_image.mocked
                                            }
                                            alt={
                                                "Project Mocked Image" + key + 2
                                            }
                                            className="project-item-image"
                                        />
                                    </>
                                ))}
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Project;

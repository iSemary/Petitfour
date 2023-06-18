import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import { HiHashtag } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import SkillsListTemplate from "./Components/Templates/SkillsListTemplate";
function Project() {
    const { name } = useParams();
    const [project, setProject] = useState(null);
    const [projectSkills, setProjectSkills] = useState([]);
    const [projectTags, setProjectTags] = useState([]);
    const [projectImages, setProjectImages] = useState([]);
    const [mockPath, setMockPath] = useState(null);
    useEffect(() => {
        AxiosConfig.get(`/projects/${name}`)
            .then((response) => {
                if (response.data.success) {
                    setProject(response.data.data);
                    setMockPath(response.data.mock_path);
                    setProjectSkills(response.data.data.skills);
                    setProjectTags(
                        response.data.data.tags
                            ? response.data.data.tags.split(", ")
                            : []
                    );
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
        <Container className="mt-5">
            <div className="project-page">
                <Row>
                    <Col>
                        <div className="project-details">
                            <h1 className="project-title">{project.name}</h1>
                            <hr />
                            <p className="project-description">
                                {project.description}
                            </p>

                            <div className="project-duration">
                                <span>{project.start_date}</span>
                                <span>
                                    <FiArrowRight />
                                </span>
                                <span>{project.end_date}</span>
                            </div>
                            <p>Type: {project.type}</p>

                            <Row>
                                {projectTags.length > 0 &&
                                    projectTags.map((projectTag, key) => (
                                        <Col className="badge badge-secondary width-fit-content">
                                            <HiHashtag />
                                            {projectTag}
                                        </Col>
                                    ))}
                            </Row>

                            {
                                <div className="project-skills">
                                    <Row>
                                        {projectSkills.length > 0 &&
                                            projectSkills.map(
                                                (projectSkill, key) => (
                                                    <SkillsListTemplate
                                                        skill={projectSkill}
                                                        imgClass="project-skill"
                                                        colClass="me-2 p-0"
                                                    />
                                                )
                                            )}
                                    </Row>
                                </div>
                            }
                            {project.repository_link && (
                                <div>
                                    <Link
                                        className="project-link"
                                        to={project.repository_link}
                                    >
                                        <BsGithub /> Explore the Code
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="project-content">
                            <hr />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: project.content,
                                }}
                            ></div>
                        </div>

                        <div className="project-images-container">
                            <img src={mockPath} alt="Laptop - Mock up" className="laptop-mockup" />
                            {
                                <div className="project-images">
                                    {projectImages.length > 0 &&
                                        projectImages.map(
                                            (projectImage, key) => (
                                                <img
                                                    key={key}
                                                    src={
                                                        projectImage
                                                            .project_image.image
                                                    }
                                                    alt={"Project Image-" + key}
                                                    className="project-item-image"
                                                />
                                            )
                                        )}
                                </div>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Project;

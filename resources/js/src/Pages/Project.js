import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import { HiHashtag } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import SkillsListTemplate from "./Components/Templates/SkillsListTemplate";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PostLoader from "./Loaders/PostLoader";

function Project() {
    const { name } = useParams();
    const [project, setProject] = useState(null);
    const [projectSkills, setProjectSkills] = useState([]);
    const [projectTags, setProjectTags] = useState([]);
    const [projectImages, setProjectImages] = useState([]);
    const [mockPath, setMockPath] = useState(null);

    const splideOptions = {
        rewind: true,
        interval: 2000,
        perPage: 1,
        type: "loop",
        drag: "free",
        fixedWidth: "34rem",
        gap: "8rem",
        arrows: true,
        breakpoints: {
            576: {
                perPage: 1,
                fixedWidth: "23rem",
                gap: "1rem",
            },
        },
    };

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
        return (
            <Container className="mt-5">
                <PostLoader />
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <div className="project-page">
                <Row>
                    <Col md={6}>
                        <div className="project-details d-grid">
                            {/* Project Main Info  */}
                            <div className="project-info my-2">
                                <h1 className="project-title">
                                    {project.name}
                                </h1>
                                <p className="project-description">
                                    {project.description}
                                </p>
                            </div>
                            {/* End Project Main Info  */}
                            <div className="project-duration my-2">
                                <span>{project.start_date}</span>
                                <span>
                                    <IoMdArrowDropright size={30} />
                                </span>
                                <span>{project.end_date}</span>
                            </div>
                            {/* Project Tags  */}
                            <div className="project-tags my-2">
                                <Row className="ml-auto">
                                    {projectTags.length > 0 &&
                                        projectTags.map((projectTag, key) => (
                                            <Col
                                                className="badge badge-secondary width-fit-content me-2 mb-sm-1"
                                                key={key}
                                            >
                                                <HiHashtag />
                                                {projectTag}
                                            </Col>
                                        ))}
                                </Row>
                            </div>
                            {/* End Project Tags */}
                            {/* Project Skills Section */}
                            <div className="project-skills my-2 width-fit-content">
                                <Row className="ml-auto">
                                    {projectSkills.length > 0 &&
                                        projectSkills.map(
                                            (projectSkill, index) => (
                                                <SkillsListTemplate
                                                    skill={projectSkill}
                                                    key={index}
                                                    imgClass="project-skill"
                                                    colClass="me-4 p-0 col-1 mb-2"
                                                />
                                            )
                                        )}
                                </Row>
                            </div>
                            {/* End Project Skills Section */}

                            {project.repository_link && (
                                <div className="my-2">
                                    <a
                                        className="project-link btn btn-main-light font-weight-bold"
                                        href={project.repository_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BsGithub /> Explore the Code
                                    </a>
                                </div>
                            )}
                        </div>
                    </Col>

                    <Col md={6}>
                        {/* End Project Content Section */}
                        <div className="project-images-container mt-sm-2">
                            <img
                                src={mockPath}
                                alt="Laptop - Mock up"
                                className="laptop-mockup"
                            />
                            <div className="project-images">
                                <Splide
                                    aria-label="Similar Blogs"
                                    options={splideOptions}
                                >
                                    {projectImages.length > 0 &&
                                        projectImages.map(
                                            (projectImage, index) => (
                                                <SplideSlide key={index}>
                                                    <img
                                                        key={index}
                                                        src={
                                                            projectImage
                                                                .project_image
                                                                .image
                                                        }
                                                        alt={
                                                            "Project Image-" +
                                                            index
                                                        }
                                                        className="project-item-image"
                                                    />
                                                </SplideSlide>
                                            )
                                        )}
                                </Splide>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Project Content Section */}
                <div className="project-content">
                    <hr />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: project.content,
                        }}
                    ></div>
                </div>
            </div>
        </Container>
    );
}

export default Project;

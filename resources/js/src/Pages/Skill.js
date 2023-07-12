import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import ProjectTemplate from "./Components/Templates/ProjectTemplate";
import BlogTemplate from "./Components/Templates/BlogTemplate";
import { Container, Row, Col } from "react-bootstrap";
import styleVariables from "../assets/styles/variables/variables.module.scss";
import SquareLoader from "./Loaders/SquareLoader";
import { FaBusinessTime } from "react-icons/fa";
import SkillPageLoader from "./Loaders/SkillPageLoader";

const Skill = () => {
    const [skill, setSkill] = useState(null);
    const [skillProjects, setSkillProjects] = useState(null);
    const [skillBlogs, setSkillBlogs] = useState(null);
    const [skillCardStyle, setSkillCardStyle] = useState({});
    const { name } = useParams();

    const [imageLoading, setImageLoading] = useState(true);

    // Convert any hex to rgba
    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    useEffect(() => {
        AxiosConfig.get(`/skills/${name}`)
            .then((response) => {
                if (response.data.success) {
                    setSkill(response.data.data.skill);
                    setSkillProjects(response.data.data.projects);
                    setSkillBlogs(response.data.data.blogs);
                    setImageLoading(true);
                    setSkillCardStyle({
                        background: `linear-gradient(10deg, ${styleVariables.primaryDark} 0%,${response.data.data.skill.color_code} 100%)`,
                        boxShadow: `-2px 2px 4px ${hexToRgba(
                            response.data.data.skill.color_code,
                            "30%"
                        )}`,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name]);

    if (!skill) {
        return <Container className="mt-1 mt-sm-1"><SkillPageLoader /></Container>;
    }

    return (
        <Container className="mt-3 mt-sm-3">
            {/* Skill Card Details */}
            <div className="skill-card mb-3" style={skillCardStyle}>
                <Row>
                    <Col md={6}>
                        <h1>{skill.name}</h1>
                        <p className="d-flex align-items-center justify-content-start">
                            <FaBusinessTime className="me-1" /> Stared {skill.start_date}
                        </p>
                    </Col>
                    <Col md={6} className="img-container text-right">
                        {/* Show image loader until the image is totally loaded */}
                        {imageLoading && (
                            <SquareLoader
                                width={90}
                                height={90}
                                radius={50}
                                speed={0.5}
                            />
                        )}
                        {/* Hide / Show image based on the status of the image (Loaded or not) */}
                        {
                            <img
                                variant="top"
                                style={imageLoading ? { display: "none" } : {}}
                                onLoad={() => setImageLoading(false)}
                                src={skill.icon}
                                className="skill-img"
                                alt="Skill Icon"
                            />
                        }
                    </Col>
                </Row>
            </div>

            {/* Check if there's projects for this skill then loop over it */}
            {skillProjects && skillProjects.length > 0 && (
                <>
                    <div className="skill-projects">
                        <h2>Projects</h2>
                        <Row className="my-3">
                            {skillProjects.map((project, index) => {
                                return (
                                    <ProjectTemplate
                                        project={project}
                                        col={4}
                                        index={index}
                                        animate={"fade-right"}
                                        key={index}
                                    />
                                );
                            })}
                        </Row>
                    </div>
                </>
            )}

            {/* Check if there's blogs for this skill then loop over it */}
            {skillBlogs && skillBlogs.length > 0 && (
                <>
                    <div className="skill-blogs">
                        <hr className="custom-hr" />
                        <h2>Blogs</h2>
                        <Row className="my-3">
                            {skillBlogs.map((blog, index) => {
                                return (
                                    <BlogTemplate
                                        blog={blog}
                                        col={4}
                                        animate={"fade-right"}
                                        key={index}
                                    />
                                );
                            })}
                        </Row>
                    </div>
                </>
            )}
        </Container>
    );
};

export default Skill;

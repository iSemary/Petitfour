import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import ProjectTemplate from "./Components/Templates/ProjectTemplate";
import BlogTemplate from "./Components/Templates/BlogTemplate";
import { Container, Row } from "react-bootstrap";

const Skill = () => {
    const [skill, setSkill] = useState(null);
    const [skillProjects, setSkillProjects] = useState(null);
    const [skillExperiences, setSkillExperiences] = useState(null);
    const [skillBlogs, setSkillBlogs] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        AxiosConfig.get(`/skills/${name}`)
            .then((response) => {
                if (response.data.success) {
                    setSkill(response.data.data.skill);
                    setSkillProjects(response.data.data.projects);
                    setSkillExperiences(response.data.data.experiences);
                    setSkillBlogs(response.data.data.blogs);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [name]);

    if (!skill) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>{skill.name}</h1>
            <img src={skill.icon} alt="Skill Icon" />
            <p>Start Date: {skill.start_date}</p>

            <h2 className="text-center">Projects</h2>
            <Row className="justify-content-center">
                {skillProjects.map((project, index) => {
                    return (
                        <ProjectTemplate
                            project={project}
                            col={4}
                            animate={"fade-right"}
                            key={index}
                        />
                    );
                })}
            </Row>

            <h2 className="text-center">Experiences</h2>
            {skillExperiences.map((experience, index) => (
                <div key={index}>
                    <h3>{experience.name}</h3>
                    <p>{experience.description}</p>
                    <p>Start Date: {experience.start_date}</p>
                    <p>End Date: {experience.end_date}</p>
                </div>
            ))}

            <h2 className="text-center">Blogs</h2>
            <Row className="justify-content-center">
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
        </Container>
    );
};

export default Skill;

import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SideSkillLoader from "../Loaders/SideSkillLoader";
import SkillsListTemplate from "./Templates/SkillsListTemplate";
import HalfCirclePattern from "../Patterns/HalfCirclePattern";
import styleVariables from "../../assets/styles/variables/variables.module.scss";

function SideSkills({ sideSkills }) {
    const MAX_SIDE_SKILLS = 5;

    return (
        <div className="bg-home-even">
            <HalfCirclePattern
                width="75"
                height="180"
                stroke={styleVariables.primaryWhite}
                bottom="-15%"
                right="0"
                left="0"
                strokeWidth="60px"
                rotate="180"
            />

            <Container>
                <h3 className="text-center home-title">
                    Side <span>Skills</span>
                </h3>
                <Row className="side-skills">
                    {sideSkills ? (
                        sideSkills.map((sideSkill, index) => (
                            <Col
                                md={6}
                                className="side-skills-item"
                                key={index}
                                data-aos={"fade-"+(index % 2 ? "left" : "right")}
                                >
                                <Card className="mb-4">
                                    <Card.Body>
                                        <Row>
                                            <Col
                                                md={3}
                                                className="center-content"
                                            >
                                                <img
                                                    className="side-skills-image"
                                                    src={sideSkill.icon}
                                                    alt="Side Category"
                                                />
                                            </Col>
                                            <Col md={9} className="text-left">
                                                <h3>{sideSkill.title}</h3>
                                                <p>{sideSkill.description}</p>
                                                <Row className="skills m-auto">
                                                    {sideSkill?.skills
                                                        ?.slice(
                                                            0,
                                                            MAX_SIDE_SKILLS
                                                        )
                                                        .map((skill, index) => {
                                                            return (
                                                                <SkillsListTemplate
                                                                    skill={
                                                                        skill
                                                                    }
                                                                    imgClass="side-skill-icon"
                                                                    colClass="me-2 p-0 col-1"
                                                                    key={index}
                                                                    allowNavigate={false}
                                                                />
                                                            );
                                                        })}
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <>
                            <Col md={6}>
                                <SideSkillLoader />
                            </Col>
                            <Col md={6}>
                                <SideSkillLoader />
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}
export default SideSkills;

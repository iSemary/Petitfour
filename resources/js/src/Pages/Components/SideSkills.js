import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import SideSkillLoader from "../Loaders/SideSkillLoader";

function SideSkills({ sideSkills }) {
    const MAX_SIDE_SKILLS = 5;

    return (
        <div className="bg-home-even">
            <Container>
                <h3 className="text-center home-title">
                    Side <span>Skills</span>
                </h3>
                <Row className="side-skills">
                    {sideSkills ? (
                        sideSkills.map((sideSkill, index) => (
                            <>
                                <Col
                                    md={6}
                                    className="side-skills-item"
                                    key={index}
                                >
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <Row>
                                                <Col md={3}>
                                                    <img
                                                        className="side-skills-image"
                                                        src={sideSkill.icon}
                                                        alt="Side Category"
                                                    />
                                                </Col>
                                                <Col md={9}>
                                                    <h3>{sideSkill.title}</h3>
                                                    <p>
                                                        {sideSkill.description}
                                                    </p>
                                                    <Row className="skills">
                                                        {sideSkill?.skills
                                                            ?.slice(
                                                                0,
                                                                MAX_SIDE_SKILLS
                                                            )
                                                            .map(
                                                                (
                                                                    skill,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <Col
                                                                            md={
                                                                                1
                                                                            }
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            <OverlayTrigger
                                                                                placement="bottom"
                                                                                overlay={
                                                                                    <Tooltip id="button-tooltip-2">
                                                                                        {" "}
                                                                                        {
                                                                                            skill.name
                                                                                        }{" "}
                                                                                    </Tooltip>
                                                                                }
                                                                            >
                                                                                {({
                                                                                    ref,
                                                                                    ...triggerHandler
                                                                                }) => (
                                                                                    <img
                                                                                        {...triggerHandler}
                                                                                        ref={
                                                                                            ref
                                                                                        }
                                                                                        src={
                                                                                            skill.icon
                                                                                        }
                                                                                        className="side-skill-icon"
                                                                                        alt={
                                                                                            index
                                                                                        }
                                                                                    />
                                                                                )}
                                                                            </OverlayTrigger>
                                                                        </Col>
                                                                    );
                                                                }
                                                            )}
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </>
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

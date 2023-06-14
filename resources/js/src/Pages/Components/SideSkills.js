import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function SideSkills({ sideSkills }) {
    return (
        <Container>
            <h3 className="text-center">Side Skills</h3>
            <Row>
                {sideSkills?.map((sideSkill, index) => (
                    <>
                        <Col md={6}>
                            <Card className="mb-4">
                                <Card.Body>
                                    <Row>
                                        <Col md={3}>
                                            <img
                                                src={sideSkill.icon}
                                                alt="Side Category"
                                            />
                                        </Col>
                                        <Col md={9}>
                                            <h3>{sideSkill.title}</h3>
                                            <p>{sideSkill.description}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>
                ))}
            </Row>
        </Container>
    );
}
export default SideSkills;

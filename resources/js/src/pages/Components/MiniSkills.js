import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

function MiniSkills() {
    return (
        <>
            <div className="text-center">
                <h3>Side Skills</h3>
                <Row className="justify-content-center">
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                    <Col md={1}>ICO</Col>
                </Row>
                <Link to="skills">Discover More</Link>
            </div>
        </>
    );
}
export default MiniSkills;

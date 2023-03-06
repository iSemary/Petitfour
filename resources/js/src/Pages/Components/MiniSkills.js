import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

import css from "../../assets/images/icons/css.png";
import html from "../../assets/images/icons/html.png";
import laravel from "../../assets/images/icons/laravel.png";
import php from "../../assets/images/icons/php.png";
import js from "../../assets/images/icons/js.png";
import react from "../../assets/images/icons/react.png";
import mysql from "../../assets/images/icons/mysql.png";
import sass from "../../assets/images/icons/sass.png";

function MiniSkills() {
    return (
        <>
            <div className="text-center">
                <Row className="justify-content-center">
                    <Col md={1}>
                        <img alt="" src={css} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={html} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={laravel} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={php} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={js} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={react} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={mysql} width="50px" height="50px" />
                    </Col>
                    <Col md={1}>
                        <img alt="" src={sass} width="50px" height="50px" />
                    </Col>
                </Row>
                <Link to="skills">Discover More</Link>
            </div>
        </>
    );
}
export default MiniSkills;

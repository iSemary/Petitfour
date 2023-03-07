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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BiNavigation } from "react-icons/bi";

import AOS from 'aos';
AOS.init();
function MiniSkills() {
    return (
        <>
            <div className="text-center">
                <Row className="justify-content-center">
                    <Col md={1} data-aos="fade-right">
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="button-tooltip-2">HTML</Tooltip>
                            }
                        >
                            {({ ref, ...triggerHandler }) => (
                                <img
                                    {...triggerHandler}
                                    ref={ref}
                                    alt=""
                                    src={css}
                                    width="50px"
                                    height="50px"
                                />
                            )}
                        </OverlayTrigger>
                    </Col>
                    <Col md={1} data-aos="fade-up-right">
                        <img alt="" src={html} width="50px" height="50px" />
                    </Col>
                    <Col md={1}  data-aos="zoom-in-down">
                        <img alt="" src={laravel} width="50px" height="50px" />
                    </Col>
                    <Col md={1} data-aos="zoom-out-up">
                        <img alt="" src={php} width="50px" height="50px" />
                    </Col>
                    <Col md={1} data-aos="zoom-out-down">
                        <img alt="" src={js} width="50px" height="50px" />
                    </Col>
                    <Col md={1}  data-aos="zoom-in-up">
                        <img alt="" src={react} width="50px" height="50px" />
                    </Col>
                    <Col md={1} data-aos="fade-up-left">
                        <img alt="" src={mysql} width="50px" height="50px" />
                    </Col>
                    <Col md={1} data-aos="fade-left">
                        <img alt="" src={sass} width="50px" height="50px" />
                    </Col>
                </Row>
                <div className="mt-4">
                    <Link to="skills" className="discover-more-btn">
                        <span class="discover-circle" aria-hidden="true">
                            <span>
                            <BiNavigation className="discover-icon" />
                            </span>
                        </span>
                        <span class="discover-button-text">Discover More</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default MiniSkills;

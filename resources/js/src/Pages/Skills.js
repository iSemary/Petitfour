import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../actions/skillsSlice";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import react from "../assets/images/icons/react.png";
import vue from "../assets/images/icons/vue.png";
import jquery from "../assets/images/icons/jquery.png";
import SkillLoader from "./Loaders/SkillLoader";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";

function Skills() {
    const bgs = ["second", "main"];
    const txt = ["main", "second"];
    const skills = useSelector((state) => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSkills());
    }, [dispatch]);

    let SkillsSection = null;
    if (skills.success) {
        SkillsSection = skills.data.map((skill, i) => {
            return (
                <Col
                    md={12}
                    key={i}
                    className={"bg-" + bgs[i % 2] + " text-" + txt[i % 2]}
                >
                    <Row>
                        <Col md={6}>
                            <div className="major-skills">
                                <div>
                                    {skill.skills.map((majorSkill, i) => {
                                        return (
                                            <div className="" key={i}>
                                                <OverlayTrigger
                                                    placement="bottom"
                                                    overlay={
                                                        <Tooltip id="button-tooltip-2">
                                                            {majorSkill.name}
                                                        </Tooltip>
                                                    }
                                                >
                                                    {({
                                                        ref,
                                                        ...triggerHandler
                                                    }) => (
                                                        <img
                                                            {...triggerHandler}
                                                            ref={ref}
                                                            alt=""
                                                            src={react}
                                                            width="50px"
                                                            height="50px"
                                                        />
                                                    )}
                                                </OverlayTrigger>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h4>{skill.name}</h4>
                            <h5>{skill.title}</h5>
                            <p>{skill.description}</p>

                            <Row className="width-fit-content">
                                {skill.sides.map((sideSkill, i) => {
                                    return (
                                        <Col
                                            key={i}
                                            md={3}
                                            className="me-2 p-0"
                                        >
                                            <OverlayTrigger
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="button-tooltip-2">
                                                        {sideSkill.name}
                                                    </Tooltip>
                                                }
                                            >
                                                {({
                                                    ref,
                                                    ...triggerHandler
                                                }) => (
                                                    <img
                                                        {...triggerHandler}
                                                        ref={ref}
                                                        alt={
                                                            sideSkill.name +
                                                            " side skill"
                                                        }
                                                        src={react}
                                                        width="25px"
                                                        height="25px"
                                                    />
                                                )}
                                            </OverlayTrigger>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            );
        });
    }
    return (
        <>
            <>
                <Row className="bg-main">
                    {skills.success ? SkillsSection : <SkillLoader />}
                </Row>
            </>
        </>
    );
}

export default Skills;

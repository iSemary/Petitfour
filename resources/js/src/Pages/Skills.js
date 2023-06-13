import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../actions/skillsSlice";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import SkillLoader from "./Loaders/SkillLoader";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Tooltip from "react-bootstrap/esm/Tooltip";
import { Link } from "react-router-dom";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPalette2, BsDatabaseFillGear } from "react-icons/bs";
import { HiServerStack } from "react-icons/hi2";

function Skills() {
    const bgs = ["main-white", "main-dark"];
    const txt = ["main-dark", "second"];
    const categoriesIcons = [
        <BsPalette2 size={25} />,
        <BsDatabaseFillGear size={25} />,
        <HiServerStack size={25} />,
    ];
    const skills = useSelector((state) => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSkills());
    }, [dispatch]);

    let SkillsSection = null;
    if (skills.success) {
        SkillsSection = skills.data.categories.map((skill, i) => {
            return (
                <div
                    key={i}
                    className={
                        "skills " + ("bg-" + bgs[i % 2] + " text-" + txt[i % 2])
                    }
                >
                    <Container>
                        <Row>
                            <Col md={6} className="skills-major-container">
                                <div className="skills-major text-center row">
                                    {skill.skills
                                        ?.slice(0, 3)
                                        .map((majorSkill, i) => {
                                            return (
                                                <div
                                                    className={
                                                        "col-" +
                                                        (i <= 1
                                                            ? "6"
                                                            : "12 mt-15")
                                                    }
                                                    key={i}
                                                >
                                                    <OverlayTrigger
                                                        placement="bottom"
                                                        overlay={
                                                            <Tooltip id="button-tooltip-2">
                                                                {
                                                                    majorSkill.name
                                                                }
                                                            </Tooltip>
                                                        }
                                                    >
                                                        {({
                                                            ref,
                                                            ...triggerHandler
                                                        }) => (
                                                            <Link
                                                                to={`/skills/${majorSkill.name}`}
                                                            >
                                                                <img
                                                                    {...triggerHandler}
                                                                    ref={ref}
                                                                    alt={majorSkill.name + " skill icon"}
                                                                    src={
                                                                        majorSkill.icon
                                                                    }
                                                                    width="50px"
                                                                    height="50px"
                                                                />
                                                            </Link>
                                                        )}
                                                    </OverlayTrigger>
                                                </div>
                                            );
                                        })}
                                </div>
                            </Col>
                            <Col md={6} className="skills-details-container">
                                <div className="category-details">
                                    <div className="category-name">
                                        <h4>
                                            {categoriesIcons[i]} {skill.name}
                                        </h4>
                                    </div>
                                    <h5>{skill.title}</h5>
                                    <p>
                                        <RiDoubleQuotesL /> {skill.description}{" "}
                                        <RiDoubleQuotesR />
                                    </p>
                                </div>
                                <div className="category-skills">
                                    <Row className="skills-list width-fit-content">
                                        {skill.additional.map(
                                            (additionalSkill, i) => {
                                                return (
                                                    <Col
                                                        key={i}
                                                        className="me-2 p-0"
                                                    >
                                                        <OverlayTrigger
                                                            placement="bottom"
                                                            overlay={
                                                                <Tooltip id="button-tooltip-2">
                                                                    {
                                                                        additionalSkill.name
                                                                    }
                                                                </Tooltip>
                                                            }
                                                        >
                                                            {({
                                                                ref,
                                                                ...triggerHandler
                                                            }) => (
                                                                <Link
                                                                    to={`/skills/${additionalSkill.name}`}
                                                                >
                                                                    <img
                                                                        {...triggerHandler}
                                                                        ref={
                                                                            ref
                                                                        }
                                                                        className="side-skill"
                                                                        alt={
                                                                            additionalSkill.name +
                                                                            " side skill"
                                                                        }
                                                                        src={
                                                                            additionalSkill.icon
                                                                        }
                                                                        width="25px"
                                                                        height="25px"
                                                                    />
                                                                </Link>
                                                            )}
                                                        </OverlayTrigger>
                                                    </Col>
                                                );
                                            }
                                        )}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        });
    }
    return (
        <>
            <div className="">
                {skills.success ? SkillsSection : <SkillLoader />}
            </div>
        </>
    );
}

export default Skills;

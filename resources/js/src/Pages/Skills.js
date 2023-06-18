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
import SkillsListTemplate from "./Components/Templates/SkillsListTemplate";
import SkillsMajorTemplate from "./Components/Templates/SkillsMajorTemplate";

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
                                        .map((majorSkill, index) => (
                                            <SkillsMajorTemplate
                                                skill={majorSkill}
                                                index={index}
                                                key={index}
                                            />
                                        ))}
                                </div>
                            </Col>
                            <Col md={6} className="skills-details-container">
                                <div className="category-details">
                                    <div className="category-name">
                                        <img
                                            src={skill.name}
                                            alt={"category icon " + i}
                                            className="category-icon"
                                        />
                                        <h4>
                                           {skill.name}
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
                                            (additionalSkill, index) => (
                                                <SkillsListTemplate
                                                    skill={additionalSkill}
                                                    imgClass="side-skill"
                                                    colClass="me-2 p-0"
                                                    key={index}
                                                />
                                            )
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

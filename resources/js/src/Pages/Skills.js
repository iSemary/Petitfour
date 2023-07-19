import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkills } from "../actions/skillsSlice";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import SkillLoader from "./Loaders/SkillLoader";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import SkillsListTemplate from "./Components/Templates/SkillsListTemplate";
import SkillsMajorTemplate from "./Components/Templates/SkillsMajorTemplate";
import ZigZagPattern from "./Patterns/ZigZagPattern";
import ArrowsPattern from "./Patterns/ArrowsPattern";
import DottedSquarePattern from "./Patterns/DottedSquarePattern";
import styleVariables from "../assets/styles/variables/variables.module.scss";

function Skills() {
    const bgs = ["main-white", "main-dark"];
    const txt = ["main-dark", "second"];
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
                    className={`skills bg-${bgs[i % 2]} text-${txt[i % 2]}`}
                >
                    {i === 0 && (
                        <ZigZagPattern
                            fill={styleVariables.primaryColor}
                            top="40%"
                            rotate="135"
                            right="55%"
                            width="50"
                        />
                    )}
                    {i === 1 && (
                        <DottedSquarePattern
                            fill={styleVariables.primaryWhite}
                            stroke={styleVariables.primaryColor}
                            top="75%"
                            right="2%"
                            width="150"
                        />
                    )}
                    {i === 2 && (
                        <ArrowsPattern
                            fill={styleVariables.primaryColor}
                            top="90%"
                            rotate="360"
                            right="75%"
                            width="110"
                        />
                    )}
                    <Container>
                        <Row>
                            <Col md={6} className="skills-major-container">
                                <div className="skills-major text-center row">
                                    {skill.skills &&
                                        skill.skills
                                            .slice(0, 3)
                                            .map((majorSkill, index) => (
                                                <SkillsMajorTemplate
                                                    skill={majorSkill}
                                                    index={index}
                                                    key={index}
                                                />
                                            ))}
                                </div>
                            </Col>
                            <Col
                                md={6}
                                className="skills-details-container p-3"
                            >
                                <div className="category-details">
                                    <div className="category-name">
                                        <img
                                            src={skill.icon}
                                            alt={"category icon " + i}
                                            className="category-icon"
                                        />
                                        <h3 className="font-weight-bold">
                                            {skill.name}
                                        </h3>
                                    </div>
                                    <h5>{skill.title}</h5>
                                    <p className="font-18">
                                        <RiDoubleQuotesL /> {skill.description}{" "}
                                        <RiDoubleQuotesR />
                                    </p>
                                </div>
                                <div className="category-skills">
                                    <Row className="skills-list">
                                        {skill.additional &&
                                            skill.additional.map(
                                                (additionalSkill, index) => (
                                                    <SkillsListTemplate
                                                        skill={additionalSkill}
                                                        imgClass="side-skill"
                                                        colClass="me-2 p-0 col-3 width-fit-content"
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
            <div>{skills.success ? SkillsSection : <SkillLoader />}</div>
        </>
    );
}

export default Skills;

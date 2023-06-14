import React from "react";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { BiNavigation } from "react-icons/bi";

import AOS from "aos";
import ProjectTemplate from "./Templates/ProjectTemplate";

AOS.init();

function TopProjects(props) {
    let topProjects = "";

    if (props.topProjects && Object.keys(props.topProjects).length > 0) {
        topProjects = props.topProjects.map((project, index) => {
            return (
                <ProjectTemplate
                    project={project}
                    col={4}
                    animate={"fade-right"}
                    key={index}
                />
            );
        });
    }

    return (
        <>
            <div className="text-center">
                <h3 className="text-center">Top Projects</h3>
                <Row className="justify-content-center">{topProjects}</Row>
                <div className="mt-4">
                    <Link to="projects" className="discover-more-btn">
                        <span className="discover-circle" aria-hidden="true">
                            <span>
                                <BiNavigation className="discover-icon" />
                            </span>
                        </span>
                        <span className="discover-button-text">
                            Discover More
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default TopProjects;

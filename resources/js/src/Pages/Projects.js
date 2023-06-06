import React, { useState, useEffect } from "react";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectTemplate from "./Components/Templates/ProjectTemplate";

function Projects() {
    const [page, setPage] = useState(1);
    const [projects, setProjects] = useState([]);
    const [totalRecords, setTotalRecords] = useState(null);
    const [loadMore, setLoadMore] = useState(false);

    const getData = () => {
        AxiosConfig.get(`/projects?page=${page}`)
            .then((response) => {
                if (response.data.success) {
                    setProjects((prevProjects) => [
                        ...prevProjects,
                        ...response.data.data.data,
                    ]);
                    setPage(page + 1);
                    setTotalRecords(response.data.data.total);
                    setLoadMore(false);
                }
            })
            .catch((error) => {
                console.log(error);
                setLoadMore(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const loadMoreData = () => {
        setLoadMore(true);
        getData();
    };

    return (
        <Container>
            <h1 className="my-4">Projects</h1>
            <Row className="projects">
                {projects.map((project, key) => (
                    <ProjectTemplate
                        project={project}
                        col={4}
                        animate={"fade-right"}
                        key={key}
                    />
                ))}
            </Row>
            {totalRecords > projects.length && (
                <div className="text-center my-3">
                    <Button
                        variant="primary"
                        onClick={loadMoreData}
                        disabled={loadMore ? "disabled" : ""}
                    >
                        {loadMore ? (
                            <>
                                <ImSpinner10 className="spinner" /> Loading...
                            </>
                        ) : (
                            <>
                                <HiOutlineDownload /> Load More
                            </>
                        )}
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default Projects;

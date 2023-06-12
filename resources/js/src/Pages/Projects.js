import React, { useState, useEffect } from "react";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Button, Col } from "react-bootstrap";
import { ImSpinner10 } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import ProjectTemplate from "./Components/Templates/ProjectTemplate";

function Projects({ categories }) {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(null);
    const [projects, setProjects] = useState([]);
    const [totalRecords, setTotalRecords] = useState(null);
    const [loadMore, setLoadMore] = useState(false);

    const getData = () => {
        AxiosConfig.get(
            `/projects?page=${page}${category ? "&category=" + category : ""}`
        )
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
        setProjects([]);
        setPage(1);
        getData();
    }, [category]);

    const loadMoreData = () => {
        setLoadMore(true);
        getData();
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1 className="my-4">Projects</h1>
                </Col>
                <Col md={6} className="blog-filter justify-content-between">
                    {categories &&
                        categories.length > 0 &&
                        categories.map((category, index) => (
                            <button
                                className="btn btn-main"
                                key={index}
                                onClick={(e) => {
                                    setPage(1);
                                    setCategory(
                                        category.name
                                            .split(" ")
                                            .join("-")
                                            .toLowerCase()
                                    );
                                }}
                            >
                                {category.name}{" "}
                                <span>{category.counters.projects}</span>
                            </button>
                        ))}
                </Col>
            </Row>
            <Row className="projects">
                {projects?.map((project, key) => (
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

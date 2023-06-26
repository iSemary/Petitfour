import React, { useState, useEffect } from "react";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import { ImSpinner10 } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import ProjectTemplate from "./Components/Templates/ProjectTemplate";
import ProjectLoader from "./Loaders/ProjectLoader";
import CategoriesTemplate from "./Components/Templates/CategoriesTemplate";

function Projects({ categories }) {
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(null);
    const [projects, setProjects] = useState([]);
    const [totalRecords, setTotalRecords] = useState(null);
    const [allRecords, setAllRecords] = useState(0);
    const [loadMore, setLoadMore] = useState(false);

    const getData = () => {
        AxiosConfig.get(
            `/projects?page=${page}${category && "&category=" + category}`
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

                    if (!category) {
                        setAllRecords(response.data.data.total);
                    }
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
        <Container className="m-auto">
            <Row className="justify-content-between">
                <Col md={3}>
                    <h1 className="my-4">Projects</h1>
                </Col>
                <Col
                    md={9}
                    className="blog-filter justify-content-between width-fit-content"
                >
                    {categories && categories.length > 0 && (
                        <CategoriesTemplate
                            activeCategory={category}
                            categories={categories}
                            allRecords={allRecords}
                            setPage={setPage}
                            setCategory={setCategory}
                            type="projects"
                        />
                    )}
                </Col>
            </Row>
            <Row className="projects mt-sm-1 m-auto">
                {projects && projects.length > 0 ? (
                    projects.map((project, key) => (
                        <ProjectTemplate
                            project={project}
                            col={4}
                            animate={"fade-right"}
                            key={key}
                        />
                    ))
                ) : (
                    <>
                        <Col md={4}>
                            <ProjectLoader />
                        </Col>
                        <Col md={4}>
                            <ProjectLoader />
                        </Col>
                        <Col md={4}>
                            <ProjectLoader />
                        </Col>
                        <Col md={4}>
                            <ProjectLoader />
                        </Col>
                    </>
                )}
            </Row>
            {totalRecords && totalRecords > projects.length && (
                <div className="text-center my-3">
                    <button
                        type="button"
                        onClick={loadMoreData}
                        className="btn btn-main-light"
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
                    </button>
                </div>
            )}
        </Container>
    );
}

export default Projects;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import { Fade, Slide } from "react-awesome-reveal";

function Projects() {
    const [page, setPage] = useState(1);
    const [projects, setProjects] = useState([]);
    const [totalRecords, setTotalRecords] = useState(null);
    const [loadMore, setLoadMore] = useState(false);

    const getData = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/projects?page=${page}`)
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
                    <Col md={4} key={key} className="project-item">
                        <Fade delay={1}>
                            <Card className="mb-4">
                                <Link to={`/projects/${project.name.toLowerCase()}`}>
                                    <Card.Img
                                        variant="top"
                                        src={project.project_mocked_image}
                                    />
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                                <Link to={`/projects/${project.name.toLowerCase()}`}>
                                    <Button variant="primary">Read More</Button>
                                </Link>
                            </Card>
                        </Fade>
                    </Col>
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

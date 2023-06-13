import React, { useState, useEffect } from "react";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

function Blogs({ categories }) {
    const [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState([]);
    const [totalRecords, setTotalRecords] = useState(null);
    const [loadMore, setLoadMore] = useState(false);

    const getData = () => {
        AxiosConfig.get(
            `/blogs?page=${page}${category ? "&category=" + category : ""}`
        )
            .then((response) => {
                if (response.data.success) {
                    setBlogs((prevBlogs) => [
                        ...prevBlogs,
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
        setBlogs([]);
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
                    <h1 className="my-4">Blogs</h1>
                </Col>
                <Col md={6} className="blog-filter justify-content-between">
                    {categories &&
                        categories.length > 0 &&
                        categories.map((category, index) => (
                            <button
                                className="btn btn-main-light position-relative"
                                key={index}
                                type="button"
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
                                {category.name} 
                                <span className="btn-counter">{category.counters.blogs}</span>
                            </button>
                        ))}
                </Col>
            </Row>

            <Row className="blogs">
                {blogs?.map((blog, key) => (
                    <Col md={4} key={key} className="blog-item">
                        <Fade delay={1}>
                            <Card className="mb-4 blog-card">
                                <Link to={`/blogs/${blog.slug}`}>
                                    <Card.Img variant="top" src={blog.image} />
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text className="blog-description">
                                            {blog.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                                <Link to={`/blogs/${blog.slug}`}>
                                    <Button variant="none" className="more-btn">
                                        Read More
                                    </Button>
                                </Link>
                            </Card>
                        </Fade>
                    </Col>
                ))}
            </Row>
            {totalRecords > blogs.length && (
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

export default Blogs;

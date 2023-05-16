import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [visibleBlogs, setVisibleBlogs] = useState([]);
    const [blogsPerPage, setBlogsPerPage] = useState(5);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setBlogs(response.data))
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        setVisibleBlogs(blogs.slice(0, blogsPerPage));
    }, [blogs, blogsPerPage]);

    const loadMoreBlogs = () => {
        setBlogsPerPage((prev) => prev + 5);
        setLoadMore(true);
    };

    return (
        <Container>
            <h1 className="my-4">Blogs</h1>
            <Row>
                {visibleBlogs.map((blog) => (
                    <Col md={4} key={blog.id}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={blog.image} />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.body}</Card.Text>
                                <Link to={`/blog/${blog.slug}`}>
                                    <Button variant="primary">Read More</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {blogsPerPage < blogs.length && (
                <div className="text-center my-3">
                    <Button variant="primary" onClick={loadMoreBlogs}>
                        {loadMore ? "Loading..." : "Load More"}
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default Blogs;

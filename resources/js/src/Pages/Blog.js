import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Blog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
            .then((response) => {
                setBlog(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [slug]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                    <p>Author: {blog.author}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Blog;

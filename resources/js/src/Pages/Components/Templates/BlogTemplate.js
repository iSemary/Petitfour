import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function BlogTemplate({ blog, col }) {
    return (
        <>
            <Col md={col} className="blog-item blog-min-card">
                <Fade delay={1}>
                    <Card className="mb-4">
                        <Link to={`/blogs/${blog.slug}`}>
                            <Card.Img variant="top" src={blog.image} />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.description}</Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Fade>
            </Col>
        </>
    );
}

export default BlogTemplate;

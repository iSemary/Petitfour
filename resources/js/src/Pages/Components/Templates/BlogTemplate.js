import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function BlogTemplate({ blog, col, fade }) {
    return (
        <>
            <Col md={col} className="blog-item blog-min-card">
                <Fade delay={1} className={!fade && "reveal-fade"}>
                    <Card className="mb-4 border-0">
                        <Link to={`/blogs/${blog.slug}`}>
                            <div className="blog-card-image-container">
                                <Card.Img variant="top" src={blog.image} />
                            </div>
                            <Card.Body>
                                <Card.Title className="blog-title">{blog.title}</Card.Title>
                                <Card.Text className="blog-description">
                                    {blog.description}
                                </Card.Text>
                                <Card.Text>{blog.published_at}</Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Fade>
            </Col>
        </>
    );
}

export default BlogTemplate;

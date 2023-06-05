import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function LatestBlogs(props) {
    return (
        <>
            <h3 className="text-center">Latest blog posts</h3>
            <Row className="blogs">
                {props.latestBlogs?.map((blog, key) => (
                    <Col md={4} key={key} className="blog-item">
                        <Fade delay={1}>
                            <Card className="mb-4">
                                <Link to={`/blogs/${blog.slug}`}>
                                    <Card.Img variant="top" src={blog.image} />
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </>
    );
}
export default LatestBlogs;

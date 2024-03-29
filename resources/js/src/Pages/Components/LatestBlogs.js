import React from "react";
import BlogTemplate from "./Templates/BlogTemplate";
import { Col, Container, Row } from "react-bootstrap";
import BlogLoader from "../Loaders/BlogLoader";

function LatestBlogs({ latestBlogs }) {
    return (
        <div className="bg-home-odd latest-blogs-section mb-0">
            <Container className="latest-blogs-container">
                <h3 className="text-center home-title latest-blogs-title">
                    Latest blog <span>posts</span>
                </h3>
                <Row className="home-blogs my-3">
                    {latestBlogs ? (
                        latestBlogs.map((blog, index) => (
                            <BlogTemplate
                                blog={blog}
                                animate={"fade-right"}
                                key={index}
                                index={index}
                            />
                        ))
                    ) : (
                        <>
                            <Col md={4}>
                                <BlogLoader />
                            </Col>
                            <Col md={4}>
                                <BlogLoader />
                            </Col>
                            <Col md={4}>
                                <BlogLoader />
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}
export default LatestBlogs;

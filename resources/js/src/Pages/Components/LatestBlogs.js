import React from "react";
import BlogTemplate from "./Templates/BlogTemplate";
import { Col, Container, Row } from "react-bootstrap";
import BlogLoader from "../Loaders/BlogLoader";

function LatestBlogs({ latestBlogs }) {
    return (
        <div className="bg-home-odd">
            <Container>
                <h3 className="text-center home-title">
                    latest blog <span>posts</span>
                </h3>
                <Row className="home-blogs">
                    {latestBlogs ? (
                        latestBlogs.map((blog, index) => (
                            <BlogTemplate
                                blog={blog}
                                col={4}
                                animate={"fade-right"}
                                key={index}
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

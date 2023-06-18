import React from "react";
import BlogTemplate from "./Templates/BlogTemplate";
import { Col, Row } from "react-bootstrap";
import BlogLoader from "../Loaders/BlogLoader";

function LatestBlogs({latestBlogs}) {
    return (
        <div className="my-4">
            <h3 className="text-center">Latest blog posts</h3>
            <Row className="home-blogs">
                {latestBlogs ? latestBlogs.map((blog, index) => (
                    <BlogTemplate
                        blog={blog}
                        col={4}
                        animate={"fade-right"}
                        key={index}
                    />
                )): <>
                <Col md={4}>
                    <BlogLoader/>
                </Col>
                <Col md={4}>
                    <BlogLoader/>
                </Col>
                <Col md={4}>
                    <BlogLoader/>
                </Col>
                </>}
            </Row>
        </div>
    );
}
export default LatestBlogs;

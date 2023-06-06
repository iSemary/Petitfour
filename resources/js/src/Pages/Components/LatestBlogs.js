import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import BlogTemplate from "./Templates/BlogTemplate";

function LatestBlogs(props) {
    return (
        <>
            <h3 className="text-center">Latest blog posts</h3>
            <Row className="blogs">
                {props.latestBlogs?.map((blog, index) => (
                    <BlogTemplate
                        blog={blog}
                        col={4}
                        animate={"fade-right"}
                        key={index}
                    />
                ))}
            </Row>
        </>
    );
}
export default LatestBlogs;

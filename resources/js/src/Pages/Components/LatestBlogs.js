import React from "react";
import BlogTemplate from "./Templates/BlogTemplate";
import { Row } from "react-bootstrap";

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

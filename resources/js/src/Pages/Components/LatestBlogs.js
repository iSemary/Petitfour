import React from "react";
import BlogTemplate from "./Templates/BlogTemplate";
import { Row } from "react-bootstrap";

function LatestBlogs(props) {
    return (
        <div className="my-4">
            <h3 className="text-center">Latest blog posts</h3>
            <Row className="home-blogs">
                {props.latestBlogs?.map((blog, index) => (
                    <BlogTemplate
                        blog={blog}
                        col={4}
                        animate={"fade-right"}
                        key={index}
                    />
                ))}
            </Row>
        </div>
    );
}
export default LatestBlogs;

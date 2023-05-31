import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";

function Blog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [blogSkills, setBlogSkills] = useState(null);

    useEffect(() => {
        AxiosConfig
            .get(`/blogs/${slug}`)
            .then((response) => {
                if (response.data.success) {
                    setBlog(response.data.data);
                    setBlogSkills(response.data.data.skills);
                }
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
            <div className="blog-page">
                <Row>
                    <Col>
                        <img
                            className="blog-image"
                            src={blog.image}
                            alt={blog.title + " Blog Image"}
                        />
                        <h1 className="blog-title">{blog.title}</h1>
                        <hr />
                        <p className="blog-description">{blog.description}</p>
                        <hr />
                        <div className="blog-content">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            ></div>
                        </div>
                        <p className="blog-date">Author: {blog.published_at}</p>
                        <hr />
                        {
                            <div className="blog-skills">
                                {blogSkills.map((blogSkill, key) => (
                                    <span
                                        key={key}
                                        className="badge badge-skill"
                                    >
                                        {blogSkill.name}
                                    </span>
                                ))}
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Blog;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import { HiCalendarDays } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";

function Blog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [blogSkills, setBlogSkills] = useState(null);

    useEffect(() => {
        AxiosConfig.get(`/blogs/${slug}`)
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
        <Container className="blog-page">
            <Row className="blog-details">
                <Col md={7}>
                    <img
                        className="blog-image"
                        src={blog.image}
                        alt={blog.title + " Blog Image"}
                    />
                </Col>
                <Col md={5} className="d-grid">
                    <h1 className="blog-title">
                        <FaQuoteLeft />
                        &nbsp;
                        {blog.title}
                    </h1>

                    <div className="blog-info">
                        <p className="blog-description"> {blog.description}</p>
                        <p className="blog-date">
                            <HiCalendarDays size={20} />{" "}
                            <span className="font-weight-bold">
                                {" "}
                                {blog.published_at}{" "}
                            </span>
                        </p>
                        {
                            <div className="blog-skills">
                                {blogSkills.map((blogSkill, key) => (
                                    <Link to={"/skills/" + blogSkill.name}>
                                        <span
                                            key={key}
                                            className="badge badge-secondary me-1"
                                        >
                                            {blogSkill.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        }
                    </div>
                </Col>
            </Row>
            <div className="blog-content my-5">
                <div
                    dangerouslySetInnerHTML={{
                        __html: blog.content,
                    }}
                ></div>
            </div>
        </Container>
    );
}

export default Blog;

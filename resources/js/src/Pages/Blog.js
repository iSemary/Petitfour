import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import { HiCalendarDays } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";
import BlogTemplate from "./Components/Templates/BlogTemplate";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PostLoader from "./Loaders/PostLoader";

function Blog() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [similarBlogs, setSimilarBlogs] = useState(null);
    const [blogSkills, setBlogSkills] = useState(null);

    const splideOptions = {
        rewind: true,
        autoplay: true,
        interval: 2000,
        perPage: 3,
        type: "loop",
        drag: "free",
        fixedWidth: "20rem",
        fixedHeight: "100%",
        gap: "1rem",
        arrows: false,
    };

    useEffect(() => {
        AxiosConfig.get(`/blogs/${slug}`)
            .then((response) => {
                if (response.data.success) {
                    setBlog(response.data.data.blog);
                    setBlogSkills(response.data.data.blog.skills);
                    setSimilarBlogs(response.data.data.similar);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [slug]);

    if (!blog) {
        return <Container className="mt-5"><PostLoader /></Container>;
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
                                    <Link to={"/skills/" + blogSkill.name} key={key} aria-label={blogSkill.name}>
                                        <span
                                            
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

            <hr className="custom-hr" />
            {similarBlogs && similarBlogs.length > 0 && (
                <>
                    <h3 className="text-center">
                        Similar blogs you may interested in
                    </h3>
                    <Row className="home-blogs">
                        <Splide
                            aria-label="Similar Blogs"
                            options={splideOptions}
                        >
                            {similarBlogs.map((similarBlog, index) => (
                                <SplideSlide key={index}>
                                    <BlogTemplate
                                        blog={similarBlog}
                                        fade={false}
                                        index={index}
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>
                    </Row>
                </>
            )}
        </Container>
    );
}

export default Blog;

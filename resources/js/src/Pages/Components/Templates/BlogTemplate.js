import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import SkillsListTemplate from "./SkillsListTemplate";
import SquareLoader from "../../Loaders/SquareLoader";

const MAX_BLOG_SKILLS = 4;
function BlogTemplate({ blog, fade }) {
    const [imageLoading, setImageLoading] = useState(true);
    return (
        <>
            <Col sm={12} md={6} lg={4} className="blog-item blog-min-card">
                <Fade delay={1} className={!fade && "reveal-fade"}>
                    <Card className="mb-4 border-0">
                        <Link to={`/blogs/${blog.slug}`}>
                            <div className="blog-card-image-container">
                                {/* Show image loader until the image is totally loaded */}
                                {imageLoading && (
                                    <SquareLoader
                                        width={450}
                                        height={450}
                                        radius={0}
                                    />
                                )}
                                {/* Hide / Show image based on the status of the image (Loaded or not) */}
                                {
                                    <img
                                        variant="top"
                                        style={
                                            imageLoading
                                                ? { display: "none" }
                                                : {}
                                        }
                                        className="card-img-top"
                                        onLoad={() => setImageLoading(false)}
                                        src={blog.image}
                                        alt="blog"
                                    />
                                }
                            </div>
                            <Card.Body>
                                <Card.Title className="blog-title">
                                    {blog.title}
                                </Card.Title>
                                <Card.Text className="blog-description">
                                    {blog.description}
                                </Card.Text>
                                <Card.Text className="blog-date">
                                    {blog.published_at}
                                </Card.Text>
                            </Card.Body>
                        </Link>

                        <Card.Body className="pt-0 blog-skills">
                            <Row className="justify-content-around">
                                {blog.skills &&
                                    blog.skills.length > 0 &&
                                    blog.skills
                                        .slice(0, MAX_BLOG_SKILLS)
                                        .map((blogSkill, index) => (
                                            <SkillsListTemplate
                                                skill={blogSkill}
                                                imgClass="project-skill-icon"
                                                colClass="me-2 p-0 col-1"
                                                key={index}
                                            />
                                        ))}
                                {blog.skills &&
                                    blog.skills.length > 0 &&
                                    blog.skills.length > MAX_BLOG_SKILLS && (
                                        <Col
                                            md={3}
                                            key={MAX_BLOG_SKILLS}
                                            className="more-skills-icon"
                                        >
                                            +
                                            {blog.skills.length -
                                                MAX_BLOG_SKILLS}{" "}
                                        </Col>
                                    )}
                            </Row>
                        </Card.Body>
                    </Card>
                </Fade>
            </Col>
        </>
    );
}

export default BlogTemplate;

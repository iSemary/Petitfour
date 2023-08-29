import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FeatureLoader from "../Loaders/FeatureLoader";
import { Container } from "react-bootstrap";

function Features(props) {
    return (
        <div className="bg-home-even features-section">
            <Container>
                <h3 className="text-center home-title">
                    What can i do <span>best?</span>
                </h3>
                <Row className="features m-auto">
                    {props.features ? (
                        props.features.map((feature, index) => {
                            return (
                                <Col
                                    md={6}
                                    key={index}
                                    className="feature-item"
                                    data-aos={"fade-"+(index % 2 ? "left" : "right")}
                                    data-aos-offset={(index * 100)}
                                    // data-aos-easing="ease-in-sine"
                                >
                                    <Row>
                                        <Col md={2} className="center-content">
                                            <img
                                                src={feature.image}
                                                className="feature-image"
                                                alt={"Feature " + index}
                                            />
                                        </Col>
                                        <Col md={10} className="text-left">
                                            <h4>{feature.title}</h4>
                                            <p>{feature.description}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            );
                        })
                    ) : (
                        <>
                            <Col md={6} className="feature-item">
                                <FeatureLoader />
                            </Col>
                            <Col md={6} className="feature-item">
                                <FeatureLoader />
                            </Col>
                            <Col md={6} className="feature-item">
                                <FeatureLoader />
                            </Col>
                            <Col md={6} className="feature-item">
                                <FeatureLoader />
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}
export default Features;

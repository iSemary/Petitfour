import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FeatureLoader from "../Loaders/FeatureLoader";

function Features(props) {
    return (
        <div className="my-4">
            <h3 className="text-center">What can i do best?</h3>
            <Row className="features m-auto">
                {props.features ? (
                    props.features.map((feature, index) => {
                        return (
                            <>
                                <Col
                                    md={6}
                                    key={index}
                                    className="feature-item"
                                >
                                    <Row>
                                        <Col md={2}>
                                            <img
                                                src={feature.image}
                                                className="feature-image"
                                                alt={"Feature " + index}
                                            />
                                        </Col>
                                        <Col md={10}>
                                            <h4>{feature.title}</h4>
                                            <p>{feature.description}</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </>
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
        </div>
    );
}
export default Features;

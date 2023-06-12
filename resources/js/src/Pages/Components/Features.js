import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
// import "@lottiefiles/lottie-player";

// https://assets2.lottiefiles.com/private_files/lf30_0UeVUn.json
// https://assets7.lottiefiles.com/packages/lf20_yneU269b00.json
// https://assets6.lottiefiles.com/packages/lf20_nu6b3cp8.json
// https://assets4.lottiefiles.com/packages/lf20_nzz1mpo2.json
// https://assets2.lottiefiles.com/packages/lf20_gvzjzuar.json
// https://assets1.lottiefiles.com/packages/lf20_7umaoz1z.json

function Features(props) {
    return (
        <>
            <h3 className="text-center">What can i do best?</h3>
            <Row className="m-auto">
                {props?.features?.map((feature, index) => {
                    return (
                        <>
                            <Col md={6} key={index}>
                                <Row>
                                    <Col md={2}>
                                        <lottie-player
                                            autoplay
                                            loop
                                            mode="normal"
                                            src=""
                                        ></lottie-player>
                                    </Col>
                                    <Col md={10}>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </>
                    );
                })}
            </Row>
        </>
    );
}
export default Features;

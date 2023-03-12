import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { FiSend } from "react-icons/fi";

function Connect() {
    const [submit, setSubmit] = useState(false);
    const [formValues, setFormValues] = useState([]);

    const Subjects = [
        {
            id: 1,
            name: "Project",
        },
        {
            id: 2,
            name: "Vacancy Job",
        },
        {
            id: 3,
            name: "Per Hour",
        },
    ];

    const handleSubmit = (e) => {
        alert(JSON.stringify(formValues, null, 2));
        setSubmit(false);
    };
    return (
        <Container>
            <div className="main-content">
                <Row>
                    <Col md={6}>
                        <h1>Any place in your app!</h1>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter full name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Subject</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="">
                                        Select your subject
                                    </option>
                                    {Subjects?.map((Subject, i) => (
                                        <option value={Subject.id} key={i}>
                                            {Subject.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicSubject"
                            >
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="Leave a comment here"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                <FiSend /> Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>Image</Col>
                </Row>
            </div>
        </Container>
    );
}

export default Connect;

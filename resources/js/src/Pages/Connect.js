import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { FiSend } from "react-icons/fi";
import axios from "axios";

function Connect() {
    const [submit, setSubmit] = useState(false);
    const [formValues, setFormValues] = useState([]);
    const MAX_MESSAGE_LENGTH = 5000;
    const Subjects = [
        {
            id: 1,
            name: "Project",
        },
        {
            id: 2,
            name: "Opportunity",
        },
        {
            id: 3,
            name: "Per Hour",
        },
        {
            id: 4,
            name: "Question",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Make the HTTP request using Axios
        axios
            .post(`${process.env.REACT_APP_API_URL}/contact`, formValues)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        setSubmit(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "message" && value.length >= 5001) {
            return false;
        }

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <Container>
            <div className="main-content">
                <Row>
                    <Col md={6}>
                        <div className="contact-form">
                            <h1>Let's connect now 🪄</h1>
                            <p>
                                I'm thrilled that you'd like to get in touch
                                with me. If you have any questions,
                                opportunities, or simply want to connect, please
                                feel free to reach out using any of the methods
                                below:
                            </p>
                            <Form method="POST" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        What's your awesome <b>name</b>?
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={handleChange}
                                        value={formValues.name}
                                        name="name"
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        Where can I reach you? (Your{" "}
                                        <b>email</b>, please!)
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        onChange={handleChange}
                                        name="email"
                                        value={formValues.email}
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>
                                        What's on your mind? Give me a{" "}
                                        <b>subject</b> hint!
                                    </Form.Label>
                                    <Form.Select
                                        onChange={handleChange}
                                        value={formValues.subject}
                                        name="subject"
                                    >
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
                                    <Form.Label>
                                        Tell me all about it! I'm eager to hear
                                        your <b>message</b> from you.
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        onInput={handleChange}
                                        value={formValues.message}
                                        name="message"
                                        placeholder="Share your thoughts, questions, or ideas here."
                                    />
                                    <div>
                                        {formValues.message
                                            ? formValues.message.length
                                            : "0"}
                                        /{MAX_MESSAGE_LENGTH}
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    <FiSend /> Send your awesome message!
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col md={6}>Image</Col>
                </Row>
            </div>
        </Container>
    );
}

export default Connect;

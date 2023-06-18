import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { FiSend } from "react-icons/fi";
import AxiosConfig from "../config/AxiosConfig";
import LottieLoader from "./Loaders/LottieLoader";
import SquareLoader from "./Loaders/SquareLoader";

function Connect(props) {

    const [imageLoading, setImageLoading] = useState(true);

    // 0 -> Available
    // 1 -> Sending
    // 2 -> Success
    // 3 -> Failed

    const formRef = useRef(null);
    const loadingRef = useRef(null);
    const successRef = useRef(null);

    const [formStatus, setFormStatus] = useState(0);

    const initialForm = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const formRules = [
        "required|text",
        "required|email",
        "required",
        "required|text|max:5000",
    ];

    const errors = {};

    const [submit, setSubmit] = useState(false);
    const [formValues, setFormValues] = useState(initialForm);

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

    /**
     * The function validates form fields based on specified rules and returns any errors encountered.
     * @param e - The parameter `e` is not used in the `validateForm` function, so it is not necessary and
     * can be removed.
     * @returns The function `validateForm` returns an object `errors` if there are any validation errors,
     * otherwise it returns `false`.
     */
    const validateForm = (e) => {
        // Perform form field validations
        formRules.forEach((rule, index) => {
            const [required, fieldType, ...options] = rule.split("|");

            if (required === "required") {
                // Check if the field is empty
                if (formValues[fieldType] === "") {
                    errors[fieldType] = `${fieldType} is required.`;
                    return; // Exit the current iteration
                }
            }

            if (fieldType === "email") {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // Check if the email is valid
                if (!emailPattern.test(formValues.email)) {
                    errors.email = "Please enter a valid email address.";
                    return; // Exit the current iteration
                }
            }

            if (fieldType === "numbers") {
                // Check if the field contains only numbers
                const numberPattern = /^[0-9]+$/;
                if (!numberPattern.test(formValues[fieldType])) {
                    errors[
                        fieldType
                    ] = `${fieldType} should only contain numbers.`;
                    return; // Exit the current iteration
                }
            }

            if (options[0] === "max") {
                // Check if the field exceeds the specified character limit
                const maxLimit = parseInt(options[1], 10);
                if (formValues[fieldType].length > maxLimit) {
                    errors[
                        fieldType
                    ] = `${fieldType} should not exceed ${maxLimit} characters.`;
                    return; // Exit the current iteration
                }
            }
        });

        // Check if there are any validation errors
        if (Object.keys(errors).length > 0) {
            return errors;
        } else {
            return false;
        }
    };

    const formLoader = (display) => {
        loadingRef.current.style.display = display;
    };

    const formSuccess = () => {
        successRef.current.style.display = "block";
        setTimeout(() => enableFormInputs(), 4000);
    };

    // Disable all form inputs
    const disableFormInputs = () => {
        formRef.current
            .querySelectorAll("input, select, textarea, button")
            .forEach((element) => (element.disabled = true));

        // Set form as sending status
        setFormStatus(1);
    };

    // Enable all form inputs
    const enableFormInputs = () => {
        formRef.current
            .querySelectorAll("input, select, textarea, button")
            .forEach((element) => (element.disabled = false));

        // Set form as SUCCESS status
        successRef.current.style.display = "none";
        setFormStatus(2);
    };

    /**
     * The function clears form inputs by setting their values to an initial state.
     * @param e - The parameter "e" is likely an event object that is passed as an argument to the
     * function. However, in the given code snippet, it is not being used.
     */
    const clearFormInputs = (e) => {
        setFormValues(initialForm);
    };

    /**
     * This function handles form submission by sending a POST request to a server using Axios and logs the
     * response or error.
     * @param e - The `e` parameter is an event object that is passed to the `handleSubmit` function when
     * the form is submitted. It contains information about the event, such as the target element, the type
     * of event, and any data associated with the event. In this case, the `e.preventDefault()` method
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form
        validateForm();
        // disable all form inputs
        disableFormInputs();
        // Show loading and disable form inputs
        formLoader("block");
        // Store the requested data
        AxiosConfig.post(`/contact`, formValues)
            .then((response) => {
                clearFormInputs();
                formLoader("none");
                formSuccess();
            })
            .catch((error) => {
                console.log(error);
                setFormStatus(3);
            });

        setSubmit(false);
    };

    /**
     * The function handles changes in form input values and limits the length of the "message" input to
     * 5000 characters.
     * @param e - The parameter `e` is an event object that is passed to the `handleChange` function when
     * an event (such as a change in input value) occurs. It contains information about the event, such as
     * the target element that triggered the event and the new value of the element.
     * @returns If the `name` property of the input element is "message" and the length of the `value`
     * property is greater than or equal to 5001, then `false` is being returned. Otherwise, the
     * `setFormValues` function is being called to update the state with the new `name` and `value`
     * properties.
     */
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
            <div className="contact-container">
                <Row>
                    <Col md={6} className="contact-image-container">
                        <div className="contact-form">
                            <h1>Let's connect now 🪄</h1>
                            <p>
                                I'm thrilled that you'd like to get in touch
                                with me. If you have any questions,
                                opportunities, or simply want to connect
                            </p>

                            <div className="contact-form-container">
                                <Form
                                    method="POST"
                                    ref={formRef}
                                    className={
                                        formStatus === 1
                                            ? "disabled"
                                            : "enabled"
                                    }
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Group className="mb-2">
                                        <Form.Label>
                                            What's your awesome <b>name</b>?
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={handleChange}
                                            value={formValues.name}
                                            name="name"
                                            required
                                            placeholder="Enter your name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>
                                            Where can I reach you? (Your{" "}
                                            <b>email</b>, please!)
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            onChange={handleChange}
                                            name="email"
                                            required
                                            value={formValues.email}
                                            placeholder="Enter your email"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>
                                            What's on your mind? Give me a{" "}
                                            <b>subject</b> hint!
                                        </Form.Label>
                                        <Form.Select
                                            onChange={handleChange}
                                            value={formValues.subject}
                                            name="subject"
                                            required
                                        >
                                            <option value="">
                                                Select your subject
                                            </option>
                                            {Subjects?.map((Subject, i) => (
                                                <option
                                                    value={Subject.id}
                                                    key={i}
                                                >
                                                    {Subject.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-2">
                                        <Form.Label>
                                            Tell me all about it! I'm eager to
                                            hear your <b>message</b> from you.
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            onInput={handleChange}
                                            value={formValues.message}
                                            name="message"
                                            required
                                            placeholder="Share your thoughts, questions, or ideas here."
                                        />
                                        <div>
                                            {formValues.message
                                                ? formValues.message.length
                                                : "0"}
                                            /{MAX_MESSAGE_LENGTH}
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="text-right">
                                        <Button variant="primary" type="submit">
                                            <FiSend /> Send your awesome
                                            message!
                                        </Button>
                                    </Form.Group>
                                </Form>

                                <div
                                    className="contact-form-loader"
                                    ref={loadingRef}
                                >
                                    <LottieLoader
                                        jsonPath={
                                            "https://assets4.lottiefiles.com/packages/lf20_x62chJ.json"
                                        }
                                    />
                                </div>
                                <div
                                    className="contact-form-success"
                                    ref={successRef}
                                >
                                    <LottieLoader
                                        jsonPath={
                                            "https://assets10.lottiefiles.com/private_files/lf30_nsqfzxxx.json"
                                        }
                                        loop={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        md={6}
                        className="overflow-hidden contact-image-container"
                    >
                        {/* {props.config?.contact_image ? (
                            <img
                                className="contact-image"
                                src={props.config.contact_image}
                                alt="Contact"
                            />
                        ) : (
                            <SquareLoader
                                width={1000}
                                height={1000}
                                radius={10}
                            />
                        )} */}

                        {/* Show image loader until the image is totally loaded */}
                        {imageLoading && (
                            <SquareLoader width={1000} height={1000} radius={10} />
                        )}
                        {/* Hide / Show image based on the status of the image (Loaded or not) */}
                        {
                            props?.config?.contact_image &&
                            <img
                                variant="top"
                                style={imageLoading ? { display: "none" } : {}}
                                className="card-img-top"
                                onLoad={() => setImageLoading(false)}
                                src={props.config.contact_image}
                                alt="blog"
                            />
                        }
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Connect;

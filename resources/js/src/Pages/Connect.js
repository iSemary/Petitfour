import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Connect() {
    const [submit, setSubmit] = useState(false);
    const [formValues, setFormValues] = useState([]);

    const handleSubmit = (e) => {
        alert(JSON.stringify(formValues, null, 2));
        setSubmit(false);
    };
    return (
        <div className="main-content">
            <h1>Any place in your app!</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={(formValues) => {
                    const errors = {};
                    if (!formValues.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            formValues.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ submit }) => (
                    <Form>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={submit}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Connect;

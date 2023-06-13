import React from "react";
import { Container } from "react-bootstrap";
function NotFound({ image }) {
    return (
        <Container>
            <div className="not-found-content">
                <img src={image} className="not-found" alt="not found" />
                <h1>
                     404 | Page Not Found
                </h1>
                <p>
                    Oops! The page you are looking for, not where you think it
                    is.
                </p>
            </div>
        </Container>
    );
}

export default NotFound;

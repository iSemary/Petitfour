import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/navbar";

function Header() {
    return (
        <Navbar>
            <Row>
                <Col>
                    <Col md={12}>{process.env.REACT_APP_NAME}</Col>
                </Col>
                <Col>
                    <Col md={4}>Home</Col>
                    <Col md={4}>Skills</Col>
                    <Col md={4}>Projects</Col>
                </Col>
            </Row>
        </Navbar>
    );
}

export default Header;

import Form from 'react-bootstrap/Form'
import {Row, Col} from 'react-bootstrap'

function Contact() {
    return (
        <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
        </Form>
    );
}

export default Contact;
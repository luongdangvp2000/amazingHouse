import { Button, Modal } from 'react-bootstrap';
import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from 'react-bootstrap'
import './css/SignUpForm.css'

function SignUpForm() {
    return (
        <>
            <Container className="pt-5 mt-5">
                <Row>
                    <Col>
                        <h3>Sign Up</h3>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>CMT/CMND</Form.Label>
                                <Form.Control type="text" placeholder="Enter your code" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter your address" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Number Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter your number" />

                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" block>Register</Button>
                        </Form>
                    </Col>
                    <Col>
                        <img src="./images/background-signup.jpeg" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignUpForm;
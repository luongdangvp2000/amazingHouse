import { Button, Modal } from 'react-bootstrap';
import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from 'react-bootstrap'
import './css/LogInForm.css'

function LogInForm() {

  return (

    <Container className="mt-5 pt-5">
      <div className="bg-white mt-5 pt-5"></div>
      <Row>
        <Col className="col-md-6 mb-3">
          <img src="./images/img-login.svg" className="img-fluid" alt="" />
        </Col>
        <Col className="col-md-6">
          <h3 className="login-text mb-3">Log In</h3>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" block>Log In</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  );

}

export default LogInForm;
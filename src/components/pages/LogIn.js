import { Button, Modal } from 'react-bootstrap';
import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form'

function LogIn() {

  return (
    <div>
      <h3>Log In</h3>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>

  );

}

export default LogIn;
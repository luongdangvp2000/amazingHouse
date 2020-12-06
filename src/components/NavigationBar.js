import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';
import {Tabs, Tab} from 'react-bootstrap'
import Home from '../components/pages/Home'
import AboutUs from './pages/AboutUs'
import {BrowserRouter as Router, Link} from 'react-router-dom';

function NavigationBar() {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand className="col-8" href="#">House For U <i className="fas fa-home"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />


      <Navbar.Collapse id="responsive-navbar-nav" className="col-4" xs="auto" md="auto">
        <Nav className="mr-auto">
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/">Home</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/aboutus">About us</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light"><Nav.Link className="nav-link" to="">Contact</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light" onClick={() => setLoginShow(true)} onClick={() => setLoginShow(true)}><Nav.Link className="nav-link">Login</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-lgiht" onClick={() => setSignupShow(true)}><Nav.Link className="nav-link">Sign up</Nav.Link></button></Nav.Item>
        </Nav>
      </Navbar.Collapse>

      <Modal className="nav-item" show={loginShow} onHide={() => setLoginShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label for="email-login">Email</label>
            <input type="text" class="form-control" id="email-login" />
          </div>
          <div className="form-group">
            <label for="password-login">Password</label>
            <input type="password" class="form-control" id="password-login" />
          </div>
        </Modal.Body>
        <Modal.Footer >
          <Col xs={4} md={8}><button type="submit" className="btn btn-success btn-lg text-center">Login</button></Col>
        </Modal.Footer>
      </Modal>

      <Modal className="nav-item" show={signupShow} onHide={() => setSignupShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label for="name-login">Name:</label>
            <input type="text" className="form-control" id="name-login" />
          </div>
          <div className="form-group">
            <label for="id-code-person">Id Code</label>
            <input type="text" className="form-control" id="id-code-person" />
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="form-group">
            <label for="number-phone">Number Phone</label>
            <input type="text" className="form-control" id="number-phone" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="Email" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Col xs={4} md={8}><div><Button className="btn btn-success btn-lg">Sign Up</Button></div></Col>
        </Modal.Footer>
      </Modal>
    </Navbar >
  );
}

export default NavigationBar;
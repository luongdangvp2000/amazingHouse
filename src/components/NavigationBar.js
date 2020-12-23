import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/NavigationBar.css';
import { Tabs, Tab } from 'react-bootstrap'
import Home from '../components/pages/Home'
import AboutUs from './pages/AboutUs'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import LogIn from './pages/LogIn'

function NavigationBar() {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand className="col-8" href="#">House For U <i className="fas fa-home"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className="col-4" xs="auto" md="auto">
        <Nav className="mr-auto">
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/">Home</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/aboutus">About us</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/contact">Contact</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/login">Login</Nav.Link></button></Nav.Item>
          <Nav.Item><button className="btn btn-light"><Nav.Link as={Link} className="nav-link" to="/signup">Sign up</Nav.Link></button></Nav.Item>
        </Nav>
      </Navbar.Collapse>

    
    </Navbar >
  );
}

export default NavigationBar;
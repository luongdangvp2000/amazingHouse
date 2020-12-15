import React, { Component } from 'react'
import './HeroSection.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-child">
                <h1 className="introduce">Welcome</h1>
                <p className="introduce">Let's rent a house for you</p>
                <Row>
                    <Col sm={9}>
                        <input className="form-control mr-sm-2" size="50" type="search" placeholder="Search your location" aria-label="Search" />
                    </Col>
                    <Col sm={3}>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col sm>
                        <Dropdown>
                            <Dropdown.Toggle as={Button} className="btn btn-light btn-block">Province</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col sm>
                        <Dropdown>
                            <Dropdown.Toggle as={Button} className="btn btn-light btn-block">District</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col sm>
                        <Dropdown>
                            <Dropdown.Toggle as={Button} className="btn btn-light btn-block">Street</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HeroSection; 

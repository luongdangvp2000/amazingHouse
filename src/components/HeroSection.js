import React, { Component } from 'react'
import './HeroSection.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import Button from 'react-bootstrap/Button'


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-child">
                <div>
                    <h1 className="introduce">Welcome</h1>
                    <p className="introduce">Let's rent a house for you</p>
                    <form className="form-inline my-2 my-lg-0 text-center" id="search-bar">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search your location" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                <div className="dropdown-group">
                    <Dropdown className="col-4">
                        <Dropdown.Toggle as={Button} className="btn btn-light btn-block">Province</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="col-4">
                        <Dropdown.Toggle as={Button} className="btn btn-light btn-block">District</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="col-4">
                        <Dropdown.Toggle as={Button} className="btn btn-light btn-block">Street</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>




        </div>
    );
}

export default HeroSection; 

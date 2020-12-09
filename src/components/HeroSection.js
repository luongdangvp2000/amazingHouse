import React, { Component } from 'react'
import './HeroSection.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-child">
                <h1 className="introduce">Welcome</h1>
                <p className="introduce">Let's rent a house for you</p>
                <form className="form-inline my-2 my-lg-0 text-center" id="search-bar">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search you address" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle >
                        
                    </Dropdown.Toggle>
                </Dropdown>

            </div>
            

        </div>
    );
}

export default HeroSection; 

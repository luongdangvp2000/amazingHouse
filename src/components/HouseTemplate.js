import './css/HouseTemplate.css'
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


function HouseTemplate() {
    return (
        <>
            <Container className="house-container mt-5">
                <Row>
                    
                    <h1 className="text-content">HOUSE TEMPLATE</h1>
                    <Col>
                        <Row className="garden-house">
                            <Col><Image className="gardenHouse-img" src='/images/gardenHouse.jpg' alt="gardenHouse" thumbnail /></Col>
                            <Col className="">
                                <h3>Garden House</h3>
                                <p>Trapped in the chaos of daily life and chores, most urban dwellers long for a place to find peace of mind and return to nature. As it is hard to find such a place in megacities, gardening house offers nature lovers a chance to take up gardening in the comfort of your own home</p>
                            </Col>
                        </Row>

                        <Row className="apartment mt-3">
                            <Col className="">
                                <h3>Apartment</h3>
                                <p>Nowaday, apartment is one of the most choices to live. Living in an apartment is great, but it can sometimes be a bit of a struggle when it comes to finding enough space for all your stuff.</p>
                            </Col>
                            <Col><Image className="apartment-img" src='/images/apartment.jpg' alt="apartment" thumbnail /></Col>
                        </Row>

                        <Row className="mini-apartment mt-3">
                            <Col><Image className="mini-apartment-img" src="/images/miniApartment.jpg" alt="mini-partment" thumbnail /></Col>
                            <Col className="">
                                <h3>Mini Apartment</h3>
                                <p>Mini Apartment is a new trending of young living style. A big part of young people such as student, single person, ... usually choose this living style cause it's cheap and convenient</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HouseTemplate;
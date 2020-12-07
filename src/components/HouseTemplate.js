import './HouseTemplate.css'
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


function HouseTemplate() {
    return (
        <>
            <h1 className="text-center">House Template</h1>
            <Container>
                <Row className="gardenHouse">
                    <Col><Image className="gardenHouse-img" src='/images/gardenHouse.jpg' alt="gardenHouse" thumbnail /></Col>
                    <Col>
                        <p>Trapped in the chaos of daily life and chores, most urban dwellers long for a place to find peace of mind and return to nature. As it is hard to find such a place in megacities, gardening house offers nature lovers a chance to take up gardening in the comfort of your own home</p>
                    </Col>
                </Row>
                <Row className="aparment">
                    <Col>
                        <p>Nowaday, apartment is one of the most choices to live. Living in an apartment is great, but it can sometimes be a bit of a struggle when it comes to finding enough space for all your stuff.</p>
                    </Col>
                    <Col><Image className="apartment-img" src='/images/apartment.jpg' alt="apartment" thumbnail /></Col>
                </Row>
                <Row className="miniApartment">
                    <Col><Image className="miniApartment-img" src="/images/miniApartment.jpg" alt="miniApartment" thumbnail /></Col>
                    <Col>
                        <p>Mini Apartment is a new trending of young living style. A big part of young people such as student, single person, ... usually choose this living style cause it's cheap and convenient</p>
                    </Col>
                </Row>

            </Container>

        </>
    );
}

export default HouseTemplate;
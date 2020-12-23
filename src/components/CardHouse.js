import './css/CardHouse.css'
import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap'
import { CardColumns, CardDeck } from 'react-bootstrap'


function CardHouse() {
    return (
        <>
            <Container className="mt-2">
                <h1 className="title">House for rent</h1>
                <Row className="apartment">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./images/miniApartmentRent1.jpeg" />
                            <Card.Body>
                                <Card.Title href="#">Apartment</Card.Title>
                                <Card.Text>200<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                                <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Pham Van Dong Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                                <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./images/miniApartmentRent2.jpeg" />
                            <Card.Body>
                                <Card.Title href="#">Apartment</Card.Title>
                                <Card.Text>250<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                                <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Ho Tung Mau Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                                <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./images/miniApartmentRent3.jpeg" />
                            <Card.Body>
                                <Card.Title href="#">Apartment</Card.Title>
                                <Card.Text>300<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                                <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Cau Giay Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                                <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="house">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="./images/houseRent1.jpg" />
                            <Card.Body>
                                <Card.Title href="#">4 floors house</Card.Title>
                                <Card.Text>200<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                                <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Pham Van Dong Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                                <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img className="h-100" variant="top" src="./images/houseRent2.jpg" />
                            <Card.Body>
                                <Card.Title href="#">3 floors house</Card.Title>
                                <Card.Text>250<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                                <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Ho Tung Mau Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                                <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>

                        <Card>
                            <Card.Img variant="top" src="./images/houseRent3.jpg" />
                            <Card.Body>
                                <Card.Title href="#">3 floors house (Near VietNam National University)</Card.Title>
                                <Card.Text>300<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                                <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Cau Giay Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                                <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
        </>
    );
}

export default CardHouse;
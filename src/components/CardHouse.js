import './css/CardHouse.css'
import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


function CardHouse() {
    return (
        <>
            <h1>House for rent</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="./images/miniApartmentRent1.jpeg" />
                    <Card.Body>
                        <Card.Title href="#">Mini Apartment</Card.Title>
                        <Card.Text>200<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                        <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Pham Van Dong Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                        <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="./images/miniApartmentRent2.jpeg" />
                    <Card.Body>
                        <Card.Title href="#">Mini Apartment</Card.Title>
                        <Card.Text>250<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                        <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Ho Tung Mau Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                        <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="./images/miniApartmentRent3.jpeg" />
                    <Card.Body>
                        <Card.Title href="#">Mini Apartment</Card.Title>
                        <Card.Text>300<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                        <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Cau Giay Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                        <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="./images/miniApartmentRent3.jpeg" />
                    <Card.Body>
                        <Card.Title href="#">Mini Apartment</Card.Title>
                        <Card.Text>300<i class="fas fa-dollar-sign"></i> / Per Month</Card.Text>
                        <Card.Text><i className="fas fa-map-marker-alt pr-2"></i>Cau Giay Street,Cau Giay District, Hanoi, VietNam</Card.Text>
                        <Card.Text><i className="fas fa-phone pr-2"></i>+84352156529</Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>
        </>
    );
}

export default CardHouse;
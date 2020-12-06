import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import './CardIntro.css'

function CardIntro() {
    return (
        <div>
            <h1>Our Team</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="./images/Dang.jpg" />
                    <Card.Body>
                        <Card.Title>Luong Ngoc Dang</Card.Title>
                        <Card.Text>Front-End Developer</Card.Text>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                        <Button><Card.Link href="#">Contact</Card.Link></Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Vu Van Thang</Card.Title>
                        <Card.Text>Back-End Developer</Card.Text>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                        <Button><Card.Link href="#">Contact</Card.Link></Button>
                    </Card.Body>

                </Card>

                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Hoang Trung Dung</Card.Title>
                        <Card.Text>Data Scientist</Card.Text>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                    </Card.Text>
                        <Button><Card.Link href="#">Contact</Card.Link></Button>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
}

export default CardIntro;
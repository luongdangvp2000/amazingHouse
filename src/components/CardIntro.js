import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import './CardIntro.css'

function CardIntro() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Luong Ngoc Dang</Card.Title>
                    <Card.Text>Front-End Developer</Card.Text>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text><Button className="btn btn-info">Contact</Button></Card.Text>

                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Vu Van Thang</Card.Title>
                    <Card.Text>Back-End Developer</Card.Text>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text><Button className="btn btn-info">Contact</Button></Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Hoang Trung Dung</Card.Title>
                    <Card.Text>Data-Scientist</Card.Text>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    <Card.Text><Button className="btn btn-info">Contact</Button></Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    );
}

export default CardIntro;
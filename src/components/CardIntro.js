import Card from 'react-bootstrap/Card'
import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import './css/CardIntro.css'

function CardIntro() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Luong Ngoc Dang</Card.Title>
                    <Card.Text>Front-End Developer</Card.Text>
                    <Card.Text>Make our life better is my happiness.</Card.Text>
                    <Card.Text>luongdangvp2000@gmail.com</Card.Text>
                    <Card.Text><Button className="btn btn-info">Contact</Button></Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Vu Van Thang</Card.Title>
                    <Card.Text>Back-End Developer</Card.Text>
                    <Card.Text>Always try our best for u.</Card.Text>
                    <Card.Text>vuvanthang@gmail.com</Card.Text>
                    <Card.Text><Button className="btn btn-info">Contact</Button></Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Hoang Trung Dung</Card.Title>
                    <Card.Text>Data-Scientist</Card.Text>
                    <Card.Text>Take many best choices for everyone.</Card.Text>
                    <Card.Text>hoangtrungdung@gmail.com</Card.Text>
                    <Card.Text><Button className="btn btn-info">Contact</Button></Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    );
}

export default CardIntro;
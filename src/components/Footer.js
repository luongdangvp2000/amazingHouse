import './css/Footer.css'
import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <div className="footer-container">
                <Row className="text-center pt-2">
                    <Col className="copyright col-xs-12 col-sm-3 col-sm-pull-6">
                        <h1>House For U</h1>
                        <p> &copy; Welcome to our website </p>
                    </Col>
                    <Col className="pt-2">
                        <p>Bring good things to u</p>
                        <p>Happy to enjoy our product</p>
                    </Col>
                    <Col className="link-icon">
                        <ul>
                            <li><a href="https://www.facebook.com/dangvp2000"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/luongdang2000/"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-google"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Footer;
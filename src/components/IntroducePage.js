import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './css/IntroducePage.css'

function IntroducePage() {
    return (
        <Jumbotron>
            <div className="text-center">
                <br />
                <h1 >About Us</h1>
                <p>We try to build a website for everyone to rent house. Helping many people make us feel very happy and meaningful. Day by day, we are together to make our life more beautiful.</p>
            </div>
        </Jumbotron>
    );
}

export default IntroducePage;
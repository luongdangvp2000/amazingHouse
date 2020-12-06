import React, { Component } from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import IntroducePage from '../IntroducePage'
import CardIntro from '../CardIntro'

function AboutUs() {
    return (
       <>
            <IntroducePage />
            <CardIntro />
       </>
    );
}

export default AboutUs;
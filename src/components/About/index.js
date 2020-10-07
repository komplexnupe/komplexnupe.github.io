import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap';
import './style.css';


const About = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        handleShow();
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
     
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col xs={4} md={2}>
                        <Image src={require('../../images/LL-Profile.jpg')} roundedCircle style={{
                            height:125,
                            width: 100
                        }}/>
                    </Col>
                    <Col xs={8} md={8} className="ml-3">
                        I am a Husband, a Father of 2 beautiful girls, a native Charlottean, and a former collegiate football player at Appalachian State where
                    I was on all 3 national championship teams.<br/><br/>
                        Everyone has their "Why" when it comes to what led them down the path of engineering. As a non-developing founder of a startup, I invested a lot of money in outsourcing engineering for a MVP, which led me to ask myself..."why can't I code my own projects?"
                        That question burned at me for a long time and made me want to dive under the hood and into the code to understand how I could learn how to build solutions for myself and others. That dive led me to UNCC's Boot Camp 
                        was the best decision I've ever made because I have found something that I truly love to do. Solving a problem or finding a bug is like intercepting a pass or scoring a touchdown! Having people use something that I built is equivalent
                        to having an entire stadium cheering for you. Simply put, I love to code.</Col></Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
         
    );
}


export default About;

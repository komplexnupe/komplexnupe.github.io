import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const TeamProjects = () => {
    return(
      <div className="container">
      <h2>App Projects Preview</h2>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../images/fitLinkWelcome.png')}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../images/CockTellMe.gif')}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    );
}


export default TeamProjects;
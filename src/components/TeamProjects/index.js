import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const TeamProjects = () => {
    return(
      <div className="container-sm container-md container-xl">
      <h2>App Projects Preview</h2>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src={require('../../images/fitLink-demo.gif')}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block"
      src={require('../../images/CockTellMe.gif')}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
</div>
    );
}


export default TeamProjects;
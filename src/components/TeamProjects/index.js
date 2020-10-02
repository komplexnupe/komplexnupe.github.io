import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const TeamProjects = () => {
    return(
      <div className="container">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../images/fitLinkWelcome.png')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>fitLink</h3>
      <p>Not sure how to stay socially fit? fitLink lets you see where all of the outdoor LinkUps are during the pandemic!</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../../images/CockTellMe.gif')}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>CockTellMe</h3>
      <p>Stuck ordering the same drinks or don't know what cocktails to try? Take our personality test and get paired with a delicious cocktail!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
}


export default TeamProjects;
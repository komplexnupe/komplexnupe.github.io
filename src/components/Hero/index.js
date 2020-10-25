import React from 'react';
import { MDBContainer } from 'mdbreact';
import './style.css';


const Hero = () => {

    return(
        <MDBContainer className="mb-5">
        <div className="hero hi">
        <h1 className="text-sm-center" style={{
            fontSize:75,
            marginBottom: -15,
        }}>
            Hi, I'm Leonard
        </h1>
        </div>
        <div>
        <p style={{color: "#dc7928"}}>
            <b>{`< full stack web developer />`}</b>
        </p>
        </div>
        </MDBContainer>
    )
}

export default Hero;
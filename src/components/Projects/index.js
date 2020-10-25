import React from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import './style.css'


const Projects = () => {
  return (
    <section id="projects" style={{ marginTop: 150, marginBottom: 150 }}>
      <MDBRow className="mb-4">
      <MDBCol></MDBCol>
      <MDBCol className="blue-gradient" md="5">
      <h1 className="text-white text-center">My Work</h1>
      </MDBCol>
      <MDBCol></MDBCol>
      </MDBRow>
      <MDBRow className="text-center ml-1 mr-1">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={require('../../images/cocktellme.png')}
              alt=""
              className="projectImg"
            />
            <a href="https://komplexnupe.github.io/cocktellme/"
              target="_blank" rel="noopener noreferrer">
              <MDBMask overlay="black-light" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h3 className="text-white"><i className="fab fa-js-square mr-2"></i><i className="fas fa-database"></i> Local</h3>
            <h4 className="font-weight-bold my-3">CockTellMe</h4>
            <p className="grey-text">
              A personality assessment made fun with a cocktail drink pairing at the end!
            </p>
            <MDBBtn href="https://oksimone.github.io/cocktellme/" target="_blank" rel="noopener noreferrer" className="align-self-end p-2" gradient="blue" size="sm">
              <MDBIcon far icon="clone" className="left" /> View project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={require('../../images/saint-george.png')} vbghnm
              alt=""
              className="projectImg"
            />
            <a href="https://saint-george.herokuapp.com/">
              <MDBMask overlay="black-light" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h3 className="text-white"><i className="fab fa-react mr-2"></i><i className="fab fa-node mr-2"></i><i className="fas fa-database"></i> MongoDB</h3>
            <h4 className="font-weight-bold my-3">Saint George Athleisure</h4>
            <p className="grey-text">
              A modern e-commerce site designed for fashion forward fitness enthusiasts.
            </p>
            <MDBBtn href="https://saint-george.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="align-self-end p-2" gradient="blue" size="sm">
              <MDBIcon far icon="clone" className="left" /> View project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={require('../../images/fitlink.png')}
              alt=""
              className="projectImg"
              target="_blank" rel="noopener noreferrer"
            />
            <a href="https://fitlink22.herokuapp.com/"
              target="_blank" rel="noopener noreferrer">
              <MDBMask overlay="black-light" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h3 className="text-white"><i className="fab fa-js-square mr-2"></i><i className="fab fa-node mr-2"></i><i className="fas fa-database"></i> MySQL</h3>
            <h4 className="font-weight-bold my-3">fitLink</h4>
            <p className="grey-text">
              Simple app designed to help users find socially safe outdoor fitness activities.
            </p>
            <MDBBtn href="https://fitlink22.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="align-self-end p-2" gradient="blue" size="sm">
              <MDBIcon far icon="clone" className="left" /> View project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>

  )
}


export default Projects;
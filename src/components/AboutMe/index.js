import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, MDBCardImage } from 'mdbreact';
import './style.css'

const About = () => {
    return (
        <MDBContainer className="mb-5" id="About" style={{marginTop: 500}}>
            <MDBRow>
                <MDBCol className="ml-1">
                    <MDBRow className="blue-gradient">
                        <h2 className="header w-100">Philosophy</h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol className="p-3 mt-5 mb-3 bcg"><h4>"I knew my Google-Fu would come in handy."</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="phil">
                                <MDBCol className="p-3 mb-3 bcg"><h4>Challenge yourself to learn something new, everyday.</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="phil">
                                <MDBCol className="p-3 mb-3 bcg"><h4><strong className="accent">A</strong>lways <strong className="accent">B</strong>e <strong className="accent">C</strong>oding.</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="phil">
                                <MDBCol className="p-3 mb-3 bcg"><h4>"If the plan doesn't work, change the plan, not the goal."</h4></MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="ml-2" md="6">
                    <MDBRow className="blue-gradient">
                        <h2 className="header w-100">About Me</h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="p-5" md='12'>
                            <MDBCard style={{height: 750}}>
                                <MDBCardImage
                                    hover
                                    overlay='black-light'
                                    className='card-img-top'
                                    src={require('../../images/bloc.jpg')}
                                    alt='man'
                                />

                                <MDBCardBody cascade className='text-center'>
                                    {/* <MDBCardTitle className='card-title accent'>
                                        <strong>Leonard Love</strong>
                                    </MDBCardTitle> */}

                                    <p className='font-weight-normal blue-text'>Running towards the challenge.</p>

                                    <MDBCardText>
                                    Technology continues to shape our lives in the coolest and most convenient ways. I want to be a part of and leave my mark on the future of mankind by being a part of a group
                                    of people who accepted the challenge of shifting society forward with technology. I'm excited to work with great people to build solutions of the future.{' '}
                                    </MDBCardText>

                                    <MDBCol md='12' className='d-flex justify-content-center'>

                                        {/* <MDBBtn href="https://www.linkedin.com/in/leonardlove/" hover target="_blank" rel="noopener noreferrer" rounded floating color='blue'>
                                            <MDBIcon size='lg' fab icon="linkedin"></MDBIcon>
                                        </MDBBtn>

                                        <MDBBtn href="https://github.com/komplexnupe" target="_blank" rel="noopener noreferrer" rounded floating color='blue'>
                                            <MDBIcon size='lg' fab icon='github'></MDBIcon>
                                        </MDBBtn> */}
                                      
                                    </MDBCol>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="ml-2">
                    <MDBRow className="blue-gradient">
                        <h2 className="header w-100">Skills</h2>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBRow>
                                <MDBCol className="p-3 mt-5 mb-3 bcg"><h4><strong>Front:</strong><br />
                                JavaScript, HTML, CSS</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="skill">
                                <MDBCol className="p-3 mb-3 bcg"><h4><strong>Back:</strong><br />
                                Node, REST, JSON</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="skill">
                                <MDBCol className="p-3 mb-3 bcg"><h4><strong>Databases:</strong><br />
                                MySQL, MongoDB</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="skill">
                                <MDBCol className="p-3 mb-3 bcg"><h4><strong>Libraries/Frameworks:</strong><br />
                                React, jQuery, Express, NPM, Yarn, Bootstrap</h4></MDBCol>
                            </MDBRow>
                            <MDBRow className="skill">
                                <MDBCol className="p-3 mb-3 bcg"><h4><strong>Other:</strong><br />
                                Object Oriented Programming, GIT version control, Agile, MVC, Heroku, Chrome Dev Tools, CLI</h4></MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>


        </MDBContainer>

    )
}

export default About;
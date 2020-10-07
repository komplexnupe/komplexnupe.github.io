import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

const MiniProjects = (props) => {
    return (
        <>
        <Card className="col-md-3 col-xs-2 card ml-5 mb-3" style={{ width: '18rem' }}>
            <Card.Img className="m-auto" variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.technology}
                </Card.Text>
                <Button variant="outline-secondary" href={props.url} className="mt-auto" target="_blank" rel="noopener noreferrer">View Demo</Button>
            </Card.Body>
        </Card>
        </>
    );
}

export default MiniProjects;
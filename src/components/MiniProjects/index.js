import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

const MiniProjects = (props) => {
    return (
        <Card className="col-3 card ml-5 mb-3" style={{ width: '18rem' }}>
            <Card.Img className="m-auto" variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.technology}
                </Card.Text>
                <Button variant="danger" href={props.url} className="btn btn-danger mt-auto" target="_blank" rel="noopener noreferrer">View Demo</Button>
            </Card.Body>
        </Card>
    );
}

export default MiniProjects;
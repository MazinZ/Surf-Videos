import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
import './styles/Preview.css';

export default function Preview(props) {

    return (
      <Col xs={6} md={4}>
        <Thumbnail alt={props.title} src={props.thumbnail}>
          <h4 className="title"> {props.title} </h4>
          <p className="description"> {props.description} </p>
          <a href={'/videos/' + props.id}> Play </a>
          </Thumbnail>
      </Col>
    )
}
import React, { Component } from 'react';
import './styles/Preview.css';

export default function Preview(props) {

    return (
      <div className="preview">
        <a href={'/videos/' + props.id} />
        <img alt={props.title} src={props.thumbnail} />
        <p> {props.title} </p>
        <p> {props.description} </p>
      </div>
    )
}
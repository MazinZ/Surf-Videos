import React, { Component } from 'react';
import './styles/Preview.css';

export default class Preview extends Component {

  render () {
    return (
      <div className="preview">
        <a href={'/videos/' + this.props.id} />
        <img alt={this.props.title} src={this.props.thumbnail} />
        <p> {this.props.title} </p>
        <p> {this.props.description} </p>
      </div>
    )
  }
}
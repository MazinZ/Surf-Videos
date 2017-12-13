import React, { Component } from 'react';


export default class Preview extends Component {

  render () {
    return (
      <div className="preview">
        <img src={this.props.thumbnail} />
        <p> {this.props.title} </p>
        <p> {this.props.description} </p>
      </div>
    )
  }

}
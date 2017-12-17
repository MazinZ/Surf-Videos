import React, { Component } from 'react';
import VideoBrowser from './components/surf-youtube/VideoBrowser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1> Surf Videos </h1>
        <VideoBrowser topic='surf' apiKey='AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo'/>
      </div>
    );
  }
}

export default App;

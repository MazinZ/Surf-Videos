import React, { Component } from 'react';
import VideoBrowser from './components/surf-youtube/VideoBrowser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VideoBrowser apiKey='AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo'/>
      </div>
    );
  }
}

export default App;

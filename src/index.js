import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import YoutubePlayer from './components/surf-youtube/Player';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/videos/:videoId/" component={YoutubePlayer}/>
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();

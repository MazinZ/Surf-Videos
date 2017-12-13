import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import YoutubePlayer from './components/surf-youtube/Player';
import VideoBrowser from './components/surf-youtube/VideoBrowser';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/videos/:videoId/" component={YoutubePlayer}/>
      <Route exact path="/search=:query&page=:page" render={(props) => <VideoBrowser 
        apiKey='AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo' {...props} /> }
      />
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();

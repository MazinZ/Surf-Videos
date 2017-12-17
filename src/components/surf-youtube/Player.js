import React from 'react';
import YouTube from 'react-youtube';
import './styles/Player.css';

export default function YoutubePlayer(props) {

    return (
      <div className='video-container'>
        <div className='center'>
          <YouTube
            videoId={props.match.params.videoId}
          />
        </div>
      </div>
    )
}
import React, { Component } from 'react';
import YouTube from 'react-youtube';

export default function YoutubePlayer(props) {

    return (
      <YouTube
        videoId={props.match.params.videoId}
      />
    )
}
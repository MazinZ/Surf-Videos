import React, { Component } from 'react';
import Preview from './Preview';

export default class VideoBrowser extends Component {
  constructor() {
    super()
    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    const testUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&q=surf'
    fetch(testUrl).then(data => {
      return data.json()
    }).then(data => {
      const videos = data.items.map((video) => {
        const snippet = video.snippet
        const thumbnail = snippet.thumbnails.medium.url
        const desc = snippet.description
        const title = snippet.title
        console.log(video)
        return (
          <Preview
            key={video.id.videoId}
            thumbnail={thumbnail}
            description={desc}
            title={title}
          />
        )
      })

      this.setState({videos: videos})
    })
  }

  render () {
    return (
      <div className="container"> 
        {this.state.videos}
      </div>
    )
  }

}


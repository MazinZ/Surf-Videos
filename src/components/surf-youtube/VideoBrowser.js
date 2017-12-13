import React, { Component } from 'react';
import Preview from './Preview';

export default class VideoBrowser extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      results: 0,
      pages: {
        next: '',
        previous: ''
      }
    }
  }

  componentDidMount() {
    const testUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.props.apiKey}&part=snippet&type=video&q=surf`
    fetch(testUrl).then(data => {
      return data.json()
    }).then(data => {
      console.log(data)
      const videos = data.items.map((video) => {
        const snippet = video.snippet
        const thumbnail = snippet.thumbnails.medium.url
        const desc = snippet.description
        const title = snippet.title
        console.log(video)
        return (
          <Preview
            id={video.id.videoId}
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


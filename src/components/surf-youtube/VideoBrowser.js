import React, { Component } from 'react';
import Preview from './Preview';

export default class VideoBrowser extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      results: 0,
      pages: {
        next: ''
      }
    }
  }

  nextPage = (e) => {
    e.preventDefault();
    console.log(this.pages.next)
  }

  loadVideos = () => {
    console.log(this.props)
    console.log(this.props.params)
  }

  componentDidMount() {
    const testUrl = `https://www.googleapis.com/youtube/v3/search?key=${this.props.apiKey}&part=snippet&type=video&q=surf`
    fetch(testUrl).then(data => {
      return data.json()
    }).then(data => {
      const resultCount = data.pageInfo.totalResults
      const nextPage = data.pageInfo.nextPageToken
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
      this.loadVideos()
      this.setState({
        videos,
        results: resultCount,
        pages: {
          next: nextPage
        }
      })
    })
  }

  render () {
    return (
      <div className="container"> 
        {this.state.videos}
        <p> 
          Showing {this.state.videos.length} of {this.state.results}
        </p>
        <a href="#" onClick={this.nextPage}> 
          More 
        </a>
      </div>
    )
  }
}

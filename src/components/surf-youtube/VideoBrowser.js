import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import { YTsearch } from '../../utils';
import Preview from './Preview';
import Searchbar from './Searchbar';

export default class VideoBrowser extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      results: 0,
      currPage: '',
      nextPage: ''
    }
  }

  goToNextPage = (e) => {
    this.loadVideos().then(data => {
      this.renderVideos(data)
    })
  }

  loadVideos = () => {
    const searchYT = YTsearch()
    searchYT.init(this.props.apiKey)

    const query = {
      'q': this.props.topic + ' ' + (this.props.match.params.query || ''),
    }

    const isPaged =  this.state.nextPage || this.props.match.params.page
    if (!!isPaged) {
      query.pageToken = isPaged
    }
    return searchYT.search(query)
  }

  renderVideos = (data) => {
    const nextPage = data.nextPageToken
    const resultCount = data.pageInfo.totalResults

    let videos = data.items.map((video) => {
      const snippet = video.snippet
      const thumbnail = snippet.thumbnails.default.url

      return (
        <Preview
          id={video.id.videoId}
          key={video.id.videoId}
          thumbnail={thumbnail}
          description={snippet.description}
          title={snippet.title}
        />
      )
    })
    console.log(videos, this.state.videos)
    videos = [...this.state.videos, ...videos]

    this.setState({
      videos,
      results: resultCount,
      nextPage
    })
  }

  componentDidMount() {
    this.loadVideos().then(data => {
      this.renderVideos(data)
    })
  }

  render () {
    return (
      <Grid>
        <h1> {this.props.match.params.query || this.props.topic} </h1>
        <Searchbar action='/search/'/>
        <Row>
          {this.state.videos}
        </Row>
        <p>
          Showing {this.state.videos.length} of {this.state.results}
        </p>
        <Link to={'/search/' + (this.props.match.params.query 
        || this.props.topic) + '/' + this.state.nextPage} 
        onClick={this.goToNextPage}>
          More 
        </Link>
      </Grid>
    )
  }
}

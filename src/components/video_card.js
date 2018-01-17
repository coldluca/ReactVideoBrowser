import React, { Component } from 'react';

class VideoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card col-md-4">
        <img className="card-img-top" src={this.props.video.snippet.thumbnails.medium.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.video.snippet.title}</h5>
          <p className="card-text">{this.props.video.snippet.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default VideoCard;
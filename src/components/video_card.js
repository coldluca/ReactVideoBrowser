import React, { Component } from 'react';

class VideoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div onClick={() => this.props.onSelectVideo(this.props.video)} className="card list-group-item">
        <img className="card-img" src={this.props.video.snippet.thumbnails.medium.url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.video.snippet.title}</h5>
        </div>
      </div>
    );
  }
}

export default VideoCard;
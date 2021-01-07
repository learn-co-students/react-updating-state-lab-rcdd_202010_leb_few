// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
  
   constructor() {
    super();

    this.state = {
    errors: [],
    user: null,
    settings: {
    bitrate: 8,
    video: {
    resolution: '1080p'
    }
  }
    };
  }


  handleClick = () => {
  this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleClick2 = () => {
 this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  };

  render() {
    return (
    <button onClick={this.handleClick} className='bitrate'></button>
    <button onClick={this.handleClick2} className='resolution'></button>
    );
  }
}
export default YouTubeDebugger;

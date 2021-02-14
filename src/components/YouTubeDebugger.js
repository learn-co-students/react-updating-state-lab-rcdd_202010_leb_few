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


  handleClickb = () => {
  this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleClickr = () => {
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
    <div>
    <button onClick={this.handleClickb} className='bitrate'></button>
    <button onClick={this.handleClickr} className='resolution'></button>
    </div>
    );
  }
}
export default YouTubeDebugger;

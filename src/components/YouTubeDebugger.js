import React, {Component} from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor(){
      super()
      this.state={ errors:[], user: null, settings:{bitrate:8, video:{resolution: '1080p'}}

      }
    }
    handleClick=()=>{
      this.setState({...this.state.settings, bitrate: 12})
    }
    handleClickc=() => {
      this.setState({...this.state.settings.video, resolution:'720p'})
    }
    
    render(){
      console.log(this.state)
      
    return(
    <div>
      <button className='bitrate' onClick={this.handleClick}>bitrate</button>
      <button className='resolution' onClick={this.handleClickc}>reso</button>
    </div>
    )
  }
}

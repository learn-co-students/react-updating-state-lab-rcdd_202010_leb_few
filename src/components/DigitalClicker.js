import React, {Component} from 'react'

export default class DigitalClicker extends Component{
  constructor(){
    super()
    this.state={timesClicked: 0}

  }

  handleclick=()=>{
    this.setState(prevState => (
      {timesClicked: prevState.timesClicked+1}
      )
      )
  }
  
  render(){
    console.log(this.state)
    return(
    <div><label>{this.state.timesClicked}</label><button onClick={this.handleclick}></button></div>
    )
  }
}
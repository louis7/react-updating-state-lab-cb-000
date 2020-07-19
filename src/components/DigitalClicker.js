// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }
  hasBeenClick = ()=> {

    this.setState ( previousState =>{
      return{
        timesClicked: previousState++
      }
    })

  }
  render(){
    return (
      <div>
      <button onClick ={this.hasBeenClick}>{this.state.timesClicked} </button>
      <p>I have been clicked {this.state.timesClicked} times</p>
      </div>
    )
  }
}
export default DigitalClicker

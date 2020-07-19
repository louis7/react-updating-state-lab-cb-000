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

    this.setState ( this.previousState =>{
      return{
        timesClicked: this.previousState++
      }
    })

  }
  render(){
    return (
      <div>
      <button onClick ={this.hasBeenClick}>{this.state.timesClicked} </button>
      </div>
    )
  }
}
export default DigitalClicker

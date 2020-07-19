// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.state = {
      clicked: 0
    }
  }
  hasBeenClick = ()=> {

    this.setState ( previousState =>{
      return{
        clicked: previousState++
      }
    })

  }
  render(){
    return (
      <div>
      <button onClick ={this.hasBeenClick}>click me </button>
      <p>I have been clicked {this.state.clicked} times</p>
      </div>
    )
  }
}
export default DigitalClicker

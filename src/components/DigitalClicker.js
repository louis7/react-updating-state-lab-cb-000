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
    this.setState (){

    }

  }
  render(){
    return (
      <div>
      <button onClick ={}>click me </button>
      <p>I have been clicked {} times</p>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class TestClassComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={count: 0,
        text: 'Hello From SKCET!'
      };
    }
   
    handlechange=(e)=>
    {
this.setState({text: e.target.value})
    }
  render() {
    return (
      <div>
     
      <textarea rows={5} cols={30} value={this.state.text}onChange={this.handlechange}></textarea>
      <p><b>Current Value: </b>
      
      {this.state.text}
      </p>
      </div>
    )
  }
}
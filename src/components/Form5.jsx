import React, { Component } from 'react'
import "../global.css"

export default class Form5 extends Component {
    constructor(){
        super()
        this.state={username:"",
                    password:""}
    }
    
    handleChange=(e)=>
    {
        e.preventDefault();
        let username=this.state.username;
        let password=this.state.password;
        console.log({username,password});
    }
  render() {
    return (
      <div className='form5'>
        <form>
            <div>
                <label>USERNAME</label>
                <input type="text" onChange={(e)=>
                {
                    this.setState({username:e.target.value})
                }}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" onChange={(e)=>
                {
                    this.setState({password:e.target.value})
                }}></input>
            </div>
            <button onClick={this.handleChange}>SUBMIT</button>
        </form>
      </div>
    )
  }
}

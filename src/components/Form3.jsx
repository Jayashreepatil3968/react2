import React, { Component } from 'react'
import "../global.css"

export default class Form3 extends Component {
    constructor(){
        super()
        this.userRef=React.createRef("")
        this.passRef=React.createRef("")
    }
    handleChange=(e)=>
    {
        e.preventDefault();
        let username=this.userRef.current.value;
        let password=this.passRef.current.value;
        console.log({username,password});
    }
  render() {
    return (
      <div className='form3'>
        <form>
            <div>
        <label>USERNAME</label>
        <input type="text" ref={this.userRef}></input>
      </div>
      <div>
        <label>PASSWORD</label>
        <input type="text" ref={this.passRef} ></input>
      </div>
      <button onClick={this.handleChange}>SUBMIT</button>
    </form>
      </div>
    )
  }
}

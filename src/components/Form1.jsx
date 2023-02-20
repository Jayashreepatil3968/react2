import React, { Component } from 'react'
import "../global.css"

export default class Form1 extends Component {
    componentDidMount()
    {
        let form=document.querySelector("form");
        form.addEventListener('submit',(e)=>
        {
            e.preventDefault();
            let username=document.getElementById("input1").value;
            let password=document.getElementById("input2").value;
            console.log({username,password})
        })
    }
  render() {
    return (
      <div className='form1'>
        <form>
            <div>
                <label>USERNAME</label>
                <input type="text" id="input1"></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" id="input2"></input>
            </div>
            <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

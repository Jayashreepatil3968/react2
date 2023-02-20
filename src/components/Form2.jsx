import React from 'react'
import "../global.css"

const Form2 = () => {
    let handleChange=(e)=>
    {
        e.preventDefault();
        let username=document.getElementById("in3").value;
        let password=document.getElementById("in4").value;
        console.log({username,password});

    }
  return (
    <div className='form2'>
        <form>
            <div>
                <label>USERNAME</label>
                <input type="text" id="in3"></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" id="in4"></input>
            </div>
            <button onClick={handleChange}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form2
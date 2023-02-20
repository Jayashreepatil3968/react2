import React,{useState} from 'react'
import "../global.css"

const Form6 = () => {
    let[userName,setUserName]=useState("")
    let[password,setPassword]=useState("")

    let handleChange=(e)=>
    {
        e.preventDefault();
        console.log({userName,password});
    }
  return (
    <div className='form6'>
        <form>
            <div>
                <label>USERNAME</label>
                <input type="text" onChange={(e)=>
                {
                    setUserName(e.target.value)
                }}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" onChange={(e)=>
                {
                    setPassword(e.target.value)
                }}></input>
            </div>
            <button onClick={handleChange}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form6
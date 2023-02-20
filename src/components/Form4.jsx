import React ,{useState,useRef}from 'react'

import "../global.css"
const Form4 = () => {

    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let user1Ref=useRef("");
    let pass1Ref=useRef("");
    let handleChange=(e)=>
    {
        
        e.preventDefault();
       setUsername(user1Ref.current.value)
       setPassword(pass1Ref.current.value)
        console.log({username,password});
    }
  return (
    <div className='form4'>
        <form>
            <div>
                <label>USERNAME</label>
                <input type="text" ref={user1Ref} ></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="text" ref={pass1Ref}></input>
            </div>
            <button onClick={handleChange}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Form4
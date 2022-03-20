import React, { useState } from 'react'
import axios from 'axios'

function LoginForm() {

   const [userame, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = {'Project-ID'  : "6fe86520-c142-43c3-8bb8-288fe7ba8d09", "User-Name" : userame, "User-Secret" : password }

        try{
          await  axios.get('https://api.chatengine.io/chats', {headers: authObject});
          localStorage.setItem('username' , userame)
          localStorage.setItem('password', password)
          window.location.reload();
        }catch(error){
            setError('Damn, all you had to do was copy paste placeholders. Do it - Palpatine')
        }
   } 

   return (
    <div className = "wrapper">
        <div className="form">
            <h1 className="title">
                Chat Application
            </h1>
            <form onSubmit= {handleSubmit}>
                <input type = "text" value= {userame} onChange = {(e)=> {setUsername(e.target.value)}} className = "input" placeholder = "Try ObiWanKenobi" required/>
                <input type = "password" value= {password} onChange = {(e)=> {setPassword(e.target.value)}} className = "input" placeholder = "Password is Test12345" required/>
                <div aling= "center">
                    <button className="button" type = "submit">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div> 
  )
}

export default LoginForm 
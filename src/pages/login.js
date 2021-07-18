import React, { useState } from 'react'
import { connect } from "react-redux"
import { login } from "../actions/authActions"



function Login(props) {
    const [credentials, setcredentials] = useState({email:"",password:""})
    function handleOnchange(event){
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    function handleOnsubmit(){
        props.login(credentials.email,credentials.password)
    }
    return (
        <div>
           <form>
               <h3>Log In</h3>

               <div>
                   <label>Email</label> <br/>
                   <input className="inpu" type="email" name="email" value={credentials.email}  onChange={handleOnchange}/>
               </div>
               <div>
                   <label>Password</label> <br/>
                   <input className="inpu" type="password" name="password" value={credentials.password}   onChange={handleOnchange}/>
               </div>
               <button className="but" type="button" name="Submit" onClick={handleOnsubmit}>Login</button>
         </form> 
        </div>
    )
}

export default connect(null,{login})(Login)

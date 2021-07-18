import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from "../actions/authActions";



function Signup(props) {
    const [credentials, setcredentials] = useState({username:"", email:"", password:""})
    function handleOnchange(event){
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }
    function handleOnsubmit(){
        props.signup(credentials.username,credentials.email,credentials.password)
    }
    return (
        <div>
           <form>
               <h3>Sign Up</h3>

                <div>
                   <label>Username</label> <br/>
                   <input className="inpu" type="username" name="username" value={credentials.username}  onChange={handleOnchange}/>
               </div>

               <div>
                   <label>Email</label> <br/>
                   <input className="inpu" type="email" name="email" value={credentials.email}  onChange={handleOnchange}/>
               </div>

               <div>
                   <label>Password</label> <br/>
                   <input className="inpu" type="password" name="password" value={credentials.password}  onChange={handleOnchange}/>
               </div>
               <button className="but" type="button" name="Submit" onClick={handleOnsubmit}>Signup</button>
         </form> 
        </div>
    )
}

export default connect(null, {signup})(Signup)

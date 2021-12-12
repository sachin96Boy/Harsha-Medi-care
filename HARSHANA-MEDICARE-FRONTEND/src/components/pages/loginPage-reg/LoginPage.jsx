import React from "react";

import './LoginPage.css'

export default function LoginPage() {
  
  return (
    <div className="body1">
      <h2>Login Form</h2>
      <form className="form1">
        <div className="imgcontainer">
          <img src={"images/logo/harshLogo1.jpg"} alt={"loginLogo"} className="medicare-logo"></img>
        </div>

        <div className="container1">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required className="input1"/>

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required className="input1"/>
        
          <button type="submit" className="button1">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" onChange={()=>console.log('changed')}/> Remember me
          </label>
        </div>

        <div className="container1">
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  );
}

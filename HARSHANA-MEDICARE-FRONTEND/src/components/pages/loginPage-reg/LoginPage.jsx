import React from "react";

export default function LoginPage() {
  return (
    <div className="loginPage">
      <dev className="loginPagewrapper">
        <div className="logo">
          <img
            className="medicare-logo"
            src={"#insert src here"}
            alt={"loginLogo"}
          ></img>
          <h3 className="Log-in">Log-In</h3>
        </div>
        <div className="formController">
          <form>
            <label>UserName:</label>
            <input type="text" alt={"UserName"} />
            <label>Password:</label>
            <input type="text" alt={"Password"} />

            <input className="customInputButton" type="Submit" value="Log In" />
          </form>
          <div className="newSign-up">
              <h3>Sign UP Insted</h3>
          </div>
        </div>
      </dev>
    </div>
  );
}

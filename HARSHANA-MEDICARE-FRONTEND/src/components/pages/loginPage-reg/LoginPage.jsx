import React from "react";
import { Link } from "react-router-dom";

import './LoginPage.css';

export default function LoginPage() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1>Sign In For the Store</h1>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required
            onChange={(element) => setEmail(element.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(element) => setPassword(element.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New Customer? <Link to="/register">Create a new Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

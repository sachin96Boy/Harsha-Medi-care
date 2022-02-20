import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signin } from "../../../store/actions/userActions";

import "./LoginPage.css";

export default function LoginPage(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

    console.log(props);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

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

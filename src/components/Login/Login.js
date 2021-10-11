import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { user, signInUsingGoogle, signInUsingFacebook } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleFacebookLogin = () => {
    signInUsingFacebook().then((result) => {
      history.push(redirect_url);
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="your email" />
          <br />
          <input type="password" placeholder="your password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          new to burj-al-arab? <Link to="/register">Create Account</Link>
        </p>
        <hr />
        <button onClick={handleGoogleLogin} className="btn btn-outline-success">
          Google Sign In
        </button>
        <button
          onClick={handleFacebookLogin}
          className="btn btn-outline-success"
        >
          Facebook Sign In
        </button>
      </div>
    </div>
  );
};
export default Login;

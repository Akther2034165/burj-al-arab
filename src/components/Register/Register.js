import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";
const Register = () => {
  const { handleEmailChange, handlePasswordChange, createUser, error } =
    useAuth();

  const handleRegistration = (e) => {
    createUser().then((result) => {
      console.log(result.user);
    });
    e.preventDefault();
  };
  return (
    <div className="login-form">
      <div>
        <h2>Register</h2>
        <form onSubmit={handleRegistration}>
          <input type="text" placeholder=" your name" />
          <br />
          <input
            onBlur={handleEmailChange}
            type="email"
            placeholder=" your email"
            required
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            placeholder=" your password"
            required
          />
          <br />
          <p>{error}</p>
          <input type="submit" name="" id="" value="Submit" />
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import classes from "./Login.module.css";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  const onLogin = (e) => {
    e.preventDefault();
    console.log("onLogin");
  };
  return (
    <section className={classes.loginsection}>
      <div className={classes.logincard}>
        <div className={classes.loginheading}>
          <h2>LOGIN</h2>
        </div>
        <form onSubmit={onLogin}>
          <div>
            <input
              type="text"
              className={classes.logininput}
              placeholder="Email"
            ></input>
          </div>
          <div>
            <input
              type="password"
              className={classes.logininput}
              placeholder="Password"
            ></input>
          </div>
          <div>
            <button type="submit" className={classes.loginbutton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

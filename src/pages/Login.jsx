import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignup, setisSignup] = useState(false);
  const [isPasswordshow, setisPasswordshow] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const registerHandler = () => {
    setisSignup(!isSignup);
  };

  const emailHandler = (e) => {
    setemail(e.target.value);
  };
  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!isSignup) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/5");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    }
  };

  return (
    <div className={classes.loginsection}>
      {/* <Developing /> */}
      <Card className={classes.carddesign}>
        <h2>{!isSignup ? `Log in` : `Sign up`}</h2>
        <form className={classes.formdesign} onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Email"
            onChange={emailHandler}
            value={email}
          />
          <input
            type={isPasswordshow ? `text` : `password`}
            placeholder="Password"
            onChange={passwordHandler}
            value={password}
          />
          {isSignup && <input type="password" placeholder="Confirm Password" />}
          {!isSignup && (
            <div
              className={classes.passwordshow}
              onClick={() => setisPasswordshow(!isPasswordshow)}
            >
              {isPasswordshow ? `hide` : `show`}
            </div>
          )}
          {!isSignup && <a href="#">Forget Password</a>}
          <button type="submit">{!isSignup ? `Log in` : `Sign up`}</button>
        </form>
      </Card>
      {!isSignup && (
        <p>
          New User.{" "}
          <a onClick={registerHandler} className={classes.changebutton}>
            Register here
          </a>
        </p>
      )}
      {isSignup && (
        <p>
          Already User.{" "}
          <a onClick={registerHandler} className={classes.changebutton}>
            Login here
          </a>
        </p>
      )}
    </div>
  );
};

export default Login;

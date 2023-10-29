import React from "react";
import { useParams } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase";

const Home = () => {
  const buttonclick = async (e) => {
    await createUserWithEmailAndPassword(
      auth,
      "kabilank392@gmail.com",
      "12345678"
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  let { id } = useParams();
  return (
    <div>
      <button onClick={buttonclick}>hai</button>
    </div>
  );
};

export default Home;

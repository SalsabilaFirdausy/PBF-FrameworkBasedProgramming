import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import firebase from "firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) Auth.setLoggedIn(true);
        })
        .catch(e => {
          setError(e.message);
        });
  };

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={e => handleForm(e)}>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="E-mail"
            />

            <input
                onChange={e => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="Password"
            />
            <hr />
            <button class="googleBtn" type="button">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg"
                    alt="logo"
                />
                Login With Google
            </button>
            <button type="submit">Login</button>
            <span>{error}</span>
        </form>
    </div>
  );
};

export default Login;
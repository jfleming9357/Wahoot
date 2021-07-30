import React, { useState } from "react";

export default function RegisterPage() {
  const [authState, setAuthState] = useState("login");
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [userpassword2, setUserpassword2] = useState("");

  const LoginSubmitHandler = (e) => {
    e.preventDefault();
    const data = { username, userpassword };

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("FAILLL");
      });
  };

  const RegisterHandler = async (e) => {
    e.preventDefault();
    if (userpassword !== userpassword2) {
      console.log("please confirm your password again");
    } else {
      const data = { username, userpassword };

      let response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
      console.log(response);
    }
  };

  return (
    <div>
      {authState === "login" ? (
        <form onSubmit={LoginSubmitHandler}>
          {/* Login Form */}
          <label>Enter your name</label>
          <input
            value={username}
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Enter your password</label>
          <input
            value={userpassword}
            type="password"
            required
            onChange={(e) => setUserpassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <form onSubmit={RegisterHandler}>
          {/* Register Form */}
          <label>Enter your name</label>
          <input
            type="text"
            value={username}
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Enter your password</label>
          <input
            value={userpassword}
            type="password"
            required
            onChange={(e) => setUserpassword(e.target.value)}
          />
          <label>Confirm your password</label>
          <input
            value={userpassword2}
            type="password"
            required
            onChange={(e) => setUserpassword2(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      )}
      <botton onClick={() => setAuthState("login")}>Login</botton>
      <botton onClick={() => setAuthState("register")}>Register</botton>
    </div>
  );
}

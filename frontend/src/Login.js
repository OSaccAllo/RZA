//Login page


import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Validation from "./LoginValidation"
import axios from "axios"
import { useAuth } from "./Login/Auth"
import { Cookies } from "react-cookie"
import NavSignedOut from "./components/navbar"


function Login() {
  const { login } = useAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token); // Store token in local storage
            login(values);
            navigate("/Account");
          } else {
            alert("No record exists");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div>
        <NavSignedOut />
      </div>
      <div className="d-flex justify-content-center align-items-center  vh-100">
        <div className="bg-white p-3 rounded w-50">
          <h2>Log in</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 rounded-0"
            >
              <strong>Log in</strong>
            </button>
            <p>You agree to our terms and policies</p>
            <Link
              to="/Signup"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
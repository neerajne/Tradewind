import React, { useState } from "react";
import axios from "axios";
import "./AuthPage.css";
import { Bounce, Slide, toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { user } = useUserContext();
  const navigate = useNavigate();
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        console.log("sending request");
        const response = await axios.post(
          "http://localhost:8080/user/signUp",
          userInfo
        );
        const result = response.data;
        sessionStorage.setItem("userInfo", JSON.stringify(result));
        console.log("UserInfo saved:", sessionStorage.getItem("userInfo"));

        // Send message to dashboard
        const dashboardUrl = "http://localhost:3002";
        window.postMessage({ type: 'USER_INFO', data: result }, dashboardUrl);

        if (user && user.token) {
          window.location.href = "http://localhost:3002/";
        } else {
          navigate("/");
        }
        toast.success("signed in successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        console.log(result);
        setUserInfo({});
        e.target.reset();
      } catch (error) {
        console.log(error);
        toast.error(`${error}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      try {
        console.log("sending request");
        const response = await axios.post(
          "http://localhost:8080/user/login",
          userInfo
        );
        const result = response.data;
        sessionStorage.setItem("userInfo", JSON.stringify(result));
        console.log("UserInfo saved:", sessionStorage.getItem("userInfo"));

        // Send message to dashboard
        const dashboardUrl = "http://localhost:3002";
        window.postMessage({ type: 'USER_INFO', data: result }, dashboardUrl);

        if (user && user.token) {
          window.location.href = "http://localhost:3002/";
        }
        console.log(result);
        toast.success("logged in successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        setUserInfo({});
        e.target.reset();
      } catch (error) {
        console.log(error);
        toast.success(`${error}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className="auth-container pt-5 pb-5">
      <div className="form-container">
        <h2>{isSignUp ? "Sign Up" : "Log in"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="bi bi-envelope"></i>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="input-container">
            <i className="bi bi-lock"></i>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={inputChangeHandler}
            />
          </div>
          <button type="submit" className="btn">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
          <div className="switch-link">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <span onClick={toggleForm}>Log in</span>
              </>
            ) : (
              <>
                Create a new account? <span onClick={toggleForm}>Sign Up</span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

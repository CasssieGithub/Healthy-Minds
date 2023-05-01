import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSignup = (username: string, email: string, password: string) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register/`, {
        username,
        email,
        password,
      })
      .then((res) => {
        dispatch(
          authSlice.actions.setAuthTokens({
            token: res.data.access,
            refreshToken: res.data.refresh,
          })
        );
        dispatch(authSlice.actions.setAccount(res.data.user));
        setLoading(false);
        navigate("/Profile");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.detail);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleSignup(values.username, values.email, values.password);
    },
    validationSchema: Yup.object({
      username: Yup.string().trim().required("Username Required"),
      email: Yup.string().trim().required("Email Required"),
      password: Yup.string().trim().required("Password Required"),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="navBtns">
            <div>
              <Link className="homeBtnOnSignUpPage" to="/">
                Home Page
              </Link>
            </div>
            <div>
              <Link className="loginBtnOnSignUpPage" to="/Login">
                Login
              </Link>
            </div>
          </div>
          <div className="signUpTitle">Sign Up</div>
          <div className="instructionsToSignUp">
            Please create a username and password that's easy to remember.
          </div>
          <div className="containsAllInputsOnSignUpPage">
            <div className="usernameContainer">
              <label className="usernameTitle" htmlFor="Username">
                Username:{" "}
              </label>
              <input
                className="usernameInput"
                type="text"
                name="username"
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.username ? (
              <div>{formik.errors.username} </div>
            ) : null}

            <div className="emailContainer">
              <label className="emailTitle" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="emailInput"
                type="text"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email ? <div>{formik.errors.email} </div> : null}
            </div>
            <div className="passwordContainer">
              <label className="passwordTitle" htmlFor="password">
                Password:{" "}
              </label>
              <input
                className="passwordInput"
                type="text"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password ? (
                <div>{formik.errors.password} </div>
              ) : null}
            </div>
          </div>
        </div>
        <div hidden={false}>{message}</div>
        <div>
          <button
            className="submitBtnOnSignUpPage"
            type="submit"
            disabled={loading}
          >
            Submit
          </button>
        </div>
        <div className="alreadyHaveAnAccountOnSignUpPageContainer">
          <Link className="alreadyHaveAnAccountLink" to="/">
            Already have an account
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;

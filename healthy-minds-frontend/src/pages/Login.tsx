import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authSlice from "../store/slices/auth";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login/`, { email, password })
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
        setMessage(err.response.data.detail.toString());
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values.email, values.password);
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("Email Required"),
      password: Yup.string().trim().required("Password Required"),
    }),
  });

  return (
    <div>
      <div className="containerForLoginPage">
        <div className="navBtns">
          <div>
            <Link className="homeBtnOnLoginPage" to="/">
              Home Page
            </Link>
          </div>
          <div>
            <Link className="signUpBtnOnLoginPage" to="/Signup">
              Sign Up
            </Link>
          </div>
        </div>
        <h1 className="logInTitle">Log in to your account 🔐</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="containsEmailAndPasswordInputs">
            <div className="containsEmailInput">
              <input
                className="emailInput"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.email ? <div>{formik.errors.email} </div> : null}
            <div className="containsPasswordInput">
              <input
                className="passwordInput"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.password ? (
              <div>{formik.errors.password} </div>
            ) : null}
          </div>
          <div className="text-danger text-center my-2" hidden={false}>
            {message}
          </div>

          <div className="containsLoginAndHomeBtnOnLoginPage">
            <div className="homeBtnOnLoginPageContainer">
              <Link className="homeBtnOnLoginPage" to="/">
                Home
              </Link>
            </div>

            <div className="loginBtnOnLoginPageContainer">
              <button type="submit" disabled={loading} className="logInBtn">
                Login
              </button>
            </div>
          </div>
          <div className="alreadySignUpBtnOnLoginPage">
            <div className="dontHaveAnAccount">Don't have an account?</div>
            <Link className="signUpBtnOnProfilePage" to="/Signup">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

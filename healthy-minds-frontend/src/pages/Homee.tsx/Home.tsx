import { Link } from "react-router-dom";
import "./Home.css";
import FadeIn from "react-fade-in";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import authSlice from "../../store/slices/auth";
import MissionStatement from "./MissionStatement";
import { Routes, Route } from "react-router-dom";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ifUserIsLoggedIn = useSelector(
    (state: RootState) => state.auth.account
  );

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    navigate("/login");
  };

  return (
    <div>
      {/* Header */}
      {ifUserIsLoggedIn ? (
        <>
          <div className="containsBtnsWhileLoggedIn">
            <Link className="backToProfileBtnWhileLoggedIn" to="/Profile">
              {" "}
              Return to profile page
            </Link>
            <button className="logoutBtn" onClick={handleLogout}>
              {" "}
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="holdsTheBtnsIntroPage">
            <Link className="loginBtn" to="/Login">
              Login
            </Link>
            <Link className="signUpBtn" to="/SignUp">
              Sign Up
            </Link>
          </div>
        </>
      )}
      <div>
        <div></div>
        <div className="imageOnIntro">
          <img className="introImage" src="https://i.imgur.com/cGOJreD.jpg" />
        </div>
      </div>
      <MissionStatement />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import "./Home.css";
// import Fade from "react-reveal";
import FadeIn from "react-fade-in";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import authSlice from "../../store/slices/auth";
import MissionStatement from "./MissionStatement";
import { Routes, Route } from "react-router-dom";
// import Footer from "./Footer";
// import Testimonials from "./Testimonials";

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
      {/* Mission Statement */}
      <MissionStatement />
      {/* Testimonials */}
      <div className="containerForTestimonial">
        <div className="testimonialsTitle">Testimonials</div>
        <div className="testimonialsSection">
          <div className="containerForLeftSideOfTestimonial">
            <div className="containerForPhotoOneOnIntroPage">
              <img
                className="photosOnIntroPage"
                src="https://i.imgur.com/uVd3MOk.jpg"
              />
              <div className="quoteFromTestimonial">
                "I love this app! If it wasn't for this app,
                <br />
                I wouldnt be able to stay on to of my
                <br />
                mental health"
                <br />
                <div className="name">- Christina</div>
              </div>
            </div>

            <div className="containerForPhotoTwoOnIntroPage">
              <img
                className="photosOnIntroPage"
                src="https://i.imgur.com/6sN8i8g.jpg"
              />
              <div className="quoteFromTestimonial">
                "I love this app! If it wasn't for this app,
                <br />
                I wouldnt be able to stay on to of my
                <br />
                mental health"
                <br />
                <div className="name">- Christina</div>
              </div>
            </div>

            <div className="containerForPhotoThreeOnIntroPage">
              <img
                className="photosOnIntroPage"
                src="https://i.imgur.com/CsbX4JI.jpg"
              />
              <div className="quoteFromTestimonial">
                "I love this app! If it wasn't for this app,
                <br />
                I wouldnt be able to stay on to of my
                <br />
                mental health"
                <br />
                <div className="name">- Christina</div>
              </div>
            </div>
          </div>

          <div className="containerForRightSideOfTestimonial">
            <div className="containerForPhotoFourOnIntroPage">
              <img
                className="photosOnIntroPage"
                src="https://i.imgur.com/2etU3RS.jpg"
                alt=""
              />
              <div className="quoteFromTestimonial">
                "I love this app! If it wasn't for this app,
                <br />
                I wouldnt be able to stay on to of my
                <br />
                mental health"
                <br />
                <div className="name">- Christina</div>
              </div>
            </div>

            <div className="containerForPhotoFiveOnIntroPage">
              <img
                className="photosOnIntroPage"
                src="https://i.imgur.com/a5tiPwV.jpg"
                alt=""
              />
              <div className="quoteFromTestimonial">
                "I love this app! If it wasn't for this app,
                <br />
                I wouldnt be able to stay on to of my
                <br />
                mental health"
                <br />
                <div className="name">- Christina</div>
              </div>
            </div>

            <div className="containerForPhotoSixOnIntroPage">
              <img
                className="photosOnIntroPage"
                src="https://i.imgur.com/SAF2Zti.jpg"
              />
              <div className="quoteFromTestimonial">
                "I love this app! If it wasn't for this app,
                <br />
                I wouldnt be able to stay on to of my
                <br />
                mental health"
                <br />
                <div className="name">- Christina</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer */}
      <div className="stayInformedTitle">Stay Informed </div>
      <br />
      <div className="footer">
        <div className="footerRightSide">
          <Link to="https://www.facebook.com" id="facebook">
            Facebook
          </Link>
          <div className="lineBetweenSocialSites"> | </div>
          <Link to="https://www.instagram.com/" id="instagram">
            Instagram
          </Link>
          <div className="lineBetweenSocialSites"> | </div>
          <Link to="https://twitter.com/" id="twitter">
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

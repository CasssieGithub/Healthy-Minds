import { Link } from "react-router-dom";
import "./Home.css";
// import Fade from "react-reveal";
import FadeIn from "react-fade-in";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <div className="holdsTheBtnsIntroPage">
        <Link className="loginBtn" to="/Login">
          Login
        </Link>
        <Link className="signUpBtn" to="/SignUp">
          Sign Up
        </Link>
      </div>
      <div>
        <div></div>
        <div className="imageOnIntro">
          <img className="introImage" src="https://i.imgur.com/cGOJreD.jpg" />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="containerForMissionStatement">
        <div className="missionStatementTitle">Our Mission Statement</div>
        <div className="containerForMissionStatementParagraph">
          <div className="missionStatementParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
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
            {" "}
            Facebook{" "}
          </Link>
          <div className="lineBetweenSocialSites"> | </div>
          <Link to="https://www.instagram.com/" id="instagram">
            {" "}
            Instagram{" "}
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

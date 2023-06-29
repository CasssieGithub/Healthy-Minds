import "./Home.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {" "}
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
    </>
  );
};
export default Footer;

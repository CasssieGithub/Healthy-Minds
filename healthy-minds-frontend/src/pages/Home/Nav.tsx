import "./Nav.css";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import authSlice from "../../store/slices/auth";

const Nav = () => {
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
    <>
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
    </>
  );
};
export default Nav;

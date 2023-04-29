import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import authSlice from "../store/slices/auth";
import useSWR from "swr";
import { fetcher } from "../utils/axios";
import { UserResponse } from "../types";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import "./Profile.css";

interface LocationState {
  userId: string;
}

const Profile = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = account?.id;
  const user = useSWR<UserResponse>(`/user/${userId}/`, fetcher);

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    navigate("/login");
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full p-6">
        <button onClick={handleLogout} className="logOutBtn">
          Logout
        </button>
      </div>
      {user.data ? (
        <div className="w-full h-full text-center items-center">
          <p className="self-center my-auto">Welcome, {user.data?.username}</p>
        </div>
      ) : (
        <p className="text-center items-center">Loading ...</p>
      )}
      <Link className="fillOutFormBtnOnProfile" to="/PHQ9Form">
        Click to fill out your weekly PHQ-9 form
      </Link>
      <Link className="returnToHomepageBtnOnProfile" to="/">
        Return to Homepage
      </Link>
      <Link className="fillOutFormBtnOnProfile" to="/GAD7Form">
        Click to fill out your weekly GAD-7 form{" "}
      </Link>
    </div>
  );
};

export default Profile;

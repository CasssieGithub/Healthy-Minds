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
import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import LineChart from "../components/LineChart";
import PHQ9Form from "./PHQ9Form";
import "chartjs-adapter-date-fns";

interface LocationState {
  userId: string;
}

Chart.register(CategoryScale);

const Profile = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [PHQ9FormInformation, setPHQ9FormInformation] = useState([]);
  const [GAD7FormInformation, setGAD7FormInformation] = useState([]);

  const chartData = {
    datasets: [
      {
        label: " PHQ-9 Overall Score ",

        data: PHQ9FormInformation.map((data) => {
          // @ts-expect-error
          return { y: data.Overallscore, x: data.date };
        }),
        backgroundColor: [
          "#000000",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: " GAD-7 Overall Score ",

        data: GAD7FormInformation.map((data) => {
          // @ts-expect-error
          return { y: data.Overallscore, x: data.date };
        }),
        backgroundColor: [
          "#000000",
          // "#ecf0f1",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };

  const userId = account?.id;
  const user = useSWR<UserResponse>(`/user/${userId}/`, fetcher);

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    navigate("/login");
  };

  useEffect(() => {
    axios.get("http://localhost:8000/api/PHQ9Form").then((res) => {
      setPHQ9FormInformation(res.data);
    });

    axios.get("http://localhost:8000/api/GAD7Form").then((res) => {
      setGAD7FormInformation(res.data);
    });
  }, []);

  console.log(PHQ9FormInformation);

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
      <LineChart chartData={chartData} />
    </div>
  );
};

export default Profile;

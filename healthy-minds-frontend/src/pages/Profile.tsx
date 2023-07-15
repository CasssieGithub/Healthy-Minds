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

function timeConverter(UNIX_timestamp: number) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

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
        backgroundColor: ["#ff0000"],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: " GAD-7 Overall Score ",

        data: GAD7FormInformation.map((data) => {
          // @ts-expect-error
          return { y: data.Overallscore, x: data.date };
        }),
        backgroundColor: ["#0000ff"],
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
      // @ts-expect-error
      const findFormByUserId = res.data.filter((form) => {
        return +userId! === +form.userId;
      });
      setPHQ9FormInformation(findFormByUserId);
    });

    axios.get("http://localhost:8000/api/GAD7Form").then((res) => {
      // @ts-expect-error
      const findFormByUserId = res.data.filter((form) => {
        return +userId! === +form.userId;
      });
      setGAD7FormInformation(findFormByUserId);
    });
  }, []);

  const inspirationalQuotes = [
    `"Our wounds are often the openings into the best and most beautiful part
      of us.” — David Richo `,

    `There is hope, even when your brain tells you there isn’t. — John
      Green`,

    `Numbing the pain for a while will make it worse when you finally feel it. — Albus Dumbledore`,

    `Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open. — Steven Aitchison`,

    `My dark days made me strong. Or maybe I already was strong, and they made me prove it. — Emery Lord`,

    `Being able to be your true self is one of the strongest components of good mental health. — Dr. Lauren Fogel Mersy`,

    `Just when the caterpillar thought the world was ending, he turned into a butterfly.— Anonymous proverb`,

    `Out of suffering have emerged the strongest souls; the most massive characters are seared with scars. — Kahlil Gibran`,

    `Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but you are not the rain. — Matt Haig`,

    `Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way. — Charles Bukowski`,

    `Some of the most comforting words in the universe are ‘me too.’ That moment when you find out that your struggle is also someone else’s struggle, that you’re not alone, and that others have been down the same road. — Unknown`,
  ];
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);

  const randomChoice = inspirationalQuotes[randomIndex];

  return (
    <div className="w-full h-screen">
      <div className="logoutBtnOnProfilePage">
        <div className="containsBtns">
          <button onClick={handleLogout} className="logOutBtn">
            Logout
          </button>
          <Link className="homeBtnOnProfilePage" to="/">
            Home
          </Link>
          <div className="randomQuote">
            <q>{randomChoice}</q>
          </div>
        </div>
      </div>
      {user.data ? (
        <div className="w-full h-full text-center items-center"></div>
      ) : (
        <p className="text-center items-center">Loading ...</p>
      )}

      <p className="self-center my-auto">Welcome, {user.data?.username}</p>

      <div className="chartAndinspirationalQuotes">
        <LineChart chartData={chartData} />
      </div>

      <div className="holdingTables">
        <div className="containsPHQ9Table">
          <div className="tableTitle">PHQ-9 Data</div>
          <table>
            <tr>
              <th>Date</th>
              <th>Overall Score</th>
              <th>ID</th>
            </tr>
            {PHQ9FormInformation.map((data: any) => {
              return (
                <tr className="dataDisplayedOnTable">
                  <td>{timeConverter(data.date)}</td>
                  <td>{data.Overallscore}</td>
                  <td>{userId}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="containsGAD7Table">
          <div className="tableTitle">GAD-7 Data</div>
          <table>
            <tr>
              <th>Date</th>
              <th>Overall Score</th>
              <th>ID</th>
            </tr>
            {GAD7FormInformation.map((data: any) => {
              return (
                <tr className="dataDisplayedOnTable">
                  <td>{timeConverter(data.date)}</td>
                  <td>{data.Overallscore}</td>
                  <td>{userId}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <div className="containsPhq9AndGad7Form">
        <Link className="fillOutFormBtnOnProfile" to="/PHQ9Form">
          Click to fill out the PHQ-9 form
        </Link>
        <Link className="fillOutFormBtnOnProfile" to="/GAD7Form">
          Click to fill out the GAD-7 form{" "}
        </Link>
      </div>
    </div>
  );
};

export default Profile;

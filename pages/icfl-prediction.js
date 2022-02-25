import logo from ".././public/assets/img/icfl.png";
import SingleCard from "../Components/SinglePredictionCard";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


import {
  matchList,
  teamPoint,
  userMatchList,
  userPoint,
} from "../Components/HttpPostRequest";
import { useCookies } from "react-cookie"; 
export default function App() {
  const [cookies, setCookie] = useCookies(["userData"]);
  let routeLink = useRouter();

  const data = {
    teamA: [
      {
        name: "2020",
        logo: logo,
      },
      {
        name: "2120",
        logo: logo,
      },
      {
        name: "IITS",
        logo: logo,
      },
      {
        name: "1930",
        logo: logo,
      },
    ],
    teamB: [
      {
        name: "2130",
        logo: logo,
      },
      {
        name: "1820",
        logo: logo,
      },
      {
        name: "1920",
        logo: logo,
      },
      {
        name: "1830",
        logo: logo,
      },
    ],
    teamC: [
      {
        name: "1910",
        logo: logo,
      },
      {
        name: "2110",
        logo: logo,
      },
      {
        name: "2010",
        logo: logo,
      },
      {
        name: "2030",
        logo: logo,
      },
    ],
  };

  const [matchListData, setMatchListData] = useState([]);
  const [predictionData, setPredictionData] = useState(true);
  const [userPointData, setUserPointData] = useState();
  const [pointData, setPointData] = useState(false);
  const [myScore, setMyScore] = useState(-1);
  const [activeClass1, setActiveClass1] = useState("active");
  const [activeClass2, setActiveClass2] = useState("in-active");
  const [pointTableData, setPointTableData] = useState([
    {
      name: "1710",
      matchPlayed: "2",
      win: "1",
      draw: "1",
      lose: "0",
      points: "3.31",
    },
    {
      name: "1810",
      matchPlayed: "1",
      win: "0",
      draw: "1",
      lose: "0",
      points: "1",
    },
  ]);

  let ptx1 = 1; 
  let ptx2 = 1; 
  let ptx3 = 1;

  async function MatchListFun() {
    let tempData;
    try {
      if (cookies.userData && cookies.userData.token)
        tempData = await userMatchList({ userId: cookies.userData.userId });
      else tempData = await matchList();
      setMatchListData(tempData.data.data);
    } catch (e) {
      routeLink.push({ pathname: "/icfl-login" });
    }
  }

  useEffect(async () => {
    MatchListFun()
    let tempPoint = await teamPoint();
    let userPoints = await userPoint();
    let indx = -1
    if (cookies.userData && cookies.userData.token)
      indx = userPoints.data.data.findIndex((item) => item.userId == cookies.userData.userId)
    if (indx > -1) setMyScore(userPoints.data.data[indx].score)
    setUserPointData(userPoints.data.data);
    setPointTableData(tempPoint.data.data);
  }, []);

  function NextView() {
    $(".scroller-card").animate({ scrollLeft: "+=460" }, 500);
  }
  function PreView() {
    $(".scroller-card").animate({ scrollLeft: "-=460" }, 500);
  }
  function NextView1() {
    $(".scroller-card1").animate({ scrollLeft: "+=460" }, 500);
  }
  function PreView1() {
    $(".scroller-card1").animate({ scrollLeft: "-=460" }, 500);
  }

  function predictionFun() {
    setPredictionData(true);
    setPointData(false);
    setActiveClass1("active");
    setActiveClass2("in-active");
  }
  function pointTableFun() {
    setPredictionData(false);
    setPointData(true);
    setActiveClass2("active");
    setActiveClass1("in-active");
  }

  return (
    <>
      <Navbar />
      <div id="icfl" className="pt-100 pb-50">
        <h1 className="mt-2">Shafa Care ICFL 2021</h1>
        <div className="container pt-3">
          <div className="row">
            <div className="switch m-auto">
              <button className={activeClass1} onClick={predictionFun}>
                Prediction
              </button>
              <button className={activeClass2} onClick={pointTableFun}>
                Point Table
              </button>
            </div>
          </div>
          {predictionData ? (
            <>
              <div className="slider__area row group-round mb-5">
                <h3 className="w-100">Group stage</h3>
                <button
                  className="nav-prev-arro common-arrow"
                  onClick={() => PreView()}
                >
                  <i className="fa fa-angle-left"></i>
                </button>
                <div id="scroll-progress-specialities" className=""></div>
                <ul id="scroller-specialities" className="scroller-card">
                  {matchListData && matchListData.length
                    ? matchListData.map((item, index) => {
                      if (index < 18)
                        return (
                          <li className="icfl-card">
                            <SingleCard MatchListFun={MatchListFun} data={item} />
                          </li>
                        );
                    })
                    : null}
                </ul>

                <button
                  className="nav-next-arro common-arrow"
                  onClick={() => NextView()}
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>

              {matchListData && matchListData.length > 18 ? (
                <div className="slider__area row group-round mb-5">
                  <h3 className="w-100">Quarter Final </h3>
                  <button
                    className="nav-prev-arro common-arrow"
                    onClick={() => PreView1()}
                  >
                    <i className="fa fa-angle-left"></i>
                  </button>
                  <div id="scroll-progress-specialities" className=""></div>
                  <ul id="scroller-specialities" className="scroller-card1">
                    {matchListData && matchListData.length
                      ? matchListData.map((item, index) => {
                        if (index > 17 && index < 22)
                          return (
                            <li className="icfl-card">
                              <SingleCard MatchListFun={MatchListFun} data={item} />
                            </li>
                          );
                      })
                      : null}
                  </ul>

                  <button
                    className="nav-next-arro common-arrow"
                    onClick={() => NextView1()}
                  >
                    <i className="fa fa-angle-right"></i>
                  </button>
                </div>
              ) : null}
              {matchListData && matchListData.length > 22 ? (
                <div className="slider__area row group-round mb-5">
                  <h3 className="w-100">Semi Final</h3>
                  <div id="scroll-progress-specialities" className=""></div>
                  <ul id="scroller-specialities" className="scroller-card">
                    {matchListData && matchListData.length
                      ? matchListData.map((item, index) => {
                        if (index > 21 && index < 24)
                          return (
                            <li className="icfl-card">
                              <SingleCard MatchListFun={MatchListFun} data={item} />
                            </li>
                          );
                      })
                      : null}
                  </ul>
                </div>
              ) : null}
              {matchListData && matchListData.length > 24 ? (
                <div className="slider__area row group-round mb-5">
                  <h3 className="w-100">Final</h3>
                  <div id="scroll-progress-specialities" className=""></div>
                  <ul id="scroller-specialities" className="scroller-card">
                    {matchListData && matchListData.length
                      ? matchListData.map((item, index) => {
                        if (index == 24)
                          return (
                            <li className="icfl-card">
                              <SingleCard MatchListFun={MatchListFun} data={item} />
                            </li>
                          );
                      })
                      : null}
                  </ul>
                </div>
              ) : null}

              {userPointData ? (
                <div className="row leadboard">
                  <h3 className="title-1 w-100 text-left">Leaderboard
                    {
                      myScore > -1 ?
                        <span className="ml-3">
                          [ My Score: {myScore} ]
                        </span>
                        : null
                    }
                  </h3>
                  <div className="col-md-6 pt-3">
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userPointData && userPointData.length
                          ? userPointData.map((item, index) => {
                              return (
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>
                                    {item.user.firstName} {item.user.lastName}
                                  </td>
                                  <td>{item.score}</td>
                                </tr>
                              );
                          })
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : null}
            </>
          ) : null}
          {pointData ? (
            <>
              <div className="row table__">
                <h1 className="title-1 w-100 text-left">Group A</h1>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Team</th>
                      <th scope="col">Match</th>
                      <th scope="col">W</th>
                      <th scope="col">D</th>
                      <th scope="col">L</th>
                      <th scope="col">GF</th>
                      <th scope="col">GA</th>
                      <th scope="col">GD</th>
                      <th scope="col">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pointTableData && pointTableData.length
                      ? pointTableData.map((item, index) => {
                        if (item.group == "A")
                          return (
                            <tr>
                              <th scope="row">{ptx1++}</th>
                              <td>{item.team}</td>
                              <td>{item.match}</td>
                              <td>{item.win}</td>
                              <td>{item.draw}</td>
                              <td>{item.loss}</td>
                              <td>{item.GF}</td>
                              <td>{item.GA}</td>
                              <td>{item.NRR}</td>
                              <td>{item.point}</td>
                            </tr>
                          );
                      })
                      : null}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
          {pointData ? (
            <>
              <div className="row table__">
                <h1 className="title-1 w-100 text-left">Group B</h1>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Team</th>
                      <th scope="col">Match</th>
                      <th scope="col">W</th>
                      <th scope="col">D</th>
                      <th scope="col">L</th>
                      <th scope="col">GF</th>
                      <th scope="col">GA</th>
                      <th scope="col">GD</th>
                      <th scope="col">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pointTableData && pointTableData.length
                      ? pointTableData.map((item, index) => {
                        if (item.group == "B")
                          return (
                            <tr>
                              <th scope="row">{ptx2++}</th>
                              <td>{item.team}</td>
                              <td>{item.match}</td>
                              <td>{item.win}</td>
                              <td>{item.draw}</td>
                              <td>{item.loss}</td>
                              <td>{item.GF}</td>
                              <td>{item.GA}</td>
                              <td>{item.NRR}</td>
                              <td>{item.point}</td>
                            </tr>
                          );
                      })
                      : null}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
          {pointData ? (
            <>
              <div className="row table__">
                <h1 className="title-1 w-100 text-left">Group C</h1>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Team</th>
                      <th scope="col">Match</th>
                      <th scope="col">W</th>
                      <th scope="col">D</th>
                      <th scope="col">L</th>
                      <th scope="col">GF</th>
                      <th scope="col">GA</th>
                      <th scope="col">GD</th>
                      <th scope="col">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pointTableData && pointTableData.length
                      ? pointTableData.map((item, index) => {
                        if (item.group == "C")
                          return (
                            <tr>
                              <th scope="row">{ptx3++}</th>
                              <td>{item.team}</td>
                              <td>{item.match}</td>
                              <td>{item.win}</td>
                              <td>{item.draw}</td>
                              <td>{item.loss}</td>
                              <td>{item.GF}</td>
                              <td>{item.GA}</td>
                              <td>{item.NRR}</td>
                              <td>{item.point}</td>
                            </tr>
                          );
                      })
                      : null}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  matchPrediction,
  matchPredictionUpdate,
} from "../Components/HttpPostRequest";
import { ToastContainer, toast } from "react-toast";
import { useRouter } from "next/router";

export default function Card({ MatchListFun, data }) {
  data.time = data.time.toString()
  let MatchDate = new Date(data.time);
  MatchDate = MatchDate.toString()
  let now = new Date();
  now = now.toString()
  let nowd = parseInt(now.slice(8,10))
  let nowh = parseInt(now.slice(16,18))
  let nowm = parseInt(now.slice(19,21))
  let matchDatad =parseInt(data.time.slice(8,10))
  let matchDatah =parseInt(data.time.slice(11,13))
  let matchDatam = parseInt(data.time.slice(14,16))
  let routeLink = useRouter();

  const [cookies, setCookie] = useCookies(["userData"]);

  let vote = {
    t1:0,
    t2:0,
    t3:0
  }

  data.predictList.map((item) => {
    if(item.win == 1) vote.t1+=1
    if(item.win == 0) vote.t2+=1
    if(item.win == 2) vote.t3+=1
  })


  const [btnSelect1, setBtnSelect1] = useState("icfl-not-select");
  const [btnSelect2, setBtnSelect2] = useState("icfl-not-select");
  const [btnSelect3, setBtnSelect3] = useState("icfl-not-select");
  const [selected1, setSelected1] = useState("nothing");
  const [selected2, setSelected2] = useState("nothing");
  const [selected3, setSelected3] = useState("nothing");
  let tempDate = data.time.slice(5, 10);
  let tempTime = data.time.slice(11, 16);
  let tempHour = parseInt(tempTime.slice(0, 2));
  let tempMinute = parseInt(tempTime.slice(3, 5));
  //

  useEffect(async () => {
    if (data.match_prediction && data.match_prediction.win === 1)
      setBtnSelect1("icfl-select");
    if (data.match_prediction && data.match_prediction.win === 0)
      setBtnSelect2("icfl-select");
    if (data.match_prediction && data.match_prediction.win === 2)
      setBtnSelect3("icfl-select");
  }, []);
  function onClickFun(tempData, select1, select2, select3) {
    if ( nowd < matchDatad || (nowd == matchDatad && nowh < matchDatah) || (nowd == matchDatad && nowh == matchDatah && nowm < matchDatam )) {
      if (select1) {
        setBtnSelect1("icfl-select");
        setBtnSelect2("icfl-not-select");
        setBtnSelect3("icfl-not-select");
        // setSelected1('selected')
      } else if (select2) {
        setBtnSelect2("icfl-select");
        setBtnSelect1("icfl-not-select");
        setBtnSelect3("icfl-not-select");
        // setSelected2('selected')
      } else if (select3) {
        setBtnSelect3("icfl-select");
        setBtnSelect1("icfl-not-select");
        setBtnSelect2("icfl-not-select");
        // setSelected3('selected')
      }

      if (cookies && cookies.userData) {
        let values = {
          matchScheduleId: data.id,
          userId: cookies.userData.userId,
          win: tempData,
        };
        // if(data.match_prediction){
        if (
          btnSelect1 == "icfl-select" ||
          btnSelect2 == "icfl-select" ||
          btnSelect3 == "icfl-select"
        ) {
          values.id = data.match_prediction.id;
          matchPredictionUpdate(values)
            .then((res) => {
              if (res.status === 200) {
                MatchListFun();
                toast.success("Successfully updated....");
              } else {
                toast.error("Submited failed....");
              }
            })
            .catch((err) => {
              // toast.error(err)
              toast.error("Submited failed....");
              // end page loading
            });
        } else {
          matchPrediction(values)
            .then((res) => {
              if (res.status === 200) {
                MatchListFun();
                toast.success("Successfully submited....");
              } else {
                toast.error("Submited failed....");
              }
            })
            .catch((err) => {
              // toast.error(err)
              toast.error("Submited failed....");
              // end page loading
            });
        }
      } else {
        toast.warn("Please login first");
        routeLink.push({ pathname: "/icfl-login" });
      }
    } else {
      toast.warn("Time expired....");
    }
  }

  return (
    <>
      {tempHour == 12 ? (
        <p>
          {tempDate} at {tempHour} : {tempMinute} PM
        </p>
      ) : null}
      {tempHour > 12 ? (
        <p>
          {tempDate} at {tempHour - 12} : {tempMinute} PM
        </p>
      ) : null}
      {tempHour < 12 ? (
        <p>
          {tempDate} at {tempHour} : {tempMinute} AM
        </p>
      ) : null}
      <div className="d-flex justify-content-between">
        <p>{data.team1}</p>
        <p>{data.team2}</p>
      </div>
      <div className="d-flex justify-content-between">
        {data.win == null || data.win == undefined ? (
          <>
          <div className="text-center">
            <button
              className={btnSelect1}
              id={selected1}
              onClick={() => onClickFun(1, 1, 0, 0)}
            >
              Select
            </button>
            <p>{vote.t1}</p>
            </div>
            <div className="text-center">
            <button
              className={btnSelect2}
              id={selected2}
              onClick={() => onClickFun(0, 0, 1, 0)}
            >
              Draw
            </button>
            <p>{vote.t2}</p>
            </div>
            <div className="text-center">
            <button
              className={btnSelect3}
              id={selected3}
              onClick={() => onClickFun(2, 0, 0, 1)}
            >
              Select
            </button>
            <p>{vote.t3}</p>
            </div>
          </>
        ) : (
          <>
            {data.match_prediction && data.match_prediction.win === 1 ? (
              <button className={btnSelect1} id="selected">
                {data.team1Goal}
              </button>
            ) : (
              <button className={btnSelect1}>{data.team1Goal}</button>
            )}
            {data.match_prediction && data.match_prediction.win === 2 ? (
              <button className={btnSelect3} id="selected">
                {data.team2Goal}
              </button>
            ) : (
              <button className={btnSelect3}>{data.team2Goal}</button>
            )}
          </>
        )}
      </div>
    </>
  );
}

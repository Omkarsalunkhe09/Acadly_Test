import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./userinfo.css";

export const Userinfo = () => {
  const { id } = useParams();
  const [dt, setDt] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/students?id=${id}`).then((res) => {
      console.log(res.data);
      setDt(res.data);
    });
  }, []);
  console.log(id);
  return (
    <div>
      {dt.map((e) => {
        return (
          <div className="contanier">
            <div className="iim">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={e.avatarURL}
                alt="pic"
              />
            </div>
            <div className="data">
              <p>
                <span className="nme">Name:- </span>
                {e.name}
              </p>
              <p>
                <span className="nme">Lecture Attented :-</span>
                {e.lecturesAttended}
              </p>
              <p>
                <span className="nme">Total Lectures :- </span>
                {e.totalLectures}
              </p>
              <div className="flx">
                <div className="bx">
                  <p className="nme">English</p>
                  <p>
                    <span>Title:-</span>
                    {e.marks.eng112.subjectTitle}
                  </p>
                  <p>
                    <span className="nme">Marks Obtained</span>
                  </p>
                  <div>
                    {e.marks.eng112.markesObtained}/{e.marks.eng112.totalMarks}
                  </div>
                </div>
                <div className="bx">
                  <p className="nme">Science</p>
                  <p>
                    <span>Title:-</span>
                    {e.marks.sci143.subjectTitle}
                  </p>
                  <p>
                    <span className="nme">Marks Obtained</span>
                  </p>
                  <div>
                    {e.marks.sci143.markesObtained}/{e.marks.sci143.totalMarks}
                  </div>
                </div>
                <div className="bx">
                  <p className="nme">Maths</p>
                  <p>
                    <span>Title:-</span>
                    {e.marks.mth101.subjectTitle}
                  </p>
                  <p>
                    <span className="nme">Marks Obtained</span>
                  </p>
                  <div>
                    {e.marks.mth101.markesObtained}/{e.marks.mth101.totalMarks}
                  </div>
                </div>
              </div>
              {/* <p>
                <span className="nme">Maths Marks :- </span>
                {e.marks.mth101.markesObtained}/{e.marks.mth101.totalMarks}
              </p>
              <p>
                <span className="nme">English Marks :- </span>
                {e.marks.eng112.markesObtained}/{e.marks.eng112.totalMarks}
              </p>
              <p>
                <span className="nme">Science Marks :- </span>
                {e.marks.sci143.markesObtained}/{e.marks.sci143.totalMarks}
              </p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

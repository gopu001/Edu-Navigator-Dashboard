import React from "react";
import "./Student.scss";
import LinearProgress from "@mui/material/LinearProgress";
import bar from "./assests/Bar.png";


const bars = [
  {
    id: 1,
    page: "English",
    percentage: 65,
  },
  {
    id: 2,
    page: "Logical Reasoning",
    percentage: 50,
  },
  {
    id: 3,
    page: "CSEP",
    percentage: 78,
  },
  {
    id: 4,
    page: "Portfolio",
    percentage: 0,
  },
  {
    id: 5,
    page: "Resume",
    percentage: 0,
  },
  {
    id: 6,
    page: "Interviews",
    percentage: 0,
  },
  {
    id: 7,
    page: "LinkedIn Profiles",
    percentage: 0,
  },
];

function Student() {
  return (
    <>
      <div className="top">
        <div className="bars">
          {bars.map((item, index) => (
            <div key={item.id} className="card">
              <LinearProgress
                style={{
                  width: "123px",
                  height: "25px",
                  borderRadius: "5px",
                  backgroundColor: "#F8F8F8",
                }}
                variant="determinate"
                value={
                  item.percentage
                }
              />
              
              <p>{item.page}</p>
              <p className="percentage">{item.percentage}%</p>
            </div>
          ))}
        </div>
        <div className="unemployable">
          <p>Unemployable</p>
          <img src={bar} alt="" />
          <p>Employable</p>
        </div>
      </div>
    </>
  );
}

export default Student;

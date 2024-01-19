import React from "react";
import "./Progress.scss";
import { LinearProgress } from "@mui/material";
import CircularProgressWithLabel from './../AllBars/Circular'

const data = [
  {
    id: 1,
    title: "English",
    description: "English Course Progress",
    level : '4/26',
    percentage : '65'
  },
  {
    id: 2,
    title: "Logical Reasoning",
    description: "Logical Reasoning Course Progress",
    level : '20/20',
    percentage : '100'
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Graphic Design Course Progress",
    level : '6/10',
    percentage : '65'
  },
  {
    id: 4,
    title: "GRE",
    description: "GRE Course Progress",
    level : '8/10',
    percentage : '85'
  },
];

const Progress = () => {
  return (
    <div className="cards">
      {data.map((item, index) => (
        <div key={item.id} className="card">
          <p className="title">{item.title}</p>
          <div className="center">
            <p className="des">{item.description}</p>
            <CircularProgressWithLabel
             value={item.percentage}
             color={item.percentage > 80 ? 'blue' : 'orange'}
            />
          </div>
          <p>Lessons</p>
          <div className="linearBar">
            
            <LinearProgress
              style={{
                width: "150px",
                height: "5px",
                flexShrink: "0",
                borderRadius: "5px",
                backgroundColor : '#F8F8F8'
                // backgroundColor : item.percentage > 80 ? 'blue' : 'orange',
                
               
              }}
              variant="determinate"
              value={parseFloat(item.percentage)}
              
            />
            <p>{item.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;

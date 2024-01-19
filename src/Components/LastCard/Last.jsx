import React from "react";
import "./Last.scss";


const array = [
  {
    id: "1",
    title: "English & Logical Reasoning",
    month: "Monthly",
    week: "Weekly",
  },
  {
    id: "2",
    title: "Upskilling UI / UX Course",
    month: "Monthly",
    week: "Weekly",
  },
];

const Last = () => {
  return (
    <div className="last">
      {array.map((item) => (
        <div key={item.id} className="cards">
          <p className="title">{item.title}</p>
          <div className="monthCard">
            <p className="month">{item.month}</p>
            <p className="week">{item.week}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Last;

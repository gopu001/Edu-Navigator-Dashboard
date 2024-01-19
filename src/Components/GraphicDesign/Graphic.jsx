import React from "react";
import "./Graphic.scss";
import playBtn from "./assests/Vector.png";

const data = [
  {
    id: "1",
    title: "1.1 Profit and loss",
    point: "2 points",
    img: playBtn,
    time: "15min",
  },
  {
    id: "2",
    title: "1.2 Speed, Distance and Time",
    point: "2 points",
    img: playBtn,
    time: "12min",
  },
  {
    id: "3",
    title: "1.3 Ratio and Proportion",
    point: "2 points",
    img: playBtn,
    time: "18min",
  },
  {
    id: "4",
    title: "1.3 Profit and loss",
    point: "2 points",
    img: playBtn,
    time: "28min",
  },
  {
    id: "5",
    title: "1.2 Speed, Distance and Time",
    point: "2 points",
    img: playBtn,
    time: "24min",
  },
  {
    id: "6",
    title: "1.3 Ratio and Proportion",
    point: "2 points",
    img: playBtn,
    time: "32min",
  },
  {
    id: "7",
    title: "1.3 Profit and loss",
    point: "2 points",
    img: playBtn,
    time: "46min",
  },
];

const Graphic = () => {
  return (
    <div className="graphic">
      <p className="graphicDesign">Graphic Design</p>

      <div className="intro">
        <p className="intro1">Introduction to Graphic Design</p>
        <p className="des">
          This module provides an overview of the course and a review of the
          main tools used in descriptive statistics to visualize inform
        </p>

        <div className="points">
          {data.map((item) => (

            <div key={item.id} className="items">

              <div className="title">
                <p>{item.title}</p>
              </div>

              <div className="point">
                <p>{item.point}</p>
                <div className="playBtn">
                  <img src={item.img} alt="" />
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphic;

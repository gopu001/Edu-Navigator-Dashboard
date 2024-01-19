import React from "react";
import "./Middle_Part.scss";
import dateImg from "./assests/datepng.png";
import universityImg from "./assests/University.svg";

const collegeData = [
  {
    id: 1,
    degree: "Bachelors in Science (BSc)",
    stream: "Computer Engineering",
    img: universityImg,
    college: "Harvard University, Cambridge",
    cgpa: 3.72,
    img2: dateImg,
    date: "2019-2023",
  },
  {
    id: 2,
    degree: "Bachelors in Science (BSc)",
    stream: "Computer Engineering",
    img: universityImg,
    college: "Harvard University, Cambridge",
    cgpa: 3.72,
    img2: dateImg,
    date: "2019-2023",
  },
  {
    id: 3,
    degree: "Bachelors in Science (BSc)",
    stream: "Computer Engineering",
    img: universityImg,
    college: "Harvard University, Cambridge",
    cgpa: 3.72,
    img2: dateImg,
    date: "2019-2023",
  },
];

const Middle_Part = () => {
  return (
    <div className="middle_top">
   <p className="educationDetails">Education Details</p>
    
    <div className="middle_part">
      
      {collegeData.map((item) => (
        <div key={item.id} className="cards">
          
            <div className="degree">
              <p className="bsc">{item.degree}</p>
              <div className="stream">{item.stream}</div>
            </div>

            <div className="college">
              <img src={item.img} alt="" />
              <p className="college_name">{item.college}</p>
            </div>
          

          <div className="down_part">
            <div className="cgpa">
              <p className="rank">{item.cgpa}<span style={{
                color: '#2F4362',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '38px',
              }}>GPA</span></p>
              
            </div>

            <div className="calendar">
              <img src={item.img2} alt="" />
              <p className="data">{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Middle_Part;

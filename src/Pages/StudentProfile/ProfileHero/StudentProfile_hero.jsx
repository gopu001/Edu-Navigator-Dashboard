import React from "react";
import "./Style.scss";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import Top_Part1 from "../Top_Part/Top_Part1";
import Middle_Part from "../Middle_Part/Middle_Part";
import Last_Part from "../Last_Part/Last_Part";

const StudentProfile_hero = () => {
  return (
    <div className="student_profile_hero_main_container">
      <Sidebar/>
      <div className="profile_hero">
        <Navbar/>
        <div className="parts">
        <Top_Part1 />
        <Middle_Part />
        <Last_Part />
        </div>
        
      </div>
    </div>
  );
};

export default StudentProfile_hero;

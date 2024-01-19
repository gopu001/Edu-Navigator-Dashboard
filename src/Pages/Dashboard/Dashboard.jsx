import React from "react";
import "./../Dashboard/dashboard.css";
// import { BsFillGridFill } from "react-icons/bs";
import dashboard from './../../assets/dashboard.png'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">       
         <img src={dashboard} alt="" />
         <p>Dashboard</p>
      </div>
    </>
  );
};

export default Dashboard;

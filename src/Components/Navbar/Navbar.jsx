import "./../Navbar/Navbar.css";
import { FaRegBell } from "react-icons/fa6";
import './../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="student">
          <h1>Student Dashboard</h1>
        </div>
        <div className="icon">
          <FaRegBell />
        </div>
      </div>
    </>
  );
};

export default Navbar;

import "./../Hero/Hero.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import MiddleContent from "./../MiddleContent/MiddleContent";

const Hero = () => {
  return (
    <>
      <div className="bars">
        <Sidebar />
        <div className="container">
          <Navbar />
          <MiddleContent />
        </div>  
      </div>
    </>
  );
};

export default Hero;

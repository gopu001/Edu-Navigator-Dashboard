import './../Sidebar/Sidebar.css'
import { CgMenuGridR } from "react-icons/cg";

// ----------------------------------------------------IMAGES--------------------------------------------- //
import logo from './../../assets/Group.png';
import profile_image from './../../assets/Image.png';
import medal from './../../assets/medal_1.png';
import shield from './../../assets/002-shield.png';
import Dashboard from '../../Pages/Dashboard/dashboard';
import English from '../../Pages/English/english';
import Logical from '../../Pages/Logical_Reasoning/logical';
import Csep from '../../Pages/CSEP/csep';
import Csap from '../../Pages/CSAP/csap';
import Job from '../../Pages/Job/job';
import Refer from '../../Pages/Refer_Earn/refer';
import Support from '../../Pages/Support/support';
import Interview from '../../Pages/Interview/interview';
import Logout from '../../Pages/Logout/Logout';




const Sidebar = () => {

  
  return (
   <>
     <div className="sidebar">

        {/* -------------------------------------------------LOGO-------------------------------------------------------- */}
     <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* --------------------------------------------------PROFILE--------------------------------------------------- */}
      <div className="profile">
        <div className="details">
            <img src={profile_image} alt="Profile Image" />
            <p>Katie Pena</p>
        </div>
        <div className="levels">
            <div className="medal">
                <img src={medal} alt="Medal_Image" />
                <p>3,963</p>
            </div>
             <div className="shield">
               <img src={shield} alt="Shiled_Image" />
               <p>Primary Level</p>
             </div>
        </div>
      </div>


{/* ---------------------------------------------------------SECTIONS---------------------------------------------------------------------- */}

     <div className="sections">
        <Dashboard/>
        <English/>
        <Logical/>
        <Csep/>
        <Csap/>
        <Job/>
        <Refer/>
        <Support/>
        <Interview/>
        <Logout/>
     </div>
     </div>
   </>
  )
}

export default Sidebar;



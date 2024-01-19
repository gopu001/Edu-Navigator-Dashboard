import React from "react";
import "./SignUp.scss";
import coverImg from "./assests/Cover .png";
import google from './assests/google.svg'
import { Link } from "react-router-dom";

const SignUp = () => {
  
  

  return (
    <div>
      <div className="signup">
        <div className="left">
          <img src={coverImg} alt="Image" />
        </div>
        <div className="right">
          <p>Sign Up for an Account</p>


       <form>
        <div className="name">
        <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name"/>
        </div>
          <input type="email" placeholder="Email Id" className="email" />
          <input type="password" placeholder="Password" className="password" />
          <label><input type="checkbox"/>By creating an account means you agree to the Terms
           & Conditions and our Privacy Policy</label>

           <button>Sign Up</button>
       </form>
        
        <div className="signUpWith">
            <hr />
            <p>Or sign up with</p>
            <hr />
        </div>

        <div className="signInWith">
            <img src={google} alt="" />
            <p>Sign in with Google</p>
        </div>

        <div className="signIn">
             <p>Already have an account? <Link to="/signin"><button>Sign In</button></Link></p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;

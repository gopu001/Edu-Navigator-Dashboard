import React, { useEffect, useState } from 'react'
import './SignIn.scss'
import coverImg from './assests/Cover.png'
import googleImg from './assests/google.svg'
import { Link } from 'react-router-dom'


const SignIn = () => {
   
  const initialValues = {email:'', password:''}
  const[formValues, setFormValues] = useState(initialValues);
  const[formErrors, setFormErrors] = useState({})
  const[isSubmit, setIsSubmit] = useState(false)


  const handleChange = (e) => {
   const {name, value} = e.target;
   setFormValues({...formValues, [name]:value})
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setFormErrors(validate(formValues))
  setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors) === 0 && isSubmit ){
     console.log(formValues)
    }
  },[formErrors,isSubmit,formValues])

  const validate = (values) => {
   const errors = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(!values.email){
    errors.email = "Email is required!"
   }else if(!regex.test(values.email)){
    errors.email = "Enter valid email!"
   }
   if(!values.password){
    errors.password = "Password is required!"
   }else if(values.password.length < 8 || values.password.length > 12){
    errors.password = "Password must be in between 8 & 12 characters"
   }
   console.log(errors)
   return errors;
  }

  return (
    <div className='signIn'>
      <div className="left">
        <img src={coverImg} alt="" />
      </div>
      <div className="right">
        <div className="text">
            <h2>Sign In to your Account</h2>
            <p>Welcome back! please enter your details</p>
        </div>

        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Email Id' name='email' value = {formValues.email} onChange={handleChange} />
            <p>{formErrors.email}</p>
            <input type="password" placeholder='Password' name='password' value = {formValues.password} onChange={handleChange} />
            <p>{formErrors.password}</p>


              <button type='submit' className='forgot'>Forgot Password?</button>

              
            {Object.keys(formErrors).length === 0 && isSubmit ? (<Link to="/hero"><button type='submit' className='signBtn'>Sign In</button></Link>) : (<button type="submit" className="signBtn" disabled>
            Sign In
          </button>) }
        
        
        </form>

        
        <div className="signWith">
            <hr />
            <p>Or sign in with</p>
            <hr />
        </div>
        <div className="google">
          <img src={googleImg} alt="" />
          <p>Sign in with Google</p>
        </div>

        <div className="signUp">
            <p>Don't have an account? <Link to="/"><button>SignUp</button></Link> </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn

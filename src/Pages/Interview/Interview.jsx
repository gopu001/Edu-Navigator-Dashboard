import React from 'react'
import './../Interview/interview.css';
import interview_img from './../../assets/fi_4415849.png'

const Interview = () => {
  return (
    <div className='interview'>
      <img src={interview_img} alt="" />
      <p>Interview</p>
    </div>
  )
}

export default Interview
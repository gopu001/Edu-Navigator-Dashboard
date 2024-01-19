import React from 'react'
import './../Job/job.css'
import bag from './../../assets/bag1.png'

const Job = () => {
  return (
    <div className='job'>
      <img src={bag} alt="Job Logo" />
      <p>Job</p>
    </div>
  )
}

export default Job
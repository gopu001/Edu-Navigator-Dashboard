import React from 'react'
import './../Refer_Earn/refer.css';
import gift from './../../assets/gift-box-with-a-bow1.png'

const Refer = () => {
  return (
    <div className='refer'>
      <img src={gift} alt="Refer Logo" />
      <p>Refer & Earn</p>
    </div>
  )
}

export default Refer
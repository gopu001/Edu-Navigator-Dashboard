import React from 'react'
import './../Support/support.css';
import chat from './../../assets/chat1.png'

const Support = () => {
  return (
    <div className='support'>
      <img src={chat} alt="Support Logo" />
      <p>Support</p>
    </div>
  )
}

export default Support
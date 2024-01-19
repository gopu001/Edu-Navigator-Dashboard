import React from 'react'
import './../CSAP/csap.css'
import openbook from './../../assets/book-open-cover.png'

const Csap = () => {
  return (
    <div className='csap'>
      <img src={openbook} alt="" />
      <p>CSAP</p>
    </div>
  )
}

export default Csap
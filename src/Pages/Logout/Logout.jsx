import React from 'react'
import logout from './../../assets/logout1.png'
import './../Logout/logout.css'

const Logout = () => {
  return (
    <div className='logout'>
        <img src={logout} alt="Logout Image" />
        <p>Logout</p>
    </div>
  )
}

export default Logout
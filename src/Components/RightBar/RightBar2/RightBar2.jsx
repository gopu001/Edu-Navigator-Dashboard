import React from 'react';
import './RightBar.scss';
import activeShield from './assests/activeShield.svg';

const RightBar2 = () => {
  return (
    <div className='RightBar2_box'>

        <p className='bookSlot'>Book A Slot</p>
        <div className="shield">
        <img src={activeShield} alt="" />
        <span>3</span>
        
        </div>
        
        <p className='des'>You want to level check your skill and eligibility by attending interview</p>
        <button>Book Slot</button>
      
    </div>
  )
}

export default RightBar2

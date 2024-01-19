import React from 'react';
import './RightBar.scss';
import img from './assests/teachingImg.svg';

const RightBar3 = () => {
  return (
    <div className='RightBar3_Box'>

        <p className='careerPedia'>CareerPedia</p>
        <img src={img} alt="" />
        <button>Proceed</button>
      
    </div>
  )
}

export default RightBar3

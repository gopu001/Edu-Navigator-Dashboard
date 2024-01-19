import React from 'react'
import './MiddleContent.scss'
import Student from '../StudentDashboard/Student'
import Progress from '../ProgressBar/Progress'
import Graphic from '../GraphicDesign/Graphic'
import Last from '../LastCard/Last'
import RightBar_Hero from '../RightBar/RightBar_Hero'

const MiddleContent = () => {
  return (
    <div className="middle_main_container">
    <div className='middle'>
      <Student/>
      <Progress/>
      <Graphic/>
      <Last/>
    </div>
    <div className="right">
      <RightBar_Hero/>
      </div>
    </div>
  )
}

export default MiddleContent

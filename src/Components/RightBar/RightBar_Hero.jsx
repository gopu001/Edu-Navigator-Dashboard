import React from 'react'
import './RightBar_Hero.scss'
import RightBar1 from './RightBar1/RightBar1'
import RightBar2 from './RightBar2/RightBar2'
import RightBar3 from './RightBar3/RightBar3'

const RightBar_Hero = () => {
  return (
    <div className='right_hero'>

       <RightBar1/>
       <RightBar2/>
       <RightBar3/>
    
    </div>
  )
}

export default RightBar_Hero

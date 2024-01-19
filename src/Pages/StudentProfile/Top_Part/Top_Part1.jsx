import React from 'react'
import './Top_Part1.scss'
import profileImg from './assests/profile.jpg'
import BorderColorOutlinedIcon  from '@mui/icons-material/BorderColorOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import image from './assests/Image.svg'

const Top_Part1 = () => {
  return (
    <div className='top_part1'>
      <div className="left_part">
        <div className="profile_Img">
          <img src={image} alt="" />
        </div>
        <div className="details">   
           <p className='name'>Katie Pena</p>

           <div className="contacts">  

           <div className="contact">
            <WifiCalling3OutlinedIcon style={{color:'#7D8FB3'}}/>
            <p>+91-94xxxxxx45</p>
            </div> 
            <div className="contact">
               <MailOutlinedIcon style={{color:'#7D8FB3'}}/>
               <p>katiepena@gmail.com</p>
            </div>

           </div>

        </div>
      </div>


      <div className="right_part">
         <BorderColorOutlinedIcon style={{color:'#7D8FB3', width:'32px', height: '32px'}}/>
        <button>Change Password</button>
      </div>
    </div>
  )
}

export default Top_Part1

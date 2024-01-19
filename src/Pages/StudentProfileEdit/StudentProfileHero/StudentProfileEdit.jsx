import './StudentProfileEdit.scss';
import medal from './assests/meda1.svg';
import shield from './assests/shield.svg';
import Content from './assests/Content.svg';
import noImg from './assests/no-image.jpg';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Sidebar from './../../../Components/Sidebar/Sidebar'
import Navbar from './../../../Components/Navbar/Navbar'
import { useState } from 'react';

const details = [
  {
    id : 1,
    title : 'Personal Information',
    des : 'Lorem consectetur adipiscing elit.',
  },
  {
    id : 2,
    title : 'Contact Details',
    des : 'Lorem consectetur adipiscing elit.',
  },
  {
    id : 3,
    title : 'Education Detials',
    des : 'Lorem consectetur adipiscing elit.',
  },
  {
    id : 4,
    title : 'Work Experience',
    des : 'Lorem consectetur adipiscing elit.',
  },
]

const StudentProfileEdit = () => {

  const[file,setFile] = useState("");

  return (
    <div className="student_profile_edit">
 <Sidebar/>

<div className='student_profile_edit_main_container'>
  <Navbar/>
  <div className="main_container">

  
      <div className="left_part">
        <div className="left_top">

          <div className="image">
            <img src={file ? URL.createObjectURL(file) : {noImg} } alt='' />
            {/* <img src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg' alt="" /> */}
            <label htmlFor='file'>Upload Image: <DriveFolderUploadOutlinedIcon/></label>
            <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:'none'}}/>
            
          </div>

          <div className="rank">
            <div className="medal">
              <img src={medal} alt="" />
              <p>3,963</p>
            </div>

            <div className="medal">
              <img src={shield} alt="" />
              <p>Primary Level</p>
            </div>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


        <div className="left_bottom">
          <div className="left_progress">
            <img src={Content} alt="" />
            <img src={Content} alt="" />
            <img src={Content} alt="" />
            <img src={Content} alt="" />
          </div>

          <div className="right_details">
            <div className="details">
                {
                  details.map((item) => (
                    <div key={item.id} className="detail">
                      <p className='title'>{item.title}</p>
                      <p className='des'>{item.des}</p>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>


      {/* RIGHT PART */}
      <div className="right_part">
        <div className="frame">
          <div className="details">
          <p className='personal'>Personal Details</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
          </div>
          
          <form>
            <div className="formInput">
              <label>First Name</label>
              <input type="text" placeholder='Enter First Name'/>
            </div>
            <div className="formInput">
              <label>Last Name</label>
              <input type="text" placeholder='Enter Last Name'/>
            </div>
            <div className="formInput">
              <label>Registered Email Id</label>
              <input type="email" placeholder='nikhil@gmail.com'/>
            </div>
            <div className="formInput">
              <label htmlFor='datePicker'>Date of Birth</label>
              <input type="date" id='datePicker' placeholder='20 Apr 2001'/>
            </div>
            <div className="formInput">
              <label>Registered Mobile Number</label>
              <input type="text" placeholder='91xxxxxx09'/>
            </div>
            <div className="formInput">
              <label>LinkedIn Profile</label>
              <input type="text" placeholder='http:// www.linkedin.com'/>
            </div>
          </form>

          <div className="details">
          <p className='personal'>Contact Details</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
          </div>


          <form>
            <div className="formInput">
              <label>Address Line</label>
              <input type="text" placeholder='Ex:CareerPedia,Durgam Cheruvu, Hyderabad'/>
            </div>
            <div className="formInput">
              <label>City</label>
              <input type="text" placeholder='Ex:Hyderabad'/>
            </div>
            <div className="formInput">
              <label>District</label>
              <input type="text" placeholder='Ex:Nirmal'/>
            </div>
            <div className="formInput">
              <label>State</label>
              <input type="text" placeholder='Ex:Telangana'/>
            </div>
            <div className="formInput">
              <label>PinCode</label>
              <input type="text" placeholder='Ex:500081'/>
            </div>
            <div className="formInput">
              <label>Country</label>
              <input type="text" placeholder='Ex:India'/>
            </div>
          </form>

          


        </div>
      </div>
      </div>
    </div>

    </div>
  
  )
}

export default StudentProfileEdit

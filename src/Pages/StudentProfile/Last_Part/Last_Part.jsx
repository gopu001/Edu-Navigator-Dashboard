import React from 'react'
import './Last_Part.scss'

const experienceData = [
    {
        id : 1,
        company : 'Apple',
        role : 'Software Developer',
        experienceYear : '2',
        experienceMonth : '6',
        startDate : '01/01/2021',
        endDate : '31/07/2023',
    },
    {
        id : 2,
        company : 'Apple',
        role : 'Software Developer',
        experienceYear : '2',
        experienceMonth : '6',
        startDate : '01/01/2021',
        endDate : '31/07/2023',
    },
    {
        id : 3,
        company : 'Apple',
        role : 'Software Developer',
        experienceYear : '2',
        experienceMonth : '6',
        startDate : '01/01/2021',
        endDate : '31/07/2023',
    },
]

const Last_Part = () => {
  return (
     
    <div className="last_top">

   <p className='experienceDetails'>Experience Details</p>

    <div className='last_part'>
       {
        experienceData.map((item) => (
            <div key={item.id} className='cards'>
              <div className="company">
                <p className='company_name'>{item.company}</p>
                <p className='role'>{item.role}</p>
              </div>
              <div className="experience">
                <p className='years'> {item.experienceYear}<span style={{color: '#2F4362',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '38px'}}>Y</span> {item.experienceMonth}<span style={{color: '#2F4362',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '38px'}}>M</span> </p>
                <div className="date">
                    <p>Start:{item.startDate}</p>
                    <p>End:{item.endDate}</p>
                </div>
              </div>
            </div>
        ))
       }
    </div>
    </div>
  )
}

export default Last_Part

import React from 'react'
import './../English/english.css'
import book from './../../assets/book.png'

const English = () => {
  return (
    <>
    <div className='english'>
    <img src={book} alt="Book Image" />
    <p>English</p>
    </div>
    </>
  )
}

export default English
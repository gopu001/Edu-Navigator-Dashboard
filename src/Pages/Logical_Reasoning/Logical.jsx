import React from 'react';
import './../Logical_Reasoning/logical.css';
import puzzle from './../../assets/puzzle.png'

const Logical = () => {
  return (
    <div className='logical'>
      <img src={puzzle} alt="Puzzle_Image" />
      <p>Logical Reasoning</p>
    </div>
  )
}

export default Logical
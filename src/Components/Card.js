import React, { useState } from 'react'
import "../styles/style.css"
import starry from "../Images/suns.png"
const Card = ({id,painting,author,image, handleClick}) => {
  return (
    <div className='card' onClick={()=>{handleClick({id})}}>
        <div className='image'>
            <img src={image} alt={painting}/>
            <div className='text'>
            <h2 className='painting-name'>{painting}</h2>
            <p className='author'>{author}</p>
        </div>
        </div>
    </div>
  )
}

export default Card
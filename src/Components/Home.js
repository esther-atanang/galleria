import React from 'react'
import { useState } from 'react'
import Card from "./Card"

const Home = ({cards}) => {
  const[currentId, setId] = useState(null)
  function onHandleClick(theId){
     setId(theId)
  }

  return (
    <div className="displays">
            {cards.map((value)=><Card key={value.id} id={value.id} painting={value.painting} author={value.painter} image={value.image} handleClick={onHandleClick}/>)}
            {currentId && <div className='overlay'>
               {cards.map((value) =>{
                 
                 if(value.id === currentId.id){
                    
                    return <div className='overlay-inside'>
                      <div className='close-btn'><button  onClick={()=>{setId(null)}}>close</button></div>
                       <div><img src={value.image}/></div>
                    </div>
                 }
               })}
            </div>}
    </div>
  )
}

export default Home
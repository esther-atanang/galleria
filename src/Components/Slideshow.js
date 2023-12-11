import React from 'react'
import { useState } from 'react'
const Slideshow = ({image, painter_name, painting_name, painter_img, width, desc,handleWidth,decrease,year}) => {
  const[isTrue, setTrue] = useState(false)
  return (
    <div className='main'>
        <div className='slide'>
         <div className='first-slide'>
         <div className='image'>
                <img src={image} alt="painting"/> 
                <div className="view-btn" onClick={()=>{setTrue(true)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7.71431 0L9.21432 1.5L6.85718 3.85714L8.14288 5.14285L10.5 2.78571L12 4.28571V0H7.71431Z" fill="white"/>
                <path d="M3.85714 6.85715L1.5 9.21429L0 7.71428V12H4.28571L2.78571 10.5L5.14285 8.14285L3.85714 6.85715Z" fill="white"/>
                <path d="M8.14288 6.85715L6.85718 8.14285L9.21432 10.5L7.71431 12H12V7.71428L10.5 9.21429L8.14288 6.85715Z" fill="white"/>
                <path d="M4.28571 0H0V4.28571L1.5 2.78571L3.85714 5.14285L5.14285 3.85714L2.78571 1.5L4.28571 0Z" fill="white"/>
                </svg>
                <p >view image</p>
                </div>
             </div>
             <div className="desc">
                 <div className="title">
                    <h2>{painting_name}</h2>
                    <p> {painter_name}</p>
                 </div>
                 <div className="painter-img"><img src={painter_img} alt="thepainter"/></div>
             </div>
         </div>
        

             <div className="details">
                <p>{desc}</p>
                <a href="#">go to source</a>
                <div className="date"><p>{year}</p></div>
             </div>
        </div>

        <div className="footer">
            <div className="title">
               <h3>{painting_name}</h3>
               <p>{painter_name}</p>
            </div>
           
            <div className="controls">
            <div className='backward' onClick={decrease}>
            <svg xmlns="http://www.w3.org/2000/svg" width="91" height="24" viewBox="0 0 1 24" fill="none">
            <path d="M24.166 1.84344L3.6275 12.1127L24.166 22.382V1.84344Z" stroke="black" stroke-width="2"/>
            <rect x="-0.371478" y="0.371478" width="0.742956" height="23.0316" transform="matrix(-1 0 0 1 0.743372 0)" fill="#D8D8D8" stroke="black" stroke-width="0.742956"/>
            </svg>
            </div>
            <div className='forward'  onClick={handleWidth}>
           <svg xmlns="http://www.w3.org/2000/svg" width="91" height="24" viewBox="90 0 1 24" fill="none">
    <path d="M66.5273 1.84344L87.0659 12.1127L66.5273 22.382V1.84344Z" stroke="black" stroke-width="2"/>
    <rect x="89.5785" y="0.371478" width="0.742956" height="23.0316" fill="#D8D8D8" stroke="black" stroke-width="0.742956"/>
</svg>

            </div>
            
            </div>
            
            <div className="bar"><progress value={width} max="100"> 50%</progress> </div>
        </div>

        <div className={isTrue ? "full" : "close"}>
         <div className='inner'>
         <div className='text' onClick={()=>{setTrue(false)}}><p>close</p></div>
           <div className='image'><img src={image} alt="painting"/></div>
         </div>
           
        </div>
    </div>
  )
}

export default Slideshow
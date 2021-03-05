import React,{useState} from 'react'
import "./Slider.css";
export default function ImageSlider({images,unique}) {
    
   
   
    const index= images.findIndex((element, index) => {
        if (element.id === unique) {
          return true
        }
      })
      
   const [ind, setind] = useState(index)
 const right=">"
 const left="<"     
 
    return (
        <div className="slider">
            <button className="left-arrow" onClick={()=>{setind(ind-1)}}> {left} </button>
            {ind<0?null:<img  src={images[ind].urls.regular}/>}
            
            <button className="right-arrow" onClick={()=>{setind(ind+1)}}> {right} </button>
            
        </div>
    )
}

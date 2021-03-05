import React, {useState,useEffect} from 'react'
import ImageSlider from "../ImageSlider"


function Image  ({url, id, img}) {
    const [visible, setvisible] = useState(false)

    return (
            
            <div >
            <div onClick={()=>setvisible(!visible)} className="img_main">
            <img src={url} />
            </div>
            {visible?<><ImageSlider images={img} unique={id} /> <button className="cross" onClick={()=>setvisible(false)}>X</button></>:null}
            </div >
            
            )
}

export default Image

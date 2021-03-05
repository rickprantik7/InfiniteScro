import {useState,useEffect} from 'react'
import './App.css';
import Heading from "./comp/Heading"
import Image from "./comp/Image"
import Loader from "./comp/Loader"
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component"
import Masonry from 'react-masonry-css';
import ImageSlider from "./ImageSlider"
function App() {
  
  const [images, setimages] = useState([])
  const [visible, setvisible] = useState(false)  
  useEffect(() => {
  fetchImage()  
  }, [])
  
  const fetchImage= ()=>{
    const apiroot="https://api.unsplash.com"
    const accessKey=process.env.REACT_APP_AKEY
    axios
    .get(`${apiroot}/photos/random?client_id=${accessKey}&count=100`)
    .then(res=>{console.log(res.data);setimages([...images,...res.data])})

  }
  const breakThroughCOl={
   default:6,
   1200:3,
   992:3,
   768:2,
   576:1 
  }
  
  return (
    <div  className="App">
      
      <Heading img={images} />
      
      <div>
      <InfiniteScroll
      dataLength={images.length}
      next={fetchImage}
      hasMore={true}
      loader={<Loader/>}
      >
      
       
      <div className="mansry">
      
            
        
      {images.map(img=>{
       return <div onClick={()=>setvisible(true)}> 
        <Image url={img.urls.regular} id={img.id} img={images} />
        </div>
      })}
      </div>
      
      
                 
      

      </InfiniteScroll>
      </div>
      </div>
  );
}

export default App;

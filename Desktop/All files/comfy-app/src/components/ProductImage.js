import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const ProductImage = ({images}) => {
    // const url = images[0].url;
    console.log(images)

    const [main, setMain] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [mains, setMains] = useState(images[0]);
    useEffect(()=>{
     if(images){
      setMain(images[0])
      
      setLoading(false)
    }
    },[images])
    // useEffect(()=>{
    //   setMain([])
    // },[])
    console.log(images)
console.log(main)
if(loading){
  return <Loading/>
}

  return (
    <div>
      
      {/* <img src={images[0]?.url} alt='' className='main ' /> */}
      <img src={main?.url} alt='' className='main ' />
      <div className='images'>
        {images?.map((item, index) =>{
            return (
                <img src={item.url} className='active' onClick={() => setMain(images[index])}
                 key={index} />
            )
        })}
     
      </div>
   </div>
  )
}

export default ProductImage

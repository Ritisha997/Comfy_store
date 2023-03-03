import React, { useState } from 'react'

const ProductImage = ({images=[[]]}) => {
    console.log(images)
    const [main, setMain] = useState(images[0]);
    const [mains, setMains] = useState(images[0]);
console.log(main)

  return (
    <div>
      {/* <img src={images[0].url} alt='' className='main ' /> */}
      <img src={mains.url} alt='' className='main ' />
      <div className='images'>
        {images.map((item, index) =>{
            return (
                <img className='active' onClick={() => setMains(images[index])}
                 key={index} src={`${item.url}`}/>
            )
        })}
      </div>
    </div>
  )
}

export default ProductImage

import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../context/Product_context'
import Navbar from './Navbar'


const Home = () => {
  const {products: products} = useProductsContext()
  console.log(products)
  const [product, setProduct] = useState([]);
  // const [productss, setProductss] = useState([]);
  const [index, setIndex] = useState(0);

const [loading, setLoading] = useState(true);
const hello = products.filter(item =>{
  return item.category === 'living room'
})
// if(products){
//   setProduct(hello)
// }

// useEffect(()=>{
  
//   setLoading(false)
// },[])

// useEffect(()=>{
//   setProduct(hello)
//   setLoading(false)
// },[productss])
useEffect(()=>{
  
  if(hello){
    setProduct(hello)
    setLoading(false)
  }
},[products])


console.log(product)
const nextSlide = () =>{
  setIndex((oldIndex) =>{
    let index = oldIndex + 1
    if(index > product.length - 1){
      index = 0
    } 
    return index
  })
}

const prevSlide = () =>{
  setIndex((oldIndex)=>{
    let index = oldIndex - 1
    if(index < 0){
      index = product.length -1
    }
    return index
  })
}
if(loading) return <p>Loading...</p>


 
// useEffect(()=>{
//   if(loading) return 
//   setProduct(hello[index])
// },[])
 
  console.log(product)
  return (
    <section className='category'>
   
    <div className='category-item'>
    <div className='cat'></div>
       <img src={product[index]?.image}/>
      <div className='overlay'>
           <Navbar/>
           <div className='btn-slider'>

          <button className='prev' onClick={prevSlide}>Prev</button>
           <button className='next' onClick={nextSlide}>Next</button>
           </div>

      </div>
       
    </div>
    </section>
  )
}

export default Home

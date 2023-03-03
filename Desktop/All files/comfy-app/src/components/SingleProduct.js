import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductImage from './ProductImage';

const SingleProduct = () => {
const url = 'https://course-api.com/react-store-single-product?id=';
const [single, setSingle] = useState({});
const [loading, setLoading] = useState(false)
const {id} = useParams();

console.log(id)
// setLoading(true)
const fetchSingle = async (url) =>{
  // setLoading(false)
 const resp = await fetch(url)
 const data = await resp.json()
  console.log(data)
  setSingle(data)
}


useEffect(()=>{
  fetchSingle(`${url}${id}`);
},[id])
console.log(single.images)
const {name, images} = single
console.log(images)
  return (

    <div>
      <ProductImage images={images}/>
      <string>{name}</string>
    </div>
  )
}

export default SingleProduct

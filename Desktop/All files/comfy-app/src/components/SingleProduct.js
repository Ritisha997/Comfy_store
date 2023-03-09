import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/Product_context'
import AddToCart from './AddToCart';
import Loading from './Loading';
import ProductImage from './ProductImage';

const SingleProduct = () => {
  const {fetchSingle, onTheCart, product: product, loading: isLoading} = useProductsContext();

 
const url = 'https://course-api.com/react-store-single-product?id=';
const [single, setSingle] = useState({});
const [loading, setLoading] = useState(true);
// const [amount, setAmount] = useState(1);
const {id} = useParams();

// setLoading(true)

// const setDecrease = () =>{
//   amount > 1 ? setAmount(amount - 1) : setAmount(1)
// }

// const setIncrease = () =>{
//   amount < single.stock ? setAmount(amount + 1) : setAmount(single.stock)
// }


useEffect(()=>{
  fetchSingle(`${url}${id}`);
 setLoading(false)
},[id])

if (loading) {
  return <Loading/>;
}


const {name, images} = single

  return (

    <div className='single-product' key={product.id}>
      <ProductImage images={product.images}/>
      <div className='single-product__sub'>

      {/* <string>{product.name}</string> */}
      
      <div> 
      {product.stock > 0 && <AddToCart product={product}/>}
         </div>
         </div>
    </div>
  )
}

export default SingleProduct

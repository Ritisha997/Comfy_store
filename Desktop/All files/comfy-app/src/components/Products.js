import React from 'react'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/Product_context'
import './index.scss'


const Products = () => {
    const {products: products} = useProductsContext();
    console.log(products)
  return (
    <section  className='grid-col'>
    
      {products  .map(item =>{
        return <article className='grid-col2'>
          <div className='sub-content' key={item.id}>
            <img className='img' src={item.image}/>
            <strong>{item.name}</strong>
            <p>{item.price}</p>
           <Link to={`/singleProduct/${item.id}`}>{item.id}details</Link>
          </div>
        </article>
      })}
 
    </section>
  )
}

export default Products

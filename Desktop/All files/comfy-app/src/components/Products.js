import React from 'react'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/Product_context'
import './index.scss'
import Navbar from './Navbar';


const Products = () => {
    const {products: products} = useProductsContext();
    console.log(products)
  return (
    <div>
        <Navbar/>
    <section  className='grid-col'>
    
      {products  .map(item =>{
        return <article key={item.id}>
          <div className='grid-col2'>
          <div className='sub-content'>
            <img className='img' src={item.image} />
            <strong>{item.name}</strong>
            <p className='price'>{item.price}</p>
           {/* <Link  to={`/singleProduct/${item.id}`}>details</Link> */}
           <div className='search-overlay'>
          <Link className='icons' to={`/singleProduct/${item.id}`}>0</Link>
          </div>
          </div>
          </div>

        </article>
      })}
 
    </section>
    </div>
  )
}

export default Products

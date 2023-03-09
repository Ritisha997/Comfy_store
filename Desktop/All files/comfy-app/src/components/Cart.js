import React, { useEffect, useState } from 'react'
import { useProductsContext } from '../context/Product_context'


const Cart = () => {
    const {cart: cart} = useProductsContext();
    console.log(cart)
    const [cont, setCont] = useState(cart)
    const [con, setCon] = useState(cart)


   
 const removeItem = (id) =>{

   const newCart = con.filter(item => item.id !== id)
    setCon(newCart)
  console.log(con)
  }  


  return (
    <div>
      <article>
        {con.map(item =>{
          return <div key={item.id} className='cart'>
            <div>
            <img src={item.image}/>
            {/* <p>{max}</p> */}
            <p>{item.amount}</p>
            <p>{item.price}</p>
            <button onClick={() => removeItem(item.id)}>remove</button>
            </div>
          </div>
        })}
      </article>
    </div>
  )
}

export default Cart

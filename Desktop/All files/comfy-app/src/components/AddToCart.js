import React from 'react'
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/Product_context'

const AddToCart = ({product}) => {
    const [amount, setAmount] = React.useState(1);
    console.log(amount)
const {onTheCart} = useProductsContext();
console.log(product)
    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
      }
      
      const setIncrease = () =>{
        amount < product.stock ? setAmount(amount + 1) : setAmount(product.stock)
      }
  return (
    <div>
        <div>

      <button onClick={setDecrease}>prev</button>
      <p>{amount}</p>
      <button onClick={setIncrease}>next</button>
        </div>
        <Link onClick={()=>onTheCart(product.id, amount, product)} to='/cart'>Add to cart</Link>

    </div>
  )
}

export default AddToCart

import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
import { json, useParams } from 'react-router-dom';
// import reducer from '../constants/reducers';
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const ProductsContext = React.createContext()

const defaultState ={
    isSidebarOpen: false,
    isSideBarClose: true,
    products: [],
    featured_products: [],
    isLoading: false,
    product: {},
    cart: []
}

const reducer = (state,action) =>{
    // console.log(action.payload)
       if(action.type === 'FETCH_PRODUCT_ITEM'){
          return ({...state, isLoading: true})
       }
      
       if(action.type === 'GET_PRODUCTS'){
           
             return {
               ...state,
               products: action.payload,
             
             }
       }
       if (action.type === 'GET_PRODUCTS_ERROR') {
           return { ...state, products_loading: false, products_error: true }
         }
      
         if(action.type === 'GET_CART_LOADING') {
            return {...state,isLoading: true}
         }
         if(action.type === 'GET_SINGLE_PRODUCT'){
            console.log(action.payload)
            return {...state, isLoading: false, product: action.payload}
         }
         if(action.type === 'GET_ERROR_SINGLE'){
            return {...state, isLoading: false, products_error: true}
         }
       
         if (action.type === 'ADD_TO_CART') {
        
            const { id, amount, product } = action.payload
            console.log(amount)
            const tempItem = state.cart.find((i) => i.id === id)
            if (tempItem) {
              const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id ) {
                  let newAmount = cartItem.amount + amount
                  if (newAmount > cartItem.max) {
                    newAmount = cartItem.max
                  }
                  return { ...cartItem, amount: newAmount }
                } else {
                  return cartItem
                }
              })
              return { ...state, cart: tempCart }
              
            } else {
              console.log(product)
              const newItem = {
                id: id,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock,
              }
              return { ...state, cart: [...state.cart, newItem] }
            }
          }
   


}

const url ='https://course-api.com/react-store-products';


export const ProductsProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, defaultState);


// setLoading(true)
const fetchSingle = async (url) =>{
  // setLoading(false)
  
  dispatch({type: 'GET_CART_LOADING'})
 try {
    const resp = await axios.get(url)
    // console.log(resp)
    const product = resp.data
    // console.log(product)
    dispatch({type: 'GET_SINGLE_PRODUCT', payload: product})
 } catch (error) {
    dispatch({type:'GET_ERROR_SINGLE'})
 }
 
}


    const onTheCart = (id, amount, product) =>{
        dispatch({type: 'ADD_TO_CART', payload: {id, amount, product}})
        console.log(product)
    }

    React.useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },[state.cart])


//  const openSidebar =() =>{
//     dispatch({type:'OPEN_SIDEBAR'})
//  }
//  const closeSidebar = () =>{
//     dispatch({type:'CLOSE_SIDEBAR'})
//  }
 const fetchProduct = async() =>{
    dispatch({type: 'FETCH_PRODUCT_ITEM'})
    try {
        const response = await axios.get(url)
        const products = response.data
        // console.log(products)
        dispatch({type: 'GET_PRODUCTS', payload: products})
    } catch (error) {
        dispatch({ type: 'GET_PRODUCTS_ERROR' })
    }
 } 
useEffect(()=>{
    fetchProduct()
},[])

 return(
    <ProductsContext.Provider value={{...state, fetchProduct, fetchSingle, onTheCart}}>
        {children}
    </ProductsContext.Provider>
 )
}
export const useProductsContext = () =>{
    return useContext(ProductsContext)
}
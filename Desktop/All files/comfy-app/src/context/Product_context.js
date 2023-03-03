import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react'
// import reducer from '../constants/reducers';

const ProductsContext = React.createContext()
const defaultState ={
    isSidebarOpen: false,
    isSideBarClose: true,
    products: [],
    featured_products: [],
    isLoading: false
}



const reducer = (state,action) =>{
    console.log(action.payload)
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
        
       
   }
  

const url ='https://course-api.com/react-store-products'

export const ProductsProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, defaultState);

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
        console.log(products)
        dispatch({type: 'GET_PRODUCTS', payload: products})
    } catch (error) {
        dispatch({ type: 'GET_PRODUCTS_ERROR' })
    }
 } 
useEffect(()=>{
    fetchProduct()
},[])

 return(
    <ProductsContext.Provider value={{...state, fetchProduct}}>
        {children}
    </ProductsContext.Provider>
 )
}
export const useProductsContext = () =>{
    return useContext(ProductsContext)
}
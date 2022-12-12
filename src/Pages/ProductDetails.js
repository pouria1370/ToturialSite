import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
const ProductDetails = () => {
    const [state, setState] = useState("")
    const{productID}=useParams()

    useEffect(() => {
    (async function(){
        const result = await fetch(`https://dummyjson.com/products/${productID}`);
        const data=await result.json();
        setState(data)

    })()  
    }, [productID])
    return  !state?(<CircularProgress/>):(<div className='productDetail-container'>
        <div>Price: {state.price}</div>
        <div>Ratin: {state.rating}</div>
        <div>Stock: {state.stock}</div>
        <div>Brand: {state.brand}</div>
        <div>Category: {state.category}</div>
        </div>)
       
    
}

export default ProductDetails

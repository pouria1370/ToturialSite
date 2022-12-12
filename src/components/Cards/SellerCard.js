
import { CircularProgress, Rating } from '@mui/material';
import React from 'react'
import './SellerCard.css'
const SellerCard = ({productInfo}) => {
    
    return (
        <div className='SellerCard-container'>
            
            {!productInfo?<CircularProgress/>:<div className='SellerCard-maainInfo'>
            <div>name of Seller: {productInfo.title}   </div>
            <div>price: {productInfo.price-Math.round(Math.random()*8)}$</div>
            <Rating value={productInfo.rating-Math.round(Math.random()*6)} readOnly/>       
            </div>}          
            <div className='SellerCard-address'>
            <address>
            Iran,Tehran,Vanak,4
            </address>
            </div>
        </div>
    )
}

export default SellerCard

import React from 'react'
import './wall.css'
import ProductCard from '../productCard/ProductCard'

export default function Wall({productData,addToCart}){
    return(
        <div className='wall'>
 <ProductCard productData={productData} addToCart={addToCart}/>
        </div>

    )

}
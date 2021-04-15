import React from 'react'
import './productCard.css'
import RegularButton from '../button/RegularButton'


export default function ProductCard({productData,addToCart}){



return(

    productData.map((products,index) => 
        <div key = {index}>
        <div className="product-card-wrapper">
    <div className="product-image-wrapper"><img className="product-image" src = {products.image} alt = 'product'/></div>
    <div className="product-details">
    <div  className="product-name">{products.name}</div>
    <div className='product-category'>{products.category}</div>
    <div className="product-price">{products.price}</div>
    </div>
    {/* <div className="add-to-cart-button"><RegularButton regularButtonClick = {() => {handleclick(products.id)}} regularButtonName='Add To Cart'/></div> */}
    <div className="add-to-cart-button"><RegularButton regularButtonClick = {() => {addToCart(index)}} regularButtonName='Add To Cart'/></div>
    {/* <div className="add-to-cart-button"><RegularButton regularButtonClick = {addToCart} regularButtonName='Add To Cart'/></div> */}
</div>
        </div>
    
    
     



    )

)
}

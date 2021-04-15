import React from 'react'
import './cart.css'
import emptycart from './emptycart.png'
import StripeCheckout from  'react-stripe-checkout'

export default function Cart({productData,removeFromCart,cartData}){



   const handleToken = (token, addresses) =>{
        console.log(token)
    }

    let priceArray = cartData.map((value, index) =>{
       return value.price
    })
    console.log(priceArray)

        let totalPrice = priceArray.reduce((acc, curr) =>{
        return acc + curr
    },0)
    
    console.log(totalPrice)

if(cartData != ''){
    return(

<div className= 'cart-wrapper'>
<div className='cart-container'>
{cartData.map((value,index )=> <div className='cart-item-wrapper' key={index}>
    <div className='cart-product-image'>
    <img className='cart-image' alt='product' src={value.image} />
    </div>
<div className='cart-product-details'>

<div className='cart-product-name'>
   <div className='name-in-cart'> {value.name}</div>
<div className='category-in-cart'>{value.category}</div>
</div>
<div className='cart-product-action'>

    <div className='cart-product-price'><span style={{fontSize:'20px'}}>Price:</span> {value.price}</div>


    <div className='remove-button-wrapper'><div className='remove-button' onClick={() => {removeFromCart(index)} } >Remove</div></div>

</div>

</div>

    </div>)}

</div>
<div className='cart-right-pane'>
    <div className='order-summary-container'>
        <div className='order-summary-product-card'>
            <h3 className='card-header'>Order summary</h3>
            <section className='bag-total-container'>
                <span className='bill-content'>Bag Total</span>
                <span>{totalPrice}</span>
            </section>
            <section className='bag-discount-container'>
                <span className='bill-content'>Bag discount</span>
                <span>0</span>
            </section>
            <section className='delivery-container'>
                <span className='bill-content'>Delivery</span>
                <span>Free</span>
            </section>
            <section className='order-total-container'>
                <span className='bill-content'>Order Total</span>
    <span>{totalPrice}</span>
            </section>
        </div>

    </div>
    <div className='buy-button-container'>
        <StripeCheckout
        className='buy-button'
        stripeKey ='pk_test_51HdEPaHWTiRur5DYrUMa5hRHnmGyFgjoffthvQi13Sw8qKPXkHPB7aAytHkbjwgLxP9SWAZotYn0QT300F77bvkk0008pGqDBp'
        token = {handleToken}
        billingAddress
        shippingAddress
        amount={totalPrice * 100}
        />

    </div>
    </div>

</div>
)



}else{
    return(
        <div className='cart-container'>
            <img src={emptycart} alt='empty'/>
        </div>
    )
}

}



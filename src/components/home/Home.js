import React from 'react'
import './home.css'



export default function Home(props){
    return(

        <div className ="home-container">
            <div className='home-image'>
                <div className='blank'></div>
                <div className='home-quote'>
                  <span className='slogan-1'>We are making Pots </span>
                  <span className='slogan-1'>since</span>
                  <h1 className='slogan-1985'>1985.</h1>


                  <a className='home-order-button' href='/products' >Order now</a>


                </div>
            </div>

        </div>



    )
}
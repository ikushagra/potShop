import React,{Component} from 'react'
import './App.css';
import Home from './components/home/Home'
import ProductCard from './components/productCard/ProductCard'

import Contact from './components/contact/Contact'
import About from './components/About/About'
import Cart from './components/cart/Cart'

import Profile from './components/profile/Profile'
import Signup from './components/signup/Signup'
import { BiHomeAlt, BiCart,} from 'react-icons/bi';
import { HiOutlineUserCircle} from 'react-icons/hi';
import { GiFlowerPot} from 'react-icons/gi';
import { TiContacts} from 'react-icons/ti';
import {AiOutlineInfoCircle} from 'react-icons/ai';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      productData: [{id:1,name:"sienna", price:2000, category:"fiber", addedToCart: false, rating:0, color: "black",image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555519374-il-fullxfull-1539679188-2cme-1555519367.jpg?crop=0.803xw:1.00xh;0.0705xw,0&resize=480:*'},{id:2,name:"sienna", price:4000, category:"fiber", addedToCart: false, rating:0, color: "black",image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1555519374-il-fullxfull-1539679188-2cme-1555519367.jpg?crop=0.803xw:1.00xh;0.0705xw,0&resize=480:*'},
      {
          _id:'3',
          name: 'ochre',
          image: './images/p8.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'4',
          name: 'clay fingers',
          image: '/images/p1.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'5',
          name: 'sienna',
          image: '/images/ceramic.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'6',
          name: 'rain and peacock',
          image: '/images/metal.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'7',
          name: 'ochre',
          image: '/images/p8.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'8',
          name: 'rain and peacock',
          image: '/images/p1.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'9',
          name: 'The pot',
          image: '/images/metal.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'10',
          name: 'sienna',
          image: '/images/ceramic.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'11',
          name: 'ochre',
          image: '/images/p1.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'12',
          name: 'sienna',
          image: '/images/p2.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'13',
          name: 'clay fingers',
          image: '/images/p3.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'14',
          name: 'rain and peacock',
          image: '/images/p4.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'15',
          name: 'ochre',
          image: '/images/p5.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'16',
          name: 'clay fingers',
          image: '/images/p6.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'17',
          name: 'sienna',
          image: '/images/p7.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'18',
          name: 'The pot',
          image: '/images/p8.jpg',
          category: 'plastic',
          price: 2500,
          brand: 'mybrand',
          rating: 3.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },
      {
          _id:'19',
          name: 'clay fingers',
          image: '/images/p9.jpg',
          category: 'metal',
          price: 1400,
          brand: 'mybrand',
          rating: 4.5,
          numReviews: 10,
          info: "this is a product this is a product this is a product this is a product this is a product this is a product",
          addToCart:false
      },],
      cartData:[]
    }

  }

  testClick = () =>{
    console.log('hello')
  }

  testClick2 = () =>{
    console.log('byeee')
  }


  addToCart = (index) =>{


    const newProductData = [...this.state.productData]
    
    newProductData[index].addedToCart = true
    // console.log(newProductData[index].addedToCart)
    // console.log(index)

    this.setState({
      productData: newProductData
    })

    let newCartData = [...this.state.cartData]
    newCartData = this.state.productData.filter(value => value.addedToCart === true);
    this.setState({
      cartData: newCartData
    })
  }


  removeFromCart = (index) =>{
    let removeItemList = [...this.state.cartData]
    removeItemList[index].addedToCart = false
    removeItemList.splice(index,1);

    this.setState({
      cartData: removeItemList
    })
  }


  render(){
    let {productData, cartData } = this.state
    return (
      <Router>
      <div className="App">
        <nav className='nav'>
          {/* <div><img alt='logo' src={logo}/></div> */}

         <div className='icon-box'>
        <Link className='link-tag' to='/'>
          <BiHomeAlt className='menu-icon'/>Home
        </Link>
        </div> 

        <div className= 'icon-box'>
            <Link className='link-tag' to="/products">
            <GiFlowerPot className='menu-icon'/><span>Products</span>
            </Link>
          </div>

        <div className='icon-box' handleClick = {() => {this.testClick()}} menuButtonName='Home'>
        <Link className='link-tag' to="/about">
        <AiOutlineInfoCircle className='menu-icon'/><span>About</span>
        </Link>
        </div>

        <div className='icon-box'>
        <Link className='link-tag' to="/contact">
        <TiContacts className='menu-icon'/>Contact
        </Link>
        </div>

          <div className='icon-box'>
          <Link className='link-tag' to="/cart">
            <BiCart  className='menu-icon' removefromCart={() =>{ this.removeIt()}}/>Cart
          </Link>
          </div>


          <div className='icon-box'>
          <Link className='link-tag' to="/profile">
            <HiOutlineUserCircle className='menu-icon'/>Profile
            </Link>
          </div>
            </nav>
            
            <Switch>

        <div className='wall-container'>
        <Route exact path="/">
        <Home productData={productData}/>
        </Route>
        <Route exact path="/products">  {/* if this is the route then wall will show */}
        <ProductCard productData={productData} addToCart={(e) => {this.addToCart(e)}}/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
        <Route exact path="/cart">
        <Cart cartData={cartData} removeFromCart={(e) => {this.removeFromCart(e)}}/>
        </Route>
        <Route exact path='/profile'>
          <Profile/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>

        </div>

        </Switch>
      
      </div>
      </Router>
    );
  }

}

export default App;

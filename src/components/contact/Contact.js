// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import {opertator} from './opertator.png'

// export default function Contact(){

//       const notify = () => toast("Wow so easy!");
  
//       return (
//         <div>
//           <button onClick={notify}>Notify!</button>
//           <ToastContainer />
//         </div>
//       );
// }

import React,{useState} from 'react'
import './contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact(){

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')

      const notify = () => toast("Your response has been submitted successfully! Have a nice Day!");

    const submitQuery = (e) =>{
        e.preventDefault()
        notify()
        


    }

    const nameValue = (e) =>{
        setName(e.target.value)
    }
    const phoneValue = (e) =>{
        setPhone(e.target.value)
    }

    const emailValue = (e) =>{
        setEmail(e.target.value)
    }

    const queryValue = (e) =>{
      setQuery(e.target.value)
    }

    return(
        <div className='contact-container'>
            <div className='contact-logo'>
                {/* <img style={{padding: "10px"}} src={mascot}/><img src={logo}/> */}
            </div>
            <form className='contact-box' onSubmit={submitQuery}>
                <div className='contact-heading'><span className='heading-signup'>Have any questions? We'd love to hear from you.</span></div>
                <div className='contact-input-fields'>
                    <label className='label-contact'>Name</label>
                    <input className='input-contact' required value = {name} onChange = {(e) => {nameValue(e)}} />
                    <label className='label-contact'>Email Address</label>
                    <input className='input-contact' required value={email} onChange={(e) => {emailValue(e)}} type='email'/>
                    <label className='label-contact'>Phone Number</label>
                    <input className='input-contact' required type='number' value={phone} onChange = {(e) => {phoneValue(e)}}/>
                    <label className='label-contact'>Query?</label>
                    <textarea className='input-contact' required value={query} onChange={(e) => {queryValue(e)}} type='text'/>
                   
                </div>
                <div className='contact-buttons'>
                <button className='contact-button' type='submit' value='Submit'>Submit</button>
                <ToastContainer />
                </div>
            </form>
        </div>
    )
}
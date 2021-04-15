import React,{useState} from 'react'
import './signup.css'
// import logo from './components/navbar/assets/logo.png'
// import mascot from './components/navbar/assets/mascot.png'
export default function Signup(){

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const [password, setPassword] = useState('')


    const submitLogin = (e) =>{
        e.preventDefault()
        if(confirmPassword !== password){
            alert('passwords do not match')
        }

    }

    const nameValue = (e) =>{
        setName(e.target.value)
    }
    const phoneValue = (e) =>{
        setPhone(e.target.value)
    }
    const confirmPasswordValue = (e) =>{
        setConfirmPassowrd(e.target.value)
    }

    const emailValue = (e) =>{
        setEmail(e.target.value)
    }

    const passwordValue = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <div className='signup-container'>
            <div className='signup-logo'>
                {/* <img style={{padding: "10px"}} src={mascot}/><img src={logo}/> */}
            </div>
            <form className='signup-box' onSubmit={submitLogin}>
                <div className='sign-up-heading'><span className='heading-signup'>Sign Up </span></div>
                <div className='signup-input-fields'>
                    <label className='label-signup'>Name</label>
                    <input className='input-signup' required value = {name} onChange = {(e) => {nameValue(e)}} />
                    <label className='label-signup'>Email Address</label>
                    <input className='input-signup' required value={email} onChange={(e) => {emailValue(e)}} type='email'/>
                    <label className='label-signup'>Phone Number</label>
                    <input className='input-signup' required type='number' value={phone} onChange = {(e) => {phoneValue(e)}}/>
                    <label className='label-signup'>Create Password</label>
                    <input className='input-signup' required value={password} onChange={(e) => {passwordValue(e)}} type='password'/>
                    <label className='label-signup'>Password</label>
                    <input className='input-signup' required value={confirmPassword} onChange={(e) => { confirmPasswordValue(e)}} type='password'/>
                </div>
                <div className='signup-buttons'>
                <span className='cancel-signup'>Cancel</span>
                <button className='signup-button' type='submit' value='Submit'>Log in</button>
                </div>
            </form>
        </div>
    )
}
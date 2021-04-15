import React from 'react'
import './menuButton.css'

export default function MenuButton({menuButtonName, handleClick}){
    return(
        <div onClick ={handleClick} className='menu-button-wrapper'>
            {menuButtonName}
        </div>
    )
}
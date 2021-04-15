import React from 'react'
import './regularButton.css'

export default function MenuButton({regularButtonName, regularButtonClick}){
    return(
        <div onClick ={regularButtonClick} className='regular-button-wrapper'>
            {regularButtonName}
        </div>
    )
}
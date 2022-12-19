import React from 'react'
import MenuItems from '../pages/MenuItems'
export default function Cabecalho(props) {
    return (
        <>
            <div className='cabecalho'>
                <h1 style={{ color: "YELLOW", fontSize: 50}}>STAR WARS</h1>
            </div>
            <MenuItems/>        
        </>
        
        
    )
}
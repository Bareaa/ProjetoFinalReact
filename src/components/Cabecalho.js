import React from 'react'
import MenuItems from '../pages/MenuItems'
import Acesso from "../assets/Acesso"
export default function Cabecalho(props) {
    return (
        <>
            <div className='cabecalho'>
                
                <h1 style={{ color: "YELLOW", fontSize: 50}}>STAR WARS</h1>
                <h1 style={{ color: "YELLOW", fontSize: 20, marginTop: 250}}>Acessos:<script src={Acesso}></script></h1>
            </div>
            <MenuItems/>        
        </>
        
        
    )
}
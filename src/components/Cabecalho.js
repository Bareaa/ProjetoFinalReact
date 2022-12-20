import React from 'react'
import MenuItems from './MenuItems'

let contador = 1;
if (localStorage.getItem("acessos") >= 1) {
  contador = parseInt(localStorage.getItem("acessos")) + 1;
}
localStorage.setItem("acessos", contador);


export default function Cabecalho(props) {
    return (
        <>
            <div className='cabecalho'>
                <h1 style={{ color: "YELLOW", fontSize: 70, textShadow: '4px 0 #000, -4px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #fff, 1px -1px #fff, -1px 1px #000'}}>STAR WARS</h1>
                <h1 style={{ color: "YELLOW", fontSize: 15, marginTop: 240, backgroundColor: 'rgb(32, 32, 32)', width: 100, textAlign: 'center'}}>Acessos: {contador}</h1>
            </div>
            <MenuItems/>        
        </>
    )
}
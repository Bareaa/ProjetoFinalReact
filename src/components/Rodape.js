import React, { useLayoutEffect, useState } from 'react'
import '../assets/css/rodape.css';
import { useNavigate } from 'react-router-dom'




export default function Rodape() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
    navigate("/")}
    return (
        <>
        <div className='corpo'>
            <br />
          
          </div>
        <div className='rodapePai'>
             <div className='rodape' align='center'>
                Fernando Rodrigues Junior RA:1121913 | Guilherme Barea RA:1127375
                <br />
                <span>@Copyright 2022 - ATITUS </span>
            </div>
            <div className='logoff' onClick={logoff}>
                Logoff
            </div>
            
        </div>
            
        </>
    )
}
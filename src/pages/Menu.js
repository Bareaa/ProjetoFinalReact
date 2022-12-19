import { Grid } from '@mui/material'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import {useEffect} from 'react';



export default function Menu(props) {
  const navigate = useNavigate();

  const logoff = () => {
    sessionStorage.removeItem("login")
    navigate("/")}

  return (
    <>
      <Grid container style={{ padding: 10}}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          
          <div className='menu' style={{backgroundImage: "URL(https://th.bing.com/th/id/R.cdcc665c9adff4bca095eeda4f468e39?rik=9rgKSjsdlznLOA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f1%2f7%2f30099.jpg&ehk=Yu3WIfdKmzrJihcuK65nAn3HOBY55MDMTM2bmrP0dUI%3d&risl=&pid=ImgRaw&r=0)"}}>
             <Link to={'/menu'}><div className='itemMenu' style={{color:"yellow"}}>I - MENU </div></Link>
             <Link to={'/filmes'}><div className='itemMenu' style={{color:"yellow"}}>II - FILMES </div></Link>
             <Link to={'/starships'}><div className='itemMenu' style={{color:"yellow"}}>III - STARSHIPS</div> </Link>
             <Link to={'/people'}><div className='itemMenu' style={{color:"yellow"}}> IV - PEOPLE </div></Link>
             <Link to={'/planets'}><div className='itemMenu' style={{color:"yellow"}}>V - PLANETS</div></Link>
             <Link to={'/species'}><div className='itemMenu' style={{color:"yellow"}}>VI - SPECIES</div></Link>
             <Link to={'/duvidas'}><div className='itemMenu' style={{color:"yellow"}}>VII - DÚVIDAS</div></Link>
             <Link to={'/sobre'}><div className='itemMenu' style={{color:"yellow"}}>VIII - SOBRE</div></Link>
                
          </div>
          <Grid>
          <div className='itemMenu2' onClick={logoff}>
                        Logoff
                    </div>
          </Grid>
          <div className='corpo'>
            <br />
            Corpo
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>

  )
}
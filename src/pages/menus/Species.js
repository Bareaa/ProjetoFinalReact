import { Grid } from '@mui/material'
import React from 'react'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'


export default function Menu(props) {
    const logoff = () => {
        props.setLogin(false)
    }
  return (
    
    <>

      <Grid container style={{ padding: 10}}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          
          <div className='menu' style={{backgroundImage: "URL(https://th.bing.com/th/id/R.cdcc665c9adff4bca095eeda4f468e39?rik=9rgKSjsdlznLOA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f1%2f7%2f30099.jpg&ehk=Yu3WIfdKmzrJihcuK65nAn3HOBY55MDMTM2bmrP0dUI%3d&risl=&pid=ImgRaw&r=0)"}}>
            <div className='itemMenu' style={{color:"yellow"}}> <a href='species'> Species </a></div>
            <div className='itemMenu' style={{color:"yellow"}}> <a href='menu'> Home </a> </div>
                
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
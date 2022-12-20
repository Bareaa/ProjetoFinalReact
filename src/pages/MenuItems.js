import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/estilos.css';
import Acesso from "../assets/Acesso"



export default function Menu(props) {
  
  return (
    <div className='menu' style={{backgroundImage: "URL(https://th.bing.com/th/id/R.cdcc665c9adff4bca095eeda4f468e39?rik=9rgKSjsdlznLOA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f1%2f7%2f30099.jpg&ehk=Yu3WIfdKmzrJihcuK65nAn3HOBY55MDMTM2bmrP0dUI%3d&risl=&pid=ImgRaw&r=0)"}}>
        <Link to={'/menu'}><div className='itemMenu' >I - MENU </div></Link>
        <Link to={'/filmes'}><div className='itemMenu'>II - FILMES </div></Link>
        <Link to={'/starships'}><div className='itemMenu' >III - STARSHIPS</div> </Link>
        <Link to={'/people'}><div className='itemMenu' > IV - PEOPLE </div></Link>
        <Link to={'/planets'}><div className='itemMenu' >V - PLANETS</div></Link>
        <Link to={'/species'}><div className='itemMenu' >VI - SPECIES</div></Link>
        <Link to={'/duvidas'}><div className='itemMenu' >VII - DÚVIDAS</div></Link>
        <Link to={'/sobre'}><div className='itemMenu' >VIII - SOBRE</div></Link>
        <Link to={'/registro'}><div className='itemMenu'>IX - REGISTRO</div></Link> 
        <div className='contador'><script src={Acesso}></script></div>
    </div>

  )
}
import React from "react";
import '../css/assets/estilos.css';

export default function MenuOpcoes() {
    return(
         <div className='menu' style={{backgroundImage: "URL(https://th.bing.com/th/id/R.cdcc665c9adff4bca095eeda4f468e39?rik=9rgKSjsdlznLOA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fd%2f1%2f7%2f30099.jpg&ehk=Yu3WIfdKmzrJihcuK65nAn3HOBY55MDMTM2bmrP0dUI%3d&risl=&pid=ImgRaw&r=0)"}}>
             <div to={'/menu'}><div className='itemMenu' style={{color:"yellow"}}>I - MENU </div></div>
             <div to={'/filmes'}><div className='itemMenu' style={{color:"yellow"}}>II - FILMES </div></div>
             <div to={'/starships'}><div className='itemMenu' style={{color:"yellow"}}>III - STARSHIPS</div> </div>
             <div to={'/people'}><div className='itemMenu' style={{color:"yellow"}}> IV - PEOPLE </div></div>
             <div to={'/planets'}><div className='itemMenu' style={{color:"yellow"}}>V - PLANETS</div></div>
             <div to={'/species'}><div className='itemMenu' style={{color:"yellow"}}>VI - SPECIES</div></div>
             <div to={'/duvidas'}><div className='itemMenu' style={{color:"yellow"}}>VII - DÚVIDAS</div></div>
             <div to={'/sobre'}><div className='itemMenu' style={{color:"yellow"}}>VIII - SOBRE</div></div>        
             <div to={'/sobre'}><div className='itemMenu' style={{color:"yellow"}}>VIII - SOBRE</div></div> 
             <div to={'/registro'}><div className='itemMenu' style={{color:"yellow"}}>VIII - REGISTRO</div></div>        

          </div>
    )
}
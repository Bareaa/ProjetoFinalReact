import { Button, Grid, TextField } from '@mui/material'
import { borderRadius } from '@mui/system';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import { salvarDados } from '../../services/BancoService';




export default function Duvidas(props) {
  const navigate = useNavigate();

  const [Nome, setNome] = useState("");
  const [Whats, setWhats] = useState("");
  const [Duvida, setDuvida] = useState("");

  const limpar = () => {
    setNome('')
    setWhats('')
    setDuvida('')
  }

  const salvar = async () => {

    const dados = {
        Nome: Nome,
        Whats: Whats,
        Duvida: Duvida
    }
    try {
        await salvarDados(dados)
        alert("Dados enviados!")
        navigate('/menu')
    } catch (error) {
        alert(error)
    }
  }
  return (
    <>
      <Grid container style={{ padding: 10}}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
            <br/>
            <br/>
            <br/>
          <div className='corpo'>
            <Grid container style={{ padding: 110, backgroundImage: 'URL(https://cdn.wallpapersafari.com/42/99/2Eglr3.jpg)',backgroundSize:500,opacity:0.8, borderRadius: 500,}}>
                <Grid item md={6} xs={12} sm={12}>
                    <TextField fullWidth label="Nome" variant='outlined' value={Nome} onChange={(e)=>setNome(e.target.value)}/>
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                    <TextField fullWidth label="Whats" variant='outlined' value={Whats} onChange={(e)=>setWhats(e.target.value)}/>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <TextField fullWidth label="Dúvida" variant='outlined' value={Duvida} onChange={(e)=>setDuvida(e.target.value)}/>
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                <Button
                    variant="contained"
                    style={{ marginRight: 10, color: 'yellow',backgroundColor:'black' }}onClick={salvar}>Enviar</Button>
                
                    <Button variant="outlined" style={{ marginRight: 10, backgroundColor:'black', color: 'yellow'}}onClick={limpar}>Limpar Dados</Button>
                </Grid>
            </Grid>
            
            
          
          
          </div>
          
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          {/* <Rodape /> */}
        </Grid>
      </Grid>
    </>

  )
}
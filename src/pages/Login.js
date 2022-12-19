// import { async } from '@firebase/util';
// import { CheckBox } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import login from './../services/AtenticadorService'

export default function Login(props) {
  const navigate = useNavigate();

  const [lembrarme, setLembrarme] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useLayoutEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"))
      setPassword(localStorage.getItem("password"))
      setLembrarme(true)
    }
  }, [])

  const validar = async() => {
      try{
        await login(email,password)
        sessionStorage.setItem("login", true)
        props.verificarLogin()
        navigate("/menu")
      } catch (error){
        alert(error)
      }
      

  }

  const armazenarEmailSenha = () => {
    setLembrarme(!lembrarme)
    if (!lembrarme) {
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
    } else {
      localStorage.removeItem("email")
      localStorage.removeItem("password")
    }

  }

  return (
    <Grid container style={{ padding: 10 }}>
      <Grid item xs={12}>
        <div style={{ textAlign: "center" }}>
          <h1>Sejam Bem-Vindos</h1>
          <h2>FÃS DE STAR WARS</h2>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
      <Grid item md={4} xs={12} sm={12} style={{ backgroundImage: 
 "url(https://64.media.tumblr.com/ca2c15c09bf234cf3b6bfcba3dd2f48b/0ab44cd9b5cbfac1-8f/s500x750/512d2cc41bcad866c85e8a90a012c09116399891.png)", padding: 10, borderRadius: 10 }}>
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="E-mail"
            fullWidth={true}
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label="Password"
            fullWidth={true}
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked checked={lembrarme} onChange={armazenarEmailSenha}/>} label="Lembrar-me" />
        </FormGroup>
        </div>
        <div style={{ marginTop: 10, textAlign: "center"}}>
          <Button
            variant="contained"
            style={{ marginRight: 10, color: 'yellow' }}
            onClick={validar}
          >Entrar</Button>
          <Button variant="outlined" style={{ marginRight: 10,}}>Cancelar</Button>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}></Grid>
    </Grid>
  )
}

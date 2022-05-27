import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '../component/input';
import Buttton from '../component/button';
import {useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"


const theme = createTheme();

export default function SignIn() {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    
    const navigate = useNavigate();
    const location = useLocation();
   
   const obj = {
       name,
       email,
       password
   }
   
    const signin = (e) => {

      if(name != '' && email != '' & password != '' ){
        navigate(`/dashboard/`,{ state:obj })
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


          <Input change={e => { setName(e.target.value); }}   id="name"
              label="Name"
              name="Name"
              autoComplete="Name"
             />
          {/* <Typography component="h6" variant="h5">
            Please insert name
          </Typography> */}


          <Input change={e => { setEmail(e.target.value); }}  id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
             />
            {/* <Typography component="h6" variant="h5">
            Please insert Email
          </Typography> */}


          <Input  change={e => { setPassword(e.target.value); }}    name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             />

         {/* <Typography component="h6" variant="h5">
            Please insert Password
          </Typography>
        */}

        

            <Buttton click={(e) => signin()} name="Sign In" />
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
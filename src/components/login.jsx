import React from "react";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{m:1, bgcolor:'secondary.main'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <TextField 
          margin="normal"
          label="이메일 주소" 
          required 
          fullWidth 
          name="email"
          autoComplete="email"
          />
          
        <TextField 
          margin="normal"
          label="비밀번호"
          type="password" 
          required 
          fullWidth 
          name="password"
          autoComplete="current-password"/>
        
        <FormControlLabel control={<Checkbox value="remember" color="primary" />}
        label= "로그인 상태 유지"
        />
        
        <Button type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">비밀번호 찾기</Link>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">회원가입</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}


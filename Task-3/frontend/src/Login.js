import React from 'react';
import { Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    height: '100vh',
    background: 'linear-gradient(to right bottom, #430089, #82ffa1)', // Dark blue background
    color: '#fff',
    width: '100%'
  },
  loginSide:{
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '40%',
    margin: '50px'
  },
  loginBox: {
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: '#12264a', // Slightly lighter blue for the login box
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexDirection: 'column'
  },
  textField: {
    marginBottom: '1rem',
  },
  otpField: {
    width: '2.5rem',
    textAlign: 'center',
    color:'#fff',
  },
  otpContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
    color:'#fff'
  },
});

const Login = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Box className={classes.loginSide}>
        <Typography variant="h5" gutterBottom color="#fff">
          LOGO HERE
        </Typography>

        <Box className={classes.loginBox}>
          <Typography variant="h5" gutterBottom color="primary">
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Please Enter Details For Sign In
          </Typography>
          <TextField
            className={classes.textField}
            label="Phone Number"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
              style: { textAlign: 'center', color: '#fff' }
            }}
            
          />
          <Box className={classes.otpContainer} >
            {Array(6).fill().map((_, index) => (
              <Box style={{marginRight: '15px'}}>
                <TextField
                  key={index}
                  className={classes.otpField}
                  variant="outlined"
                  inputProps={{ maxLength: 1, style: { textAlign: 'center', color: '#fff'}}}
                />
              </Box>
            ))}
          </Box>
          <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/")}>
            Login
          </Button>
          <Typography variant="body2" color="#fff" style={{ marginTop: '1rem' }}>
            Don't Receive an OTP? <a href="#" style={{ color: '#4dabf5' }}>Resend OTP</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

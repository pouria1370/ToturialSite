import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <FormControl className='login' >
            <TextField  sx={{m:1}} label="Login-email" inputProps={{type:'email'}}/>
            <TextField  sx={{m:1}} label="Login-password" inputProps={{type:'password'}}/>
            
            <Button  sx={{m:1,fontSize:"20px"}}>Submit</Button>
        </FormControl>
    )
}

export default Login

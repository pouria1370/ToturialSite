import { Button, FormControl, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <FormControl>
            <TextField label="email" inputProps={{type:'email'}}/>
            <TextField label="password" inputProps={{type:'password'}}/>
            
            <Button>Submit</Button>
        </FormControl>
    )
}

export default Login

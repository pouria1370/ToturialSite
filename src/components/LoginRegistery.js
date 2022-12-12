import { Button } from '@mui/material'
import React, { useState } from 'react'
import Login from './Login'
import Registery from './Registery'

const LoginRegistery = () => {
    const [active, setActive] = useState(false)

    const clickLogInHandler=()=>{
        setActive(false)
    }
    const clickRegisteryHandler=()=>{
        setActive(true)

    }
    return (
        <div>
            <div>
            <Button onClick={clickLogInHandler}>Login</Button>
            <Button onClick={clickRegisteryHandler}>Registery</Button>
            </div>
            {active?<Registery/>:<Login/>}
        </div>
    )
}

export default LoginRegistery

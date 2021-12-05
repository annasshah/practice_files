import { Button } from '@mui/material'
import React from 'react'

export default function Buttons(props) {
    return (
        <div>

            <Button variant='contained' onClick={props.onClick}>{props.value.username}</Button>
            
        </div>
    )
}

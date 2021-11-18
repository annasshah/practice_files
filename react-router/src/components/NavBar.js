import { Box,Stack,Typography } from '@mui/material';

import { Route, useNavigate } from "react-router";


export default function NavBar() {

        const navigate = useNavigate();
        let goToHome = () => {
            navigate('/')
    
        }
        let goToAbout = () => {
            navigate('about')
    
        }
        let goToContact = () => {
            navigate('contact')
    
        }
        return (
                <Stack spacing={3} direction='row' alignItems='center' justifyContent='center'>
                    <Typography onClick={goToHome} >Home</Typography>
                    <Typography onClick={goToAbout} >About</Typography>
                    <Typography onClick={goToContact} >Contact</Typography>
                </Stack>
    )
}

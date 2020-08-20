import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button, ButtonGroup, Box, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    button:{
        justifyContent:"flex-end"
        },
    appbar:{
        backgroundColor:'purple',
    }
}))

export default function Navbar() {
	
const akash = useStyles();
return (
		<div  >
			<AppBar className={akash.appbar} position="static">
				<Toolbar>
					<Typography variant="h6">Ai-Radiology</Typography>
                    <Box className={akash.button}>
                    <ButtonGroup variant='contained'>
                        <Button>Home</Button>
                        <Button>About</Button>
                        <Button>Team</Button>
                    </ButtonGroup>
                    </Box>
                </Toolbar>
			</AppBar>
        </div>
	);
}

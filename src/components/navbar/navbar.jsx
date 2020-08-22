import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, ButtonGroup, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor:'purple',
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	button:{
		padding:6,
		color:'inherit',
		variant:'contained'
	}
}));

export default function Navbar() {
	const akash = useStyles();
	return (
		<div >
			<AppBar className={akash.appbar} position="static">
				<Toolbar>
					<Typography className={akash.title} variant="h4">
						Ai-Radiology
					</Typography>

					<Button className={akash.button}  component={Link} to="/">
						Home
					</Button>
					<Button className={akash.button}  component={Link} to="/about">
						About
					</Button>
					<Button className={akash.button}  component={Link} to="/team">
						Team
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

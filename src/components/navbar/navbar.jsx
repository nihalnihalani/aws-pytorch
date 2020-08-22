import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, ButtonGroup, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor: 'purple',
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	button:{
		padding:1
	}
}));

export default function Navbar() {
	const akash = useStyles();
	return (
		<div className={akash.appbar}>
			<AppBar position="static">
				<Toolbar>
					<Typography className={akash.title} variant="h6">
						Ai-Radiology
					</Typography>

					<Button variant='contained' component={Link} to="/">
						Home
					</Button>
					<Button variant='contained' component={Link} to="/about">
						About
					</Button>
					<Button variant='contained' component={Link} to="/team">
						Team
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

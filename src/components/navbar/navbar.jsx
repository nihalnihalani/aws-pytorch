import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button,  Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Introduction from '../../pages/Introduction';

const useStyles = makeStyles((theme) => ({
	appbar: {
		backgroundColor:'lightblue',
		flexGrow: 1
	},
	title: {
		flexGrow: 1,
	
	},
	button:{
		padding:6,
		color:'secondary',
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
						<Link to={"/"} >Ai-Radiology</Link>
					</Typography>

					<Button className={akash.button}  component={Link} to="/homepage">
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

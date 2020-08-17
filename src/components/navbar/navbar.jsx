import React from 'react';


// import './navbar.styles.scss';

// const Navbar = props => (
//      <header className="navbar">
//         <nav className='Navigation'>
//             <div></div>
//             <div className="Navbar-Logo">
//                 <a  href="/">
//                     Ai-Radiologist
//                 </a>
//             </div>
//             <div className='spacer'/>
//                 <div className="Navbar_navigation-items">
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/">About</a></li>
//                     <li><a href="/">Team</a></li>
//                 </ul>
//             </div>
//         </nav>
//     </header> 
// )

// export default Navbar;

import { AppBar, Toolbar, Button, ButtonGroup, Grid, Typography } from '@material-ui/core';



const Navbar = () =>{
    
    return(
        <AppBar>
            <Toolbar>
                <Typography variant="h5" component="h2">
                    Ai-radiology
                </Typography>

                <Grid container alignItems="flex-start" justify="flex-end"  direction="row">
                    <ButtonGroup  variant="contained" color="paper" aria-label="contained primary button group">
                        <Button >Home</Button>
                        <Button >About</Button>
                        <Button >Team</Button>
                    </ButtonGroup>
                </Grid>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;
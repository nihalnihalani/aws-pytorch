import React from 'react';
import Navbar from '../components/navbar/navbar';
import { Grid } from '@material-ui/core';

export default function Introduction(){
    return(
        <div>
            <Grid container direction='column'>
                <Grid item>
                    <Navbar/>
                </Grid>
            </Grid>
        </div>
    );
}
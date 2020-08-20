import React from 'react';
import Navbar from '../components/navbar/navbar';
import MediaCard1 from '../components/cards/TeamCard';
import { Grid } from '@material-ui/core';

export default function Team(){
    return(
        <div>
            <Grid container direction='column' justify='space-evenly' spacing='1'>
                <Grid item>
                    <Navbar/>   
                </Grid>
                <Grid item container justify='space-evenly' >
                <Grid item>
                    <MediaCard1 title={'Akash Nemade'}
                    content={''}
                     />
                </Grid>
                <Grid item>
                    <MediaCard1 title={'Nihal Nihalani'}
                    content={''}/>
                </Grid>
                <Grid item>
                    <MediaCard1 title={'Mathew Kelly'}
                    content={''}/>
                </Grid>
                <Grid item>
                    <MediaCard1 title={'Charles Yusuf'}
                    content={''}/>
                </Grid>
                <Grid item >
                    <MediaCard1 title={'Chao Zhang'}
                    content={''}/>
                </Grid>
            </Grid>
            </Grid>
        </div>
    );
}
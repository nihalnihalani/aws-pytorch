import React from 'react';
import { Box, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
    root: {
      maxWidth: 345,
      padding:theme.spacing(1),
    },
    media: {
      height: 140,
    },
    box:{
     margin:6
    }

  }));




  
  export default function MediaCard({title, image, content}) {
    const classes = useStyles();
    
    return (
    <div className={classes.box }>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {content} 
            </Typography>
          </CardContent>
        </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              
              Predict
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
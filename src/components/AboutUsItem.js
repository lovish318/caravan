import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import ct1 from '../utils/images/ct_1.svg'
import ct2 from '../utils/images/ct_2.svg'
import ct3 from '../utils/images/ct_3.svg'
import os1 from '../utils/images/os_1.svg'
import os2 from '../utils/images/os_2.svg'
import os3 from '../utils/images/os_3.svg'
import rental1 from '../utils/images/rental_1.svg'
import rental2 from '../utils/images/rental_2.svg'
import rental3 from '../utils/images/rental_3.svg'
import card1 from '../utils/images/cityRide.jpeg'
import card2 from '../utils/images/outstation.jpeg'
import card3 from '../utils/images/luxary.jpeg'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  content:{
    height: 200
  },
  iconInfo:{
    textAlign:'left', width:'66px',lineHeight:'normal', marginTop:'5px'
  },
  iconDiv: {
    display:'flex', justifyContent:'space-around',marginBottom:'20px'
  }
});

export default function AboutUsItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.heading=='City Ride'?card1:props.heading=='Out Station'?card2:card3}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:'left'}}>
            {props.heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'left'}}>
            {props.info}
          </Typography>
        </CardContent>
        {props.heading=='City Ride'?<Box className={classes.iconDiv}>
          <div style={{display:'flex',width:'30%'}}>
            <img src={ct1} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            AC
            Cabs
          </Typography>
          </div>
          <div style={{display:'flex',width:'30%'}}>
            <img src={ct2} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Pocket
            Friendly
          </Typography>
          </div>
          <div style={{display:'flex',width:'30%'}}>
            <img src={ct3} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Cashless
            Rides
          </Typography>
          </div>
        </Box>:props.heading=='Out Station'?<Box className={classes.iconDiv}>
          <div style={{display:'flex',width:'30%'}}>
            <img src={os1} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            One-Way
            Trips
          </Typography>
          </div>
          <div style={{display:'flex',width:'30%'}}>
            <img src={os2} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Advance
            Booking
          </Typography>
          </div>
          <div style={{display:'flex',width:'30%'}}>
            <img src={os3} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Safe
            Rides
          </Typography>
          </div>
        </Box>:<Box className={classes.iconDiv}>
          <div style={{display:'flex',width:'30%'}}>
            <img src={rental1} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Hourly
            Packages
          </Typography>
          </div>
          <div style={{display:'flex',width:'30%'}}>
            <img src={rental2} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Multiple
Stops
          </Typography>
          </div>
          <div style={{display:'flex',width:'30%'}}>
            <img src={rental3} alt='' style={{width:'25px',marginRight:'10px'}}/>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.iconInfo}>
            Top-Rated
Partners
          </Typography>
          </div>
        </Box>}
      </CardActionArea>
    </Card>
  );
}
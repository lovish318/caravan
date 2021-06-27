import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography,Box} from '@material-ui/core';
import AboutUsItem from '../components/AboutUsItem'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Paper style={{padding:'30px',margin:'30px auto',width:'88%'}}>
        <h2 style={{textAlign:'left',marginBottom:'20px'}}>About Us</h2>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'left',width:'60%',marginTop:'-10px',marginBottom:'10px'}}>
        We  are the most reliable and affordable cab service providing firm, operating Pan INDIA. Cab can be availed in just a few clicks in any part of the country. Various cab services are being provided by us according to you different interests.
          </Typography>
          <h3 style={{textAlign:'left'}}>A Car For Every Occasion</h3>
    <Grid container>
        <Grid item xs={12} sm={4}>
            <AboutUsItem  heading='City Ride' info={`Looking  For A Taxi In Your City? To Get To Your  Job? Or Go For Movie Or Go Shopping? We Are  Available At Your Door Step To Drop You At Your Destination At  A Mere  7 Rs/km.Super Affordable Rides Just A Click Away.`}/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <AboutUsItem  heading='Out Station' info='Planning A Trip To The Hills With The Love Of Your Life Or To Jaipur With Your Family Or To Goa With Your Friends We Have It All Covered Just Pick Your Phone And Contact us And Start Packing To Have A Splended Journey To Desired Destination'/>
        </Grid>
        <Grid item xs={12} sm={4}>
            <AboutUsItem heading='Luxary Cars' info='Luxary Car Without Any Hassle On Your Big Day. We Have Got You Just Tell Us Which When Where & You Have Got It'/>
        </Grid>
    </Grid>
    </Paper>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Grid} from '@material-ui/core';
import WhyChooseUsItem from '../components/WhychooseUsItem'
const useStyles = makeStyles((theme) => ({
  paper: {
      width:'88%',
      margin:'auto',
      padding:'20px'

  },
  itemHeading: {
      fontSize:'15pt',
      fontWeight:'600',
      textAlign:'left'
      
  },
  itemDetail: {
      fontSize:'11pt',
      fontWeight:'500',
      textAlign:'left'
  },
  itemImg: {
      height:'50pt',
      width:'50pt',
      marginRight:'10pt'
  }

}));
export default function WhyChooseUs() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
        <h2 style={{textAlign:'left',marginBottom:'-20px'}}>Why Choose Us</h2>
        <Grid container justify='spaceBetween'>

        <Grid item xs={12} sm={6} >
            <WhyChooseUsItem heading='Affordable' info='Prices Are Minimal With Top Notch Quality And Experienced Drivers.' />
            <WhyChooseUsItem heading='Cashless Rides' info='No Need To Worry About Carrying Cash.You Can Pay Through Any Online Payment Mode.Go Cashless.'/>
            <WhyChooseUsItem heading='Secure And Safe Rides' info='All Cars Are Well Equipped With GPS Trackers And Owners Information Is Displayed On The Car.'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <WhyChooseUsItem heading='In Cab Entertainment' info='Play Music Watch Videos And Lot More. Also Stay Connected Even If You Are Travelling Through Poor Network Areas With Our Free WiFi Facility.'/>
        <WhyChooseUsItem heading='Options To Choose From' info='You Can Choose From A Variety Of Cars According To Your Convenience From Sedan To SUV To Hatchbacks You Can Avail To Your Choice.'/>
        </Grid>
        </Grid>
    </Paper>
  );
}

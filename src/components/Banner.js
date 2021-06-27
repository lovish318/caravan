import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Paper, Typography,Grid} from '@material-ui/core'
import Bino from '../utils/images/bino.png'
import Discount from '../utils/images/discount.png'
import Driver from '../utils/images/driver.png'

const useStyles = makeStyles((theme) => ({
  banner: {
      display:'flex',
      width:'88%',
      textAlign:'center',
      padding:'10pt',
      margin:'10pt auto',

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

export default function Banner() {
  const classes = useStyles();

  return (
    <Paper className={classes.banner}>
        <Grid container justify='spaceBetween'>

        <Grid item xs={12} sm={4} className={classes.banner}>
            <img className={classes.itemImg} alt='' src={Driver}/>
            <Box>
                <Typography className={classes.itemHeading}>Pay to driver</Typography>
                <Typography className={classes.itemDetail}>Pay 20% now & rest to driver or pay full amount online.</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.banner}>
            <img className={classes.itemImg} alt='' src={Bino}/>
            <Box>
                <Typography className={classes.itemHeading}>No hidden prices</Typography>
                <Typography className={classes.itemDetail}>Inclusive of GST, state taxes and tolls</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.banner}>
            <img className={classes.itemImg} alt='' src={Discount}/>
            <Box>
                <Typography className={classes.itemHeading}>No surge pricing, no waiting</Typography>
                <Typography className={classes.itemDetail}>Same rate regardless of cab availability, no queues</Typography>
            </Box>
        </Grid>
        </Grid>
    </Paper>
  );
}

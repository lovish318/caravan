import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import cashless from '../utils/images/cashless.jpeg'
import entertainment from '../utils/images/entertainment.jpeg'
import option from '../utils/images/option.jpg'
const useStyles = makeStyles((theme) => ({
  info: {
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '300',
    lineHeight: '24px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 400,
    marginBottom: '5px',
    color: '#000000',
    textAlign: 'left',
  },
  indivItemList: {
    width: '100%',
    borderRadius: '4px',
    marginTop: '20px',
    marginBottom: '20px',
    display: 'flex',
  },
  wd70: {
    width: '87%',
    float: 'left',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '15px',
  },
  wd30: {
    width: '30%',
    float: 'left',
  },
  imgHolder: {
    maxWidth: '100%',
    borderRadius: '4px',
    margin: '20px 0px',
    maxHeight: '110px',
  },
}))

export default function WhyChooseUsItem(props) {
  const classes = useStyles()

  return (
    <a
      target="_blank"
      className={classes.indivItemList}
      event-name="why_ride_with_us"
    >
      <Grid container>
        <Grid item xs={12} sm={3}>
          <img
            className={classes.imgHolder}
            src={
              props.heading === 'Secure And Safe Rides'
                ? 'https://cms-web.olacabs.com/00000000370.jpg'
                : props.heading === 'Wide Range of Options'
                ? option
                : props.heading === 'In-Cab Environment'
                ? entertainment
                : props.heading === 'No Cash? No Problem!'
                ? cashless
                : 'https://cms-web.olacabs.com/00000000368.jpg'
            }
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <div className={classes.wd70}>
            <h4 className={classes.heading}>{props.heading}</h4>
            <p className={classes.info}>{props.info}</p>
          </div>
        </Grid>
      </Grid>
    </a>
  )
}

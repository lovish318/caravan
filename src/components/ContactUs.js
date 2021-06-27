import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import ContactItem from './ContactItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#fcb628',
    padding:'40px 73px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: '#fff',
    marginBottom: '20px'
  },
  
}))

export default function ContactUs() {
  const classes = useStyles()

  return (
    <div className={classes.root} id='ContactUs'>
      <Typography variant="h4" className={classes.title}>
        Contact Us
      </Typography>
        <Grid container>
          <ContactItem title="Address" type="location" description="Sector 51-A, Chandigarh" />
          <ContactItem title="Phone" type="phone" description="+91 7710221198" />
          <ContactItem title="Email" type="email" description="Caravancabservices@gmail.com" />
        </Grid>
    </div>
  )
}

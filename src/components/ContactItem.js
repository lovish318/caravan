import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Box, Grid} from '@material-ui/core';
import {LocationOn, Phone, Email} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'#808080'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color:'#fff',
    fontSize:'18pt',
  },
  description: {
    flexGrow: 1,
    textAlign: 'left',
    color:'#fff',
    fontSize:'13pt',
  },
  icons: {
    background: '#fff',
    borderRadius: '50%',
    width: 44,
    height: 43,
    paddingTop: 8,
    marginRight:'20px'
  },

}));

export default function ContactItem(props) {
  const classes = useStyles();

  return (
        <Grid item xs={12} sm={4}>
        <Box style={{ display: 'flex' }}>
          <Box className={classes.icons}>
            {props.type ==='phone'?<Phone />:props.type === 'email'?<Email />:<LocationOn />}
          </Box>
          <Box>
            <Typography className={classes.title}>
              {props.title}
            </Typography>
            <Typography className={classes.description}>
              {props.description}
            </Typography>
          </Box>
        </Box>
        </Grid>
  );
}

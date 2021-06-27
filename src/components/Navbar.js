import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link,Box} from '@material-ui/core'
import Caravan from '../utils/images/caravan.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontWeight:'700'
  },
  links: {
    flexGrow: 1,
    textAlign: 'left',
    fontWeight:'700',
    color:'#fff',
    margin:'10pt'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#fcb628'}}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Car-a-Van
          </Typography>
          <Box>
          <Link href="#ContactUs" className={classes.links}>Contact Us</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

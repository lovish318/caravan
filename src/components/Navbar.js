import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link, Box } from '@material-ui/core'
import Caravan from '../utils/images/logo.png'
import Name from '../utils/images/name.jpeg'

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
    fontWeight: '700',
    font: 'gotcha',
  },
  links: {
    flexGrow: 1,
    textAlign: 'left',
    fontWeight: '700',
    color: '#2c6273',
    margin: '10pt',
    width: '100%',
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#fcb628' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <img
              src={Caravan}
              alt=""
              style={{ width: '90px', height: '89px', marginBottom: '-15px' }}
            />
            <img
              src={Name}
              alt=""
              style={{
                width: '150px',
                height: '60px',
                marginBottom: 'auto',
                marginTop: 'auto',
              }}
            />
          </div>
          <Box>
            <Link href="#ContactUs" className={classes.links}>
              Contact Us
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

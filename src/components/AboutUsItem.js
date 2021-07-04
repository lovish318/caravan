import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
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

export default function AboutUsItem(props) {
  return (
    <Card className="aboutus-root">
      <CardActionArea>
        <CardMedia
          className="aboutus-media"
          image={
            props.heading == 'In-City Ride'
              ? card1
              : props.heading == 'Out-Station Travels'
              ? card2
              : card3
          }
        />
        <CardContent className="aboutus-content">
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ textAlign: 'left' }}
          >
            {props.heading}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: 'left' }}
          >
            {props.info}
          </Typography>
        </CardContent>
        {props.heading == 'In-City Ride' ? (
          <Box className="aboutus-iconDiv">
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={ct1}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                AC Cabs
              </Typography>
            </div>
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={ct2}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Pocket Friendly
              </Typography>
            </div>
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={ct3}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Cashless Rides
              </Typography>
            </div>
          </Box>
        ) : props.heading == 'Out Station' ? (
          <Box className="aboutus-iconDiv">
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={os1}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                One-Way Trips
              </Typography>
            </div>
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={os2}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Advance Booking
              </Typography>
            </div>
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={os3}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Safe Rides
              </Typography>
            </div>
          </Box>
        ) : (
          <Box className="aboutus-iconDiv">
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={rental1}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Hourly Packages
              </Typography>
            </div>
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={rental2}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Multiple Stops
              </Typography>
            </div>
            <div style={{ display: 'flex', width: '30%' }}>
              <img
                src={rental3}
                alt=""
                style={{ width: '25px', marginRight: '10px' }}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="aboutus-iconInfo"
              >
                Top-Rated Partners
              </Typography>
            </div>
          </Box>
        )}
      </CardActionArea>
    </Card>
  )
}

import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import AboutUsItem from '../components/AboutUsItem'
import './style.css'

export default function MediaCard() {
  return (
    <Paper className="coursel-paper">
      <h2
        style={{ textAlign: 'left', marginBottom: '20px', marginLeft: '10px' }}
      >
        Who We Are?
      </h2>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className="aboutus-maintxt"
      >
        Caravan, an initiative to rekindle the beauty of journeys and fulfilled
        destinations, in the wake of coronavirus pandemic. We are here to make
        up for all the lost stories and beginnings during the nationwide
        lockdown, by bringing to you the most affordable, comfortable, and
        convenient cab service operating across India.
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className="aboutus-maintxt"
      >
        Strictly complying to all the rules and regulations formulated by the
        government, our services ensure the safety of our customers and people
        around us. In these tough times, our brave drivers are on the road
        safeguarding your way to your destination.
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className="aboutus-maintxt"
      >
        We have a wide range of cars tailor made according to your requirements
        and interests. So wherever and whatever your plans are, your perfect
        carriage is with us just a few clicks away.
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className="aboutus-maintxt"
      >
        You pick, we provide.
      </Typography>
      <h2 style={{ textAlign: 'left', marginTop: '20px', marginLeft: '10px' }}>
        What We Do?
      </h2>
      <h4 style={{ textAlign: 'left', marginTop: '10px', marginLeft: '10px' }}>
        A Car For Every Occasion
      </h4>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <AboutUsItem
            heading="In-City Ride"
            info={`Need a cab within your city? Shopping sprees? Movie dates? Dinner get-togethers? Last minute office rides? Just ping us and we will be there at your door step within minutes. Go pocket-friendly at just Rs 7 per km and ride comfortably yet efficiently with us. `}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <AboutUsItem
            heading="Out-Station Travels"
            info="Finally, planning that family road trip? Or that beautiful and coy romantic getaway with your special one? Or that much-needed expedition with friends to blow off some steam? With stepwise unlocking happening nationwide, shrug off all the excuses and take the first step of your journey with us. From mountains to deserts to beaches, we got you covered all across the country. Now, what are you waiting for? Go pack your bags and give us a call for a cozy, safe, and exciting head start on your travels."
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <AboutUsItem
            heading="Rental Luxary Cars"
            info="You go an extra mile for your big days and special moments. Our rental services for exquisite and luxurious cars help you add an extra flair to these events and glam up your A-game. Just choose from our collection and leave it to us to cater to you a hassle-free, effortless service."
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

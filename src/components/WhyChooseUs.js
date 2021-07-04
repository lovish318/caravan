import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'
import WhyChooseUsItem from '../components/WhychooseUsItem'
const useStyles = makeStyles((theme) => ({
  itemHeading: {
    fontSize: '15pt',
    fontWeight: '600',
    textAlign: 'left',
  },
  itemDetail: {
    fontSize: '11pt',
    fontWeight: '500',
    textAlign: 'left',
  },
  itemImg: {
    height: '50pt',
    width: '50pt',
    marginRight: '10pt',
  },
}))
export default function WhyChooseUs() {
  const classes = useStyles()

  return (
    <Paper className="coursel-paper">
      <h2 style={{ textAlign: 'left', marginBottom: '-20px' }}>Why Us?</h2>
      <Grid container justify="spaceBetween">
        <Grid item xs={12} sm={6}>
          <WhyChooseUsItem
            heading="Economical"
            info="Minimal prices in the market for top-notch quality services and a wholesome experience. We take pride in our competent affordability."
          />
          <WhyChooseUsItem
            heading="No Cash? No Problem!"
            info="You get to choose your mode of payment. No need to worry about the trouble of in-cash transactions. Go cashless and pay through any online payment portal of your convenience."
          />
          <WhyChooseUsItem
            heading="Secure And Safe Rides"
            info="Your safety is our topmost priority. Every car is equipped with a GPS tracker and the movements are constantly monitored. In case of an emergency, we have proper contact information on the display of the car, you can contact us at any point of the journey. We are here to help."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WhyChooseUsItem
            heading="In-Cab Environment"
            info="Hygienic, well maintained and modernly equipped cabs with experienced well-versed drivers, are what we promise to you and exactly what we deliver. Play your music, stream videos, facilitate on demand WiFi, and so much more. Style your ride the way you want and vibe with these roads a bit harder."
          />
          <WhyChooseUsItem
            heading="Wide Range of Options"
            info="Life might not give many options, but our collection and variety of cars do. Laidback?  Classy? Sporty? Spacious? From sedans to hatchbacks to SUVs, we have a cab for every mood. Take your time, have a look, and make your pick."
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

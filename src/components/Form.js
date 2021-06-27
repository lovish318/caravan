import React, { useState } from 'react'
import { Grid, makeStyles, Typography, Paper, Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import hatchback from '../utils/images/hatchback_new.png'
import sedan from '../utils/images/sedan_new.png'
import suv from '../utils/images/xylo_new.png'
import cover from '../utils/images/cover.jpg'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  flex: {
    display: 'flex',
    borderRadius: '50px',
    border: 'solid 1px #e7eaf3',
    padding: '20px',
    width: '280px',
    margin:'auto'
  },
  carIcon: {
    height: '60px',
  },
  cartypeTxt: {
    margin: '10px',
    marginTop: '20px',
    fontWeight: '600',
  },
  cartypeInput: {
    marginTop: '18px',
    border: 0,
    width: '100%',
    height: '2em',
    textAlign:'center'
    
  },
  input: {
    width:'100%'
  }
}))

const Form = ({ handleClose }) => {
  const classes = useStyles()
  const [tripType, settripType] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [cabType, setCabType] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [time, setTime] = useState(new Date('2014-08-18T21:11:54'))
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  )

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const tripTypes = [
    { title: 'Outstation One-way' },
    { title: 'Outstation Round-trip' },
    { title: 'Cab From Airport' },
    { title: 'Cab To Airport' },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(cabType,
      tripType,
      from,
      to,
      selectedDate,
      time)
    try {
      console.log(from)
      const response = await fetch(
        'https://v1.nocodeapi.com/lovish318/google_sheets/QFqYtscDADtxISKC?tabId=Sheet1',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([
            [
              cabType,
              tripType,
              from,
              to,
              email,
              mobile,
              selectedDate.getUTCDate(),
              time.getTime(),
              new Date().toLocaleString(),
            ],
          ]),
        }
      )
      console.log(response)
      await response.json()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Paper style={{ width: '88%', margin: '30px auto' }}>
      <form className={classes.root} onSubmit={handleSubmit}>
        
        <Typography
          style={{
            textAlign: 'left',
            marginTop: '30px',
            width: '100%',
            fontWeight: '700',
            fontSize: '1 rem',
          }}
        >
          CAB TYPE
        </Typography>
        <Grid container justify='space-around'>
          <Grid item xs={12} sm={4}>
            <label for="hatchback" className={classes.flex}>
              <img src={hatchback} className={classes.carIcon} alt="" />
              <Typography className={classes.cartypeTxt}>HATCHBACK</Typography>
              <input
                className={classes.cartypeInput}
                type="radio"
                name="carType"
                id="hatchback"
                onClick={() => {
                  setCabType('hatchback')
                }}
              />
            </label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <label for="sedan" className={classes.flex}>
              <img src={sedan} className={classes.carIcon} alt="" />
              <Typography className={classes.cartypeTxt}>SEDAN</Typography>
              <input
                className={classes.cartypeInput}
                type="radio"
                name="carType"
                id="sedan"
                onClick={() => {
                  setCabType('sedan')
                }}
              />
            </label>
          </Grid>
          <Grid item xs={12} sm={4}>
            <label for="suv" className={classes.flex}>
              <img src={suv} className={classes.carIcon} alt="" />
              <Typography className={classes.cartypeTxt}>SUV</Typography>
              <input
                className={classes.cartypeInput}
                type="radio"
                name="carType"
                id="suv"
                onClick={() => {
                  setCabType('suv')
                }}
              />
            </label>
          </Grid>
        </Grid>
        <Typography
          style={{
            textAlign: 'left',
            marginTop: '30px',
            width: '100%',
            fontWeight: '700',
            marginBottom: '20px',
          }}
        >
          TRIP DETAILS
        </Typography>
        <Grid container>
        <Grid item xs={12} sm={6}>
          <img src={cover} alt='' style={{width:'78%',height:'55vh'}}/>
        </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12}>
                <Autocomplete
                  id="Trip type"
                  options={tripTypes}
                  getOptionLabel={(option) => option.title}
                  popupIcon={false}
                  className={classes.input}
                  onInputChange={(o,v)=>{console.log(v,settripType(v))}}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Trip Type"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="from" label="From" value={from} onChange={(e)=>{setFrom(e.target.value)}} variant='outlined' className={classes.input}/>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="to" label="To" value={to} onChange={(e)=>{setTo(e.target.value)}} variant='outlined' className={classes.input}/>
              </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={12} sm={6}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  className={classes.input}
                  value={selectedDate}
                  inputVariant="outlined"
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Time picker"
                  className={classes.input}
                  value={selectedDate}
                  inputVariant="outlined"
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={12}>
                <TextField id="Email" label="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} variant='outlined' className={classes.input}/>
              </Grid>
              <Grid item xs={12}>
              <TextField id="Mobile" required label="Mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} variant='outlined' className={classes.input}/>
              </Grid>
            </Grid>
            <div>
          <Button type="submit" variant="contained" style={{background:"#fcb628",color:'#fff',fontWeight:'bold',width:'25%'}}>
            Query
          </Button>
        </div>
          </Grid>
          
        </Grid>
       
      </form>
    </Paper>
  )
}

export default Form

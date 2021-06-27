import React, { useState } from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useForm, Controller } from 'react-hook-form'
import hatchback from '../utils/images/hatchback_new.png'
import './Form.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  flex: {
      display:"flex"
  }
  
}))

const Form = ({ handleClose }) => {
  const classes = useStyles()
  const {handleSubmit, control } = useForm()
  const [ tripType, settripType ] = useState('')
  const [from, setFrom ] = useState('')
  const [ to, setTo ] = useState('')
  const [ cabType, setCabType ] = useState('')
  const [ time, setTime ] = useState('')
  const [ date, setDate ] = useState('')

  const tripTypes = [
    { title: 'Outstation One-way' },
    { title: 'Outstation Round-trip' },
    { title: 'Cab From Airport' },
    { title: 'Cab To Airport' },
  ]

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        
            <label for="hatchback" className={classes.flex}>
                
            <img src={hatchback}/>
            <p>Hatchback</p>
            <input type='radio' name="carType" id="hatchback" onClick={()=>{setCabType('htachback')}}/>
            </label>
            
            
        <div>
            <label for="a">
                
            <img src={hatchback}/>
            <p>Hatchback</p>
            
            </label>
            <input type='radio' name="carType" id="a" onClick={()=>{setCabType('sedan')}}/>
            
        </div>
      
      <div style={{ display: 'flex'}}>
        <Autocomplete
          id="Trip type"
          options={tripTypes}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Trip Type" variant="outlined" />
          )}
        />

        <Autocomplete
          id="From"
          options={tripTypes}
          freeSolo
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Trip Type" variant="outlined" />
          )}
        />

        <Autocomplete
          id="To"
          options={tripTypes}
          freeSolo
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Trip Type" variant="outlined" />
          )}
        />
      </div>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
          />
        )}
        rules={{ required: 'Email required' }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: 'Password required' }}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  )
}

export default Form

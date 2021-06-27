import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cover from '../utils/images/cover.jpeg'
import review1 from '../utils/images/review1.jpeg'
import review2 from '../utils/images/review2.jpeg'
import review3 from '../utils/images/review3.jpeg'
import review5 from '../utils/images/review5.jpeg'
import review4 from '../utils/images/review4.jpeg'

import { Paper } from '@material-ui/core'


export const DemoCarousel = () => {
  return (
    <Paper style={{padding:'30px',margin:'30px auto',width:'88%'}}>
    <h2 style={{textAlign:'left'}}>Reviews</h2>
    <Carousel style={{background:'#fcb628' }}>
      <Carousel.Item>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img className="d-block" src={review1} alt="First slide" style={{width: '35%',height:'300px',margin:'50px auto'}}/>
        <p style={{margin:'9% auto',width:'35%',color:'#fff',fontSize:'18px',marginLeft:-26}}>We booked their cab for our group of 5 friends on our trip to manali and the service was amazing available at very convenient price.It was a wonderful experience.There was no hassle from either the driver's side or the company’s side.Things went on pretty smoothly.</p>
        </div>      
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img className="d-block" src={review3} alt="First slide" style={{width: '35%',height:'300px',margin:'50px auto'}}/>
        <p style={{margin:'8% auto',width:'35%',color:'#fff',fontSize:'18px',marginLeft:-26}}>I had a really good experience with CARAVAN. Even after making booking at a short notice, I was given a really good service. Highly professional people and I’d recommend them to family and friends</p>
        </div>      
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img className="d-block" src={review2} alt="First slide" style={{width: '35%',height:'300px',margin:'50px auto'}}/>
        <p style={{margin:'8% auto',width:'35%',color:'#fff',fontSize:'18px',marginLeft:-26}}>It was my 4th trip around holi and every time CARAVAN has exceeded my expectations. I have travelled across destinations in Rajasthan with CARAVAN and every time I have been given 5 star experience. Their cars are new and very well maintained and all the drivers assigned to my duty were extremely polite and knowledgable. Highly recommended. All the best CARAVAN</p>
        </div>      
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img className="d-block" src={review4} alt="First slide" style={{width: '35%',height:'300px',margin:'50px auto'}}/>
        <p style={{margin:'8% auto',width:'35%',color:'#fff',fontSize:'18px',marginLeft:-26}}>CARAVAN offers the best in class service. It's pocket friendly, easy to book and totally hassle-free. It's safe as well and the service is simply amazing. If you're planning a road trip, CARAVAN is your answer.</p>
        </div>      
      </Carousel.Item>
      <Carousel.Item>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img className="d-block" src={review5} alt="First slide" style={{width: '35%',height:'300px',margin:'50px auto'}}/>
        <p style={{margin:'8% auto',width:'35%',color:'#fff',fontSize:'18px',marginLeft:-26}}>We acknowledge the fact that CARAVAN was available at our wedding departure providing their well-maintained car with an enjoyable ride back home. Everyone praised this luxury. Thank you CARAVAN.</p>
        </div>      
      </Carousel.Item>
      
    </Carousel>
    </Paper>
  )
}

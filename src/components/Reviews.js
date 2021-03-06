import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import review1 from '../utils/images/review1.JPG'
import review2 from '../utils/images/review2.jpg'
import review3 from '../utils/images/review3.jpeg'
import review5 from '../utils/images/review5.jpg'
import review4 from '../utils/images/review4.JPG'
import review6 from '../utils/images/review6.jpg'
import review7 from '../utils/images/review7.jpg'
import review8 from '../utils/images/review8.jpg'

import { Paper, Grid } from '@material-ui/core'

export const DemoCarousel = () => {
  return (
    <Paper className="coursel-paper">
      <h2 className="coursel-heading">Happy Customers!</h2>
      <Carousel className="coursel">
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block coursel-img"
              src={review1}
              alt="First slide"
            />

            <p className="coursel-desc">
              We booked their cab for our group of 5 friends on our trip to
              manali and the service was amazing available at very convenient
              price.It was a wonderful experience.There was no hassle from
              either the driver's side or the company’s side.Things went on
              pretty smoothly.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review3}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              I had a really good experience with CARAVAN. Even after making
              booking at a short notice, I was given a really good service.
              Highly professional people and I’d recommend them to family and
              friends
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review2}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              It was my 4th trip around holi and every time CARAVAN has exceeded
              my expectations. I have travelled across destinations in Rajasthan
              with CARAVAN and every time I have been given 5 star experience.
              Their cars are new and very well maintained and all the drivers
              assigned to my duty were extremely polite and knowledgable. Highly
              recommended. All the best CARAVAN
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review4}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              CARAVAN offers the best in class service. It's pocket friendly,
              easy to book and totally hassle-free. It's safe as well and the
              service is simply amazing. If you're planning a road trip, CARAVAN
              is your answer.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review5}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              We acknowledge the fact that CARAVAN was available at our wedding
              departure providing their well-maintained car with an enjoyable
              ride back home. Everyone praised this luxury. Thank you CARAVAN.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review6}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              We made the plan pretty much at the last moment. The car arrived
              right on time. The condition and maintenance of the car were very
              good, all the promised facilities were there. The driver seemed
              really nice and friendly. He even shared few stories of his own
              along the way and gave us quite good recommendations. It was a
              memorable experience. Looking forward to riding with Caravan
              again.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review7}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              Our exams were scheduled to be conducted offline and we were asked
              to report to campus at a short notice. It was very problematic as
              public transport was out of the question and private taxis were
              unavailable. That’s when we heard about Caravan and contacted
              them. From there, on the whole, the process went on quite
              smoothly. They were very understanding about our situation and
              assured us of our safety as well as our timely arrival. They lived
              up to their word and we are thankful for their service.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="coursel-layout">
            <img
              className="d-block"
              src={review8}
              alt="First slide"
              className="coursel-img"
            />
            <p className="coursel-desc">
              It got really hard due to all the Covid complications and
              regulations to commute. We needed to visit our hometown as we were
              stuck in a foreign place with no work. We inquired around about
              taxis but the prices at which they were offering were pretty high
              and not something we could afford with our savings. We were
              helpless. But with the caravan, we found our solution. They
              offered just the reasonable price of the journey without any
              additional costs and even assisted us with the needed Covid check.
              Finally, we were able to reach our destination, which seemed
              impossible at a time.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </Paper>
  )
}

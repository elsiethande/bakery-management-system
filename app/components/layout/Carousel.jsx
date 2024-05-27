'use client'

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"/Birthdaycake1.jpg"}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"/Birthdaycake2.jpg"}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"/Birthdaycake3.jpg"}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}
export default Slider;
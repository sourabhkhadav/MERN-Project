import React from 'react'
import Tittle from './Tittle.jsx'
import { assets } from '../assets/assets.js'

const Testimonial = () => {

  //  Testimonial Data
  const testimonials = [
    { 
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: assets.testimonial_image_1,
      testimonial: "I rented a car for a weekend trip and the whole process was super smooth. The vehicle was clean, well-maintained, and exactly as shown on the website."
    },
    { 
      name: "Liam Johnson",
      location: "New York, USA",
      image: assets.testimonial_image_2,
      testimonial: "Great experience renting a vehicle here. Pick-up and drop-off were quick, pricing was transparent, and the car ran perfectly."
    },
    { 
      name: "Sophia Lee",
      location: "Seoul, South Korea",
      image: assets.testimonial_image_1,
      testimonial: "One of the best car rental services I’ve used. Customer support was friendly and the vehicle was in great condition."
    }
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">

      <Tittle 
        tittle="What our customers say"
        subTittle="Discover why travelers choose StayVenture for premium rentals."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow hover:-translate-y-1 transition-all duration-500"
          >
            {/* Top profile wala section */}
            <div className="flex items-center gap-3">
              <img 
                className="w-12 h-12 rounded-full" 
                src={testimonial.image} 
                alt={testimonial.name} 
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5).fill(0).map((_, index) => (
                <img key={index} src={assets.star_icon} alt="star-icon" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-500 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Testimonial

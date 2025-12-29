import React from 'react'
import { useState } from "react"
import { assets } from '../../assets/assets'

import Tittle from '../../components/owner/Tittle'

const AddCar = () => {
  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    transmission: '',
    fuelType: '',
    seatingCapacity: '',
    location: '',
    description: '',
    category:''
  })
  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  const currency=import.meta.env.VITE_CURRENCY_SYMBOL || '$'
  return (
    <div className='px-4 py-10 mx:px-10 flex-1 '>
      <Tittle title="add new car" subtitle="filll in details to list a new car for the bookings,including pricing ,availability ,and car specifications" />
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 
    text-gray-500 text-sm mt-6 max-w-xl'>
        {/* car image */}
        <div className=' flex items-center gap-2 w-full'>
          <label htmlFor='car-image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt=''
              className='h-14 rounded cursor-pointer' />
            <input type='file' id='car-image' accept='image/*' hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
          <p className='text-sm text-gray-500'>upload a picture of your car</p>
        </div>
        {/* car brand and model */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type='text' placeholder='e.g. BMW Audi KIA ' required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.brand} onChange={e => setCar({ ...car, brand: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type='text' placeholder='e.g. X5 A4 Sonet ' required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.model} onChange={e => setCar({ ...car, model: e.target.value })} />
          </div>
        </div>

        {/* YEAR + PRICE + CATEGORY IN SAME ROW */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type='number' placeholder='e.g. 2022' required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.year} onChange={e => setCar({ ...car, year: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Price Per Day ({currency}) </label>
            <input type='number' placeholder='e.g. 2500' required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.pricePerDay} onChange={e => setCar({ ...car, pricePerDay: e.target.value })} />
          </div>

          <div className='flex flex-col w-full'>
            <label>Category</label>
            <select required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.category} onChange={e => setCar({ ...car, category: e.target.value })}>
              <option value=''>Select Category</option>
              <option value='Sedan'>Sedan</option>
              <option value='SUV'>SUV</option>
              <option value='Hatchback'>Hatchback</option>
              <option value='Coupe'>Coupe</option>
              <option value='Convertible'>Convertible</option>
              <option value='Pickup'>Pickup</option>
              <option value='Van'>Van</option>
            </select>
          </div>
        </div>

 {/* car transmision fuel type seatingCapacity */}
<div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className='flex flex-col w-full'>
  <label>Transmission</label>
  <select required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.transmission} onChange={e => setCar({ ...car, transmission: e.target.value })}>
    <option value=''>Select Transmission</option>
    <option value='Automatic'>Automatic</option>
    <option value='Manual'>Manual</option>
    <option value='AMT'>AMT</option>
    <option value='CVT'>CVT</option>
    <option value='Dual-Clutch'>Dual-Clutch</option>
  </select>
</div>

<div className='flex flex-col w-full'>
  <label>Fuel Type</label>
  <select required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.fuelType} onChange={e => setCar({ ...car, fuelType: e.target.value })}>
    <option value=''>Select Fuel Type</option>
    <option value='Petrol'>Petrol</option>
    <option value='Diesel'>Diesel</option>
    <option value='CNG'>CNG</option>
    <option value='Hybrid'>Hybrid</option>
    <option value='EV'>EV</option>
  </select>
</div>

<div className='flex flex-col w-full'>
  <label>Seating Capacity</label>
  <input type='number' placeholder='e.g. 5' required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.seatingCapacity} onChange={e => setCar({ ...car, seatingCapacity: e.target.value })} />
</div>

</div>

{/* location and discription */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

  <div className='flex flex-col w-full md:col-span-3'>
    <label>Location</label>
    <select required className='px-3 py-2 mt-1 border border-borderColor rounded-md w-full 
outline-none ' value={car.location} onChange={e => setCar({ ...car, location: e.target.value })}>
      <option value=''>Select Location</option>
      <option value='New York'>New York</option>
      <option value='London'>London</option>
      <option value='Dubai'>Dubai</option>
      <option value='Sydney'>Sydney</option>
      <option value='Toronto'>Toronto</option>
      <option value='Tokyo'>Tokyo</option>
      <option value='Paris'>Paris</option>
      <option value='Singapore'>Singapore</option>
    </select>
  </div>

</div>


<div className='flex flex-col w-full'>
  <label>Description</label>
  <textarea placeholder='Write about the car...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md 
outline-none ' value={car.description} onChange={e => setCar({ ...car, description: e.target.value })}></textarea>
</div>

<button  className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary 
text-white rounded-md font-medium w-max cursor-pointer'>
  List your car 
</button>

      </form>

    </div>
  )
}

export default AddCar

import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { dummyCarData, assets } from '../assets/assets';

const CarDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const currency=import.meta.env.VITE_CURRENCY_SYMBOL || '$';

  const [car, setCar] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  React.useEffect(() => {
    const found = dummyCarData.find(c => String(c._id) === String(id));
    setCar(found);
  }, [id])


  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">

      {/* 🔙 BACK BUTTON — ALWAYS WORKING */}
      <button 
        onClick={() => navigate(-1)} 
        className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'
        type="button"
      >
        <img src={assets.arrow_icon} alt='' className='rotate-180 opacity-65' />
        Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>

        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          <img 
            src={car.image} 
            alt='' 
            className='w-full h-auto md:max-h-96 object-cover rounded-xl mb-6 shadow-md' 
          />

          <div className='space-y-6'>

            <div>
              <h1 className='text-3xl font-bold'>{car.brand} {car.model}</h1>
              <p className='text-gray-500 text-lg'>{car.category} • {car.year}</p>
            </div>

            <hr className='border-gray-300 my-6' />

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[
                {icon: assets.users_icon, text:`${car.seating_capacity} Seats`},
                {icon: assets.fuel_icon, text:car.fuel_type},
                {icon: assets.car_icon, text:car.transmission},
                {icon: assets.location_icon, text:car.location},
              ].map(({icon, text}) => (
                <div key={text} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
                  <img src={icon} alt='' className='h-5 mb-2'/>
                  {text}
                </div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Description</h1>
              <p className='text-gray-500'>{car.description}</p>
            </div>

            {/* FEATURES */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Features</h1>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'> 
                {[
                  'Air Conditioning','Leather Seats','Bluetooth Connectivity','Backup Camera',
                  'Cruise Control','Keyless Entry','Heated Seats','Sunroof/Moonroof'
                ].map((item)=>(  
                  <li key={item} className='flex items-center text-gray-500'> 
                    <img src={assets.check_icon} className='h-4 mr-2' alt=""/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (BOOKING FORM — BAAD ME ADD KARNA) */}
        <form  onSubmit={handleSubmit} className='shadow-lg h-max sticky top-16 rounded-xl p-6 space-y-6 text-gray-500'>


          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>
            {currency}{car.pricePerDay}  <span className='text-base text-gray-400 font-normal'>/  day</span></p> 

            <hr className='border-gray-300 my-6' />
  
    <div className='flex flex-col gap-2'>
  <label htmlFor="pickup-date">Pickup Date</label>
  <input
    type="date"
    id="pickup-date"
    className="border border-gray-300 px-3 py-2 rounded-lg"
    required
    min={new Date().toISOString().split('T')[0]}
  />
</div>
 
<div className='flex flex-col gap-2'>
  <label htmlFor="return-date">return Date</label>
  <input
    type="date"
    id="return-date"
    className="border border-gray-300 px-3 py-2 rounded-lg"
  />
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 font-medium text-white rounded-xl cursor-pointer"> Book now</button>
<p className='text-center text-sm'>no credit card required to reserve</p>


        </form>

      </div>
    </div>
  ) : (
    <p className='text-center mt-20 text-gray-500 text-lg'>Loading…</p>
  )
}

export default CarDetails

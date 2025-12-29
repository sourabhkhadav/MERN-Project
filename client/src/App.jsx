import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CarDetails from './pages/CarDetails.jsx'
import Cars from './pages/Cars.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Footer from './components/Footer.jsx'

// OWNER PAGES
import Layout from './pages/owner/Layout.jsx'
import Dashboard from './pages/owner/Dashboard.jsx'
import AddCar from './pages/owner/AddCar.jsx'
import ManageCars from './pages/owner/ManageCars.jsx'
import ManageBookings from './pages/owner/ManageBookings.jsx'
import Login from './components/Login.jsx'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const { pathname } = useLocation()

  const isOwnerPath = pathname.toLowerCase().startsWith('/owner')

  return (
    <>
    {showLogin && <Login setShowLogin={setShowLogin} />}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* OWNER ROUTES */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App

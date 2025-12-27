import { Route } from 'react-router-dom';
import react from 'react';
import Navbar from './components/Navbar.jsx';
import { useLocation } from 'react-router-dom';
import { Routes} from 'react-router-dom';
import { Home } from './Home.jsx';
import CarDetails from './CarDetails.jsx';
import Cars from './Cars.jsx';
import MyBookings from './MyBookings.jsx';

function App() {
  const [showLogin, setShowLogin] = react.useState(false);
  const isOwnerPath=useLocation().pathname.startsWith('/Owner');
  return (
     <>
  { isOwnerPath &&  <Navbar setShowLogin={setShowLogin} />}

  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/car-details/:id' element={<CarDetails/>}/>
<Route path='/cars' element={<Cars/>}/>
<Route path='/my-bookings' element={<MyBookings/>}/>
  </Routes>
     </>
  );
}

export default App;
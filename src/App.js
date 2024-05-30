
// import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Ownerlogin from './pages/Ownerlogin';
import Tennentlogin from './pages/Tennentlogin';
import Ownersignup from './pages/Ownersignup';
import Tennentsignup from './pages/Tennentsignup';
import Ownerlanding from './pages/Ownerlanding';
import Tennentlanding from './pages/Tennentlanding';
import OwnerProfile from './pages/OwnerProfile';
import OwnerPayments from './pages/OwnerPayments';
import EditHouse from './pages/EditHouse';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/ownerlogin' element={<Ownerlogin/>}></Route>
    <Route path='/tennentlogin' element={<Tennentlogin/>}></Route>
    <Route path='/ownersignup' element={<Ownersignup/>}></Route>
    <Route path='/tennentsignup' element={<Tennentsignup/>}></Route>
    <Route path='/ownerlanding' element={<Ownerlanding/>}></Route>
    <Route path='/tennentlanding' element={<Tennentlanding/>}></Route>
    <Route path='/ownerprofile' element={<OwnerProfile/>}></Route>
    <Route path='/edithouse/:id' element={<EditHouse/>}></Route>
    <Route path='/ownerpayments' element={<OwnerPayments/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;

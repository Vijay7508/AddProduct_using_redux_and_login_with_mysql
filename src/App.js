import Login from './components/Login';
import Admin from './components/Admin_Home';
import Customer from './components/View_cart';
import AddedData from './components/AddedData';
import Payment from './components/payment';
import Home from './components/Home';
import Register from './components/Register';
import PrivateRoute from "./Authenticated";


import { Route, Routes} from 'react-router-dom';

import NoteState from './NoteContext/NoteState';

import Vijay from './Navbar';
function App() {
  return (
    <div>
  <NoteState>
<Vijay/>
<Routes>
<Route path="/" element={<Home/>} />

     <Route  path="/customer" element={<Customer/>} />
    <Route  path="/login" element={<Login/>} />

    <Route path="/admin" element={<PrivateRoute/>} />
  
    <Route  path="/register" element={<auth/>} />


    <Route  path="/viewcart" element={<AddedData/>} />
    <Route  path="/payment" element={<Payment/>} />


 </Routes>
 </NoteState>     
    </div>
  );
}

export default App;

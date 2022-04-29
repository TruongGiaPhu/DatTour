import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
// import NewUser from './pages/newPage/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Profile from './pages/profile/Profile';
import Login from './components/login/Login';
import NotFound from './components/notfound/NotFound';
import GotoTop from './components/goToTop/GotoTop';
import StaffList from './pages/staffList/StaffList';
import Staff from './pages/staff/Staff';
import NewStaff from './pages/newStaff/NewStaff'
import BillList from './pages/billList/BillList';
import Bill from './pages/bill/Bill';
import React from 'react';
import TicketList from './pages/ticketList/TicketList';
import NewTicket from './pages/newTicket/NewTicket';
import Ticket from './pages/ticket/Ticket';
import AddressList from './pages/address/AddressList';
// import MultipleImg from './components/multipleImg/MultipleImg';


function App() {

  // const currentUser = true;

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // }

  return (
    <>
      <BrowserRouter >
        <Topbar />
        <GotoTop />
        <Sidebar />
        <div className='container'>
          <Routes>
            <Route path='/' >
              <Route path='/' element={<Login />} />
              <Route index path='home' element={<Home />} />
              <Route path='users'>
                <Route index element={<UserList />} />
                <Route index path=':userId' element={<User />} />
              </Route>
              <Route path='products' >
                <Route index element={<ProductList />} />
                <Route index path=':productId' element={<Product />} />
                <Route index path='newproduct' element={<NewProduct />} />
              </Route>
              <Route path='Staffs'>
                <Route index element={<StaffList />} />
                <Route index path=':staffId' element={<Staff />} />
                <Route index path='newstaff' element={<NewStaff />} />
              </Route>

              <Route index path='profile/:Id' element={<Profile />} />
              <Route path='Ticket'>
                <Route index element={<TicketList />} />
                <Route index path='newticket' element={<NewTicket />} />
                <Route index path=':ticketId' element={<Ticket />} />
              </Route>

              <Route path='earth'>
                <Route index element={<AddressList />} />
              </Route>


              {/* <Route path='/newUser' element={<NewUser />} /> */}
              <Route path='bills'>
                <Route index element={<BillList />} />
                <Route index path=':billId' element={<Bill />} />
              </Route>
              <Route index path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
